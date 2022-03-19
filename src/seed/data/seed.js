console.log('Seeding Start');
console.time('Seeding finish in');
require('../../config');
const { sequelize } = require('utils');
const models = require('../app/Models');

sequelize.sync({ force: true }).then(async () => {
	const data = require('./initData');
	for (const val of Object.keys(data)) {
		console.time(val);
		try {
				await models[val].bulkCreate(data[val]);
		} catch (err) {
			console.log('Error in seeding ' + val.model);
			console.log(err.message);
			console.log(err);
			process.exit(1);
		}
		console.timeEnd(val);
	}
	console.timeEnd('Seeding finish in');
});
