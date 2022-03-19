const TodoService=require('../services/todo')
const { httpStatus, responseSender,statusCodes }=require('../helpers')
module.exports={
    add:async (req,res)=>{
        const {body}=req;
        const result=await new TodoService(body).add()
        responseSender(res,{responseData:result,httpCode:httpStatus.CREATED,responseStatus:statusCodes.SUCCESS})
    },
    update:async (req,res)=>{
        const {body}=req;
        const {id}=req.params;
        await new TodoService(body).update(id)
        responseSender(res,{responseData:'OK',httpCode:httpStatus.UPDATED,responseStatus:statusCodes.SUCCESS})
    },
    remove:async (req,res)=>{
        const {id}=req.params;
        await TodoService.remove(id);
        responseSender(res,{responseData:'OK',httpCode:httpStatus.DELETED,responseStatus:statusCodes.SUCCESS})
    },
    get:async (req,res)=>{
        const {id}=req.params;
        const result=await  TodoService.get(id)
        responseSender(res,{responseData:result,httpCode:httpStatus.OK,responseStatus:statusCodes.SUCCESS})
    },
}