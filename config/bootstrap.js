var homeController = require('../api/controllers/home_controller');
var locationController = require('../api/controllers/location_controller');
var errorController = require('../api/controllers/error_controller');

module.exports = (app) => {
  app.use('/', homeController);
  app.use('/location', locationController);
  app.use('/error', errorController);
}
