var express = require('express');
var router = express.Router();
var constants = require('../../config/constants')();
const sessionFalse = require('../middlewares/session_false');
var helpers = require('../../config/helpers');
const Pacient = require('../models/pacient');
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

router.get('/pacient/list', async (req, res, next) => {
  const bodyPartId = req.query.body_part_id;
  var where = {}
  if(bodyPartId != null){
    where = {
      where: {
        body_part_id: bodyPartId
      }
    }
  }
  Pacient.findAll(where)
    .then(list => {
      if (list) {
        var data = {list: list, pages: 2}
        res.send(JSON.stringify(data)).status(200);
      } else {
        res.send('Lista no encontrada').status(404);
      }
    })
    .catch(err => {
      console.error('Error al seleccionar los registros:', err);
    });
});

module.exports = router;

module.exports = router; 
