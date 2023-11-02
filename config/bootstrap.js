var homeController = require('../api/controllers/home_controller');
var userController = require('../api/controllers/user_controller');
var loginController = require('../api/controllers/login_controller');
var pacientController = require('../api/controllers/pacient_controller');
var doctorController = require('../api/controllers/doctor_controller');
var adminController = require('../api/controllers/admin_controller');
var resultController = require('../api/controllers/result_controller');
var errorController = require('../api/controllers/error_controller');

module.exports = (app) => {
  app.use('/', homeController);
  app.use('/user', userController);
  app.use('/error', errorController);
  app.use('/admin', adminController);
  app.use('/pacient', pacientController);
  app.use('/doctor', doctorController);
  app.use('/result', resultController);
  app.use('/login', loginController);
}
