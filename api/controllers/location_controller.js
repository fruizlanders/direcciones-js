var express = require('express');
var router = express.Router();
//const Location = require('../models/location');

router.get('/list', async (req, res, next) => {
  res.send('lista de locaciones').status(404);
  /*
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
    */
});

module.exports = router;
