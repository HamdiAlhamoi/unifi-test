// require('configKeys');
const { mongodb, Exception } = require('./helpers');

mongodb
	.init()
	.then(() => {
		const { port } = require('./config');
		const express = require('express');
		const path = require('path');

		const app = express();

		app.get('/welcome-test', (req, res) => res.status(200).json({ msg: 'welcome' }));

		app.use('/assets', express.static(path.join('assets')));

		app.use(express.urlencoded({ extended: false }));
		app.use(express.json({ limit: '50mb' }));
		app.use(express.text({ limit: '50mb' }));


		// app.use(require('./app/auth/passport').initialize());

		app.use('/api', require('./routers'));


		app.use(Exception.requestDefaultHandler);
		app.listen(Number(process.env.PORT) || 4433, () => {
			console.info(`Server is listening on port ${port}`);
		});
	})
	.catch(Exception.defaultHandler);
