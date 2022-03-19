const fs = require('fs');

const dataFolder = 'src/seeders/data/';

const dirs = fs.readdirSync(dataFolder);

const data = {};

dirs.forEach((val) => {
	let temp = require('./data/' + val);
	data[temp.model] = temp.documents;
});

module.exports = data;
