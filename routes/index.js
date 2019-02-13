var eleRouter = require('./ele');

module.exports = app => {
	app.use('/ele', eleRouter);
}
