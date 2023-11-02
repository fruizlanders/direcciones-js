var express = require('express');
var router = express.Router();
const Result = require('../models/result');

router.post('/add', (req, res, next) => {
  // data
  var name = req.body.name;
  var description = req.body.description;
  var imageUrl = req.body.image_url;
  var pacientId = req.body.pacient_id;
  var doctorId = req.session.user.doctor_id;
  // logic
  const record = Result.build({
    name: name,
    description: description,
    created_at: new Date(),
    updated_at: new Date(),
    pacient_id: pacientId,
    doctor_id: doctorId,
    image_url: imageUrl,
  });
  record.save()
    .then(result => {
      res.status(200);
      res.send(result.id.toString());
    })
    .catch(err => {
      console.error('Error al insertar el resultado:', err);
      res.status(500);
      res.send('Ocurrió un error al insertar el resultado');
    });  
});

module.exports = router;