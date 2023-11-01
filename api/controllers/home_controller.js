var express = require('express');
var router = express.Router();
var constants = require('../../config/constants')();
var helpers = require('../../config/helpers');
var goLogin = require('../middlewares/go_login');
var whichHome = require('../middlewares/which_home');
const { indexCss, indexJs } = require('../helpers/home_helper');

router.get('', goLogin, whichHome, (req, res, next) => {
  // response
  var locals = {
    constants: constants,
    title: 'Bienvenido',
    helpers: helpers,
    csss: indexCss(),
    session: req.session,
    jss: indexJs(),
    contents: {},
  };
  res.status(200).render('home/demo', locals);
});


//router.get('/sign-out', middlewares.sessionTrue(), function(req, res, next) {
router.get('/sign-out', (req, res, next) => {
  req.session = null;
  res.redirect('/');
});

router.get('/about', (req, res, next) => {
  var group = [
    {codigo: 20051191, nombre: 'Pepe Valdivia'},
    {codigo: 20071191, nombre: 'Yacky Ramirez'},
    {codigo: 20161191, nombre: 'Sila Esculapia'},
    {codigo: 20231191, nombre: 'Chicle Pinkerton'},
  ];
  res.status(200).send(JSON.stringify(group));
});


router.get('/demo/', (req, res, next) => {
  console.log('XD')
  req.session = null;
  res.redirect('/');
});

module.exports = router; 
