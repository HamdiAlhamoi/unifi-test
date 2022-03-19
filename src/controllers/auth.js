const AuthService=require('../services/auth')
const { httpStatus, responseSender,statusCodes }=require('../helpers')
module.exports={
    login:async (req,res)=>{
        const {body}=req;
        const result=await new AuthService(body).login()
        responseSender(res,{responseData:result,httpCode:httpStatus.CREATED,responseStatus:statusCodes.SUCCESS})
    },
    
}