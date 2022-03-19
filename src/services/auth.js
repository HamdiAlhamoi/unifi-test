const fs = require('fs').promises;
const { Exception, errors } = require('../helpers');
const {User}=require('../models')
const JWT = require('jsonwebtoken');
const { jwt } = require('../config/development.json');
const bcrypt=require('bcrypt')
class UserService {
	constructor(data = {}) {
		this.name = data.name;
		this.email = data.email;
        this.password = data.password;
	}

	async login() {
        const data=this;
        console.log(data);
        if(!data.password || !data.email) throw new Exception(errors.INVALID_EMAIL_OR_PASSWORD)
		const result = await  User.findOne({email:data.email})
        console.log(result.password);
        if(!result) throw new Exception(errors.INVALID_EMAIL_OR_PASSWORD)
        let passwordIsValid = bcrypt.compareSync(
            data.password,
            result.password
        );
        if (!passwordIsValid)
                throw new CustomError(errors.INVALID_EMAIL_OR_PASSWORD);
        const accessToken = JWT.sign({ id: result.id }, jwt.accessToken.key, {
            expiresIn: jwt.accessToken.expirationDuration,
        });
      
		return { accessToken: accessToken };
	}

}

module.exports = UserService;
