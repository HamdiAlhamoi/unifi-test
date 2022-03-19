const fs = require('fs').promises;
const { Exception, errors } = require('../helpers');
const {Todo}=require('../models')

class TodoService {
	constructor(data = {}, file) {
		this.title = data.title;
		this.body = data.body;
        this.date = data.date;
        this.userId='6026fe33328dcf2310b6aabb';
	}

	async add() {
        const data=this;
		const result = await new Todo(data).save()
		return { id: result.id };
	}

	async update(id) {
        const data=this;
		const result=await Todo.findOneAndUpdate({_id:id,userId:'6026fe33328dcf2310b6aabb'},data, { omitUndefined: true });

        if(!result) throw new Exception(errors.ITEM_NOT_FOUND)
		return;
	}

	static async remove(id) {
		const result=await Todo.findOneAndDelete({_id:id,userId:'6026fe33328dcf2310b6aabb'});
        if(!result) throw new Exception(errors.ITEM_NOT_FOUND);
        return;
	}

	static async get(id) {
		let result =await Todo.findOne({_id:id,userId:'6026fe33328dcf2310b6aabb'});
        if(!result) throw new Exception(errors.ITEM_NOT_FOUND);
        return result;

	}
}

module.exports = TodoService;
