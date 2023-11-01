var express = require('express');
const { stringify } = require('query-string');
var router = express.Router();
const User = require('../models/user');
const { Op } = require('sequelize');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.post('/validate', (req, res, next) => {
  var user = req.body.user;
  var password = req.body.password;
  var response = {
    success: false,
    message: '',
    data: ''
  }
  var status = 404;
  User.findOne({
    where: { 
      user: user,
      password: password
    }
  }).then(user => {
    if (user) {
      response.success = true;
      response.message = 'Usuario encontrado';
      response.data = JSON.stringify({
        user_id: user.id, 
        member_id: user.member_id
      });
      status = 200;
    } else {
      response.message = 'Usuario no encontrado';
    }
    res.send(JSON.stringify(response)).status(status);
  }).catch(err => {
    console.error('Error al realizar la consulta:', err);
    response.message = 'Error en encontrar al usuario';
    response.data = err;
    res.send(JSON.stringify(response)).status(501);
  });
});

router.post('/reset_password', (req, res, next) => {
  var dni = req.body.dni;
  var email = req.body.email;
  var response = {
    success: false,
    message: '',
    data: ''
  }
  var status = 404;
  User.findOne({
    where: { 
      dni: dni,
      email: email
    }
  }).then(user => {
    if (user) {
      response.success = true;
      response.message = 'Se ha enviando un correo para cambiar de contraseña';
      response.data = 'Miembro encontrado';
      status = 200;
    } else {
      response.message = 'Miembro no encontrado';
    }
    res.send(JSON.stringify(response)).status(status);
  }).catch(err => {
    console.error('Error al realizar la consulta:', err);
    response.message = 'Error en encontrar al miembro';
    response.data = err;
    res.send(JSON.stringify(response)).status(501);
  });
});

router.post('/create', (req, res, next) => {
  var dni = req.body.dni;
  var email = req.body.email;
  var response = {
    success: false,
    message: '',
    data: ''
  }
  var status = 404;
  User.findOne({
    where: { 
      [Op.or]: [
        {dni: dni},
        {email: email}
      ]
    }
  }).then(user => {
    if (user) {
      response.message = 'Correo y/o DNI en uso';
    } else {
      response.success = true;
      response.message = 'Se ha enviando un correo para activar su cuenta';
      response.data = 'Usuario creado';
      status = 200;
    }
    res.send(JSON.stringify(response)).status(status);
  }).catch(err => {
    console.error('Error al realizar la consulta:', err);
    response.message = 'Error en encontrar al miembro';
    response.data = err;
    res.send(JSON.stringify(response)).status(501);
  });
});

router.get('/sign-out', (req, res, next) => {
  req.session = null;
  res.redirect('/login');
});

router.get('/session', (req, res, next) => {
  if (req.session.state === undefined || req.session.state === null ){
    res.send('No hay una sesión activa...<br> Ir al <a href="/">Inicio</a>').status(500);
  }else{
    res.send(JSON.stringify(req.session)).status(200);
  }
});

router.get('/menu', (req, res, next) => {
  var userType = req.session.type;
  var menu = {
    'pacient': [
      {name: 'Home Paciente', url: '/admin', active: true, items: []}, 
      {name: 'Recursos', url: '#', active: true, items: [
        {name: 'Trabajadores', url: '/worker', active: true}, 
        {name: 'Puestos de Trabajo', url: '/position', active: true}, 
        {name: 'Tipos de Servicios', url: '/service_type', active: true}, 
        {name: 'Sedes - Lima', url: '/branch/lima', active: false}, 
        {name: 'Sedes - Provincias', url: '/branch/province', active: false}, 
      ]}, 
      {name: 'Servicios', url: '/service', active: true, items: []}, 
      {name: 'Incidencias', url: '/admin/service', active: true, items: []}, 
      {name: 'S. Técnicos', url: '/admin/project', active: true, items: []}, 
    ],
    'doctor': [
      {name: 'Home Doctor', url: '/admin', active: true, items: []}, 
      {name: 'Recursos', url: '#', active: true, items: [
        {name: 'Trabajadores', url: '/worker', active: true}, 
        {name: 'Puestos de Trabajo', url: '/position', active: true}, 
        {name: 'Tipos de Servicios', url: '/service_type', active: true}, 
        {name: 'Sedes - Lima', url: '/branch/lima', active: false}, 
        {name: 'Sedes - Provincias', url: '/branch/province', active: false}, 
      ]}, 
      {name: 'Servicios', url: '/service', active: true, items: []}, 
      {name: 'Incidencias', url: '/admin/service', active: true, items: []}, 
      {name: 'S. Técnicos', url: '/admin/project', active: true, items: []}, 
    ] 
  };
  res.send(JSON.stringify(menu[userType]))
});

module.exports = router;
