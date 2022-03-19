const TodoService=require('../services/todo')
const { httpStatus, responseSender,statusCodes }=require('../helpers')
module.exports={
    add:async (req,res)=>{
        const {body}=req;
        const user=req.user;
        const result=await new TodoService(body).add(user.id)
        responseSender(res,{responseData:result,httpCode:httpStatus.CREATED,responseStatus:statusCodes.SUCCESS})
    },
    update:async (req,res)=>{
        const {body}=req;
        const {id}=req.params;
        const user=req.user;
        await new TodoService(body).update(id,user.id)
        responseSender(res,{responseData:'OK',httpCode:httpStatus.UPDATED,responseStatus:statusCodes.SUCCESS})
    },
    remove:async (req,res)=>{
        const {id}=req.params;
        const user=req.user;
        await TodoService.remove(id,user.id);
        responseSender(res,{responseData:'OK',httpCode:httpStatus.DELETED,responseStatus:statusCodes.SUCCESS})
    },
    get:async (req,res)=>{
        const {id}=req.params;
        const user=req.user;
        const result=await  TodoService.get(id,user.id)
        responseSender(res,{responseData:result,httpCode:httpStatus.OK,responseStatus:statusCodes.SUCCESS})
    },
}