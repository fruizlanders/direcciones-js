var express = require('express');
const { Op } = require("sequelize");
var db = require('../../config/database');
var router = express.Router();
var constants = require('../../config/constants')();
var helpers = require('../../config/helpers');
const User = require('../models/user');
const Pacient = require('../models/pacient');
const Doctor = require('../models/doctor');
const sessionFalse = require('../middlewares/session_false');
const { indexCss, indexJs, isPacient } = require('../helpers/login_helper');

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
  var userDB = null;
  var redirectUrl = '/login';
  // logic
  try{
    if(isPacient(user)){
      const sqlQuery = `
          SELECT U.id AS user_id, U.user, P.id AS pacient_id, P.names, P.last_names
          FROM users U
          INNER JOIN pacients P ON U.id = P.user_id
          WHERE U.user = "${user}" AND U.password = "${password}";
        `;
      const rs = await db.query(sqlQuery, { type: db.QueryTypes.SELECT });
      if (rs.length == 1){
        req.session.user = rs[0];
        req.session.state = 'activate';
        req.session.type = 'pacient';
        req.session.time = new Date().toLocaleTimeString();
        redirectUrl = '/paciente';
      }else{
        message ='?error=user-pass-mismatch'
      }
    }else{
      const sqlQuery = `
          SELECT U.id AS user_id, U.user, D.id AS doctor_id, D.names, D.last_names
          FROM Users U
          INNER JOIN doctors D ON U.id = D.user_id
          WHERE U.user = "${user.toUpperCase()}" AND U.password = "${password}";
        `;
      const rs = await db.query(sqlQuery, { type: db.QueryTypes.SELECT });
      if (rs.length == 1){
        req.session.user = rs[0];
        req.session.type = 'doctor';
        req.session.state = 'activate';
        req.session.time = new Date().toLocaleTimeString();
        redirectUrl = '/doctor';
      }else{
        message ='?error=user-pass-mismatch'
      }
    }
  }catch(error){
    status = 500;
    message = '?error=user-pass-error';
  }
  // response
  res.redirect(redirectUrl + message);
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
