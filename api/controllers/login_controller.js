var express = require('express');
const { Op } = require("sequelize");
var router = express.Router();
var constants = require('../../config/constants')();
var helpers = require('../../config/helpers');
const User = require('../models/user');
const Pacient = require('../models/pacient');
const sessionFalse = require('../middlewares/session_false');
const { indexCss, indexJs } = require('../helpers/login_helper');

// path = /login

const routes = ['/', '/sign_in', '/reset_password'];

routes.forEach((route) => {
  router.get(route, sessionFalse, (req, res, next) => {
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
    };
    res.render('login/index', locals);
  });
});

router.post('/', async (req, res, next) => {
  // data
  var user = req.body.user;
  var password = req.body.password;
  var status = 200;
  var message = '';
  // logic
  try{

    var user = await User.findOne({
      attributes: ['id', 'user', 'pacient_id'],
      include: [
        {
          model: Pacient,
          attributes: ['names', 'last_names'],
        },
      ],
      where: {
        [Op.and]: [
          { user: user },
          { password: password },
        ]
      }
    });
    if(user != null){
      req.session.time = new Date().toLocaleTimeString();
      req.session.user = user;
      req.session.state = 'activate';
      return res.redirect('/');
    }else{
      message ='?error=user-pass-mismatch'
      status = 500;
    }
  }catch(error){
    status = 500;
    message = '?error=user-pass-error';
    console.error(error);
  }
  // response
  res.redirect('/login' + message);
});


router.post('/sign-in', async (req, res, next) => {
  // data
  var user = req.body.user;
  var email = req.body.email;
  var password = req.body.password;
  var password2 = req.body.password2;
  var status = 200;
  var message = '';
  var messageColor = 'text-success';
  // logic
  if(password == password2){
    try{
      var exist = await User.count({
        where: {
          [Op.or]: [
            { user: user },
            { email: email },
          ]
        }
      });
      if(exist >= 1){
        status = 500;
        messageColor = 'text-danger';
        message = 'Usuario y/o correo ya registrados';
      }else{
        // create user
        var newStudent = await User.create({
          user: user,
          password: password,
          email: email,
          activationKey: helpers.randomSN(40),
          resetKey: helpers.randomSN(40),
        });  
        // send activation mail
        
      }
    }catch(error){
      status = 500;
      message = 'Ocurrió un error en validad su usuario';
      console.log(error);
    }
  }else{
    status = 500;
    message = 'Contraseñas no coinciden';
    messageColor = 'text-danger';
  }
  // response
  var locals = {
    constants: constants,
    title: 'Bienvenido',
    helpers: helpers,
    csss: indexCss(),
    jss: indexJs(),
    message: message,
    messageColor: messageColor,
    contents: {},
  };
  res.status(status).render('login/index', locals);
});

module.exports = router; 
