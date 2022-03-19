const dotenv = require('dotenv');
dotenv.config({ path: 'config/.env' });
//const configFile = require(`./${process.env.NODE_ENV || 'development'}.json`);
const configFile = require(`./development.json`);

module.exports = {
	nodeEnv: process.env.NODE_ENV,
	port: configFile.port,
	mongo: configFile.database.mongodb,
	jwt: configFile.jwt,
	mail: configFile.mail,
	bcrypt: configFile.bcrypt,
	assetsPath: configFile.assetsPath,
	removeBg: configFile.removeBg,
};
