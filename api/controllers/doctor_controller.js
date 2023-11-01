var express = require('express');
var router = express.Router();
var constants = require('../../config/constants')();
const sessionFalse = require('../middlewares/session_false');
var helpers = require('../../config/helpers');
const { indexCss, indexJs } = require('../helpers/doctor_helper');

/* GET users listing. */

const routes = ['/', ];

routes.forEach((route) => {
  router.get(route, (req, res, next) => {
    // response
    var locals = {
      constants: constants,
      title: 'Bienvenido',
      helpers: helpers,
      csss: indexCss(),
      jss: indexJs(),
      message: '',
      messageColor: '',
      contents: {},
      'session': req.session,
    };
    res.render('admin/index', locals);
  });
});

module.exports = router; 
