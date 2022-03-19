const fs = require('fs').promises;
const { Exception, errors } = require('../helpers');
const {Todo}=require('../models')

class TodoService {
	constructor(data = {}, file) {
		this.title = data.title;
		this.body = data.body;
        this.date = data.date;
	}

	async add(userId) {
        const data=this;
        data.userId=userId
		const result = await new Todo(data).save()
		return { id: result.id };
	}

	async update(id,userId) {
        const data=this;
		const result=await Todo.findOneAndUpdate({_id:id,userId:userId},data, { omitUndefined: true });

        if(!result) throw new Exception(errors.ITEM_NOT_FOUND)
		return;
	}

	static async remove(id,userId) {
		const result=await Todo.findOneAndDelete({_id:id,userId:userId});
        if(!result) throw new Exception(errors.ITEM_NOT_FOUND);
        return;
	}

	static async get(id,userId) {
        let result
        if(id){
            result =await Todo.findOne({_id:id,userId:userId});
            if(!result) throw new Exception(errors.ITEM_NOT_FOUND);
        }
        result =await Todo.find({userId:userId})
		
        return result;

	}
}

module.exports = TodoService;
