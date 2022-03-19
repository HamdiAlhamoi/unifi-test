const { Exception, errors } = require('../helpers');
const JWT = require('jsonwebtoken');
const { jwt } = require('../config/development.json');
const {User}=require('../models')
verifyUserToken = (req, res, next) => {
    let token = req.headers.authorization;
    if (!token)
        throw new Exception(errors.INVALID_AUTH_TOKEN);
        JWT.verify(token, jwt.accessToken.key, async (err, decoded) => {
        if (err)
            throw new Exception(errors.INTERNAL_SERVER_ERROR);
            let user=await User.findById(decoded.id)
            if(!user) throw new Exception(errors.INVALID_AUTH_TOKEN)
            req.user=user;
            next();
            
    });
};

module.exports={
    verifyUserToken:verifyUserToken
}