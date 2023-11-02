const fs = require('fs');
const path = require('path');
const unirest = require('unirest');
var express = require('express');
var router = express.Router();
var helpers = require('../../config/helpers');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('Pacient');
});

router.get('/generate-image', async (req, res, next) => {
  const exp = req.query.exp;
  try {
    var url = 'http://192.168.1.27:8080/image?exp=' + exp;
    const response = await unirest.get(url);
    if (response.status === 200) {
      var imageData = response.body;
      var randName = helpers.randomSN(20);
      var savePath = '../../public/pypde-images/' + randName + '.png'
      try {
        console.log(path.resolve(__dirname, savePath))
        await fs.writeFile(path.resolve(__dirname, savePath), imageData, (err) => {
          if (err) {
            console.error(err);
            res.send('Error al guardar la imagen en el disco').status(500);
          } else {
            res.send('pypde-images/' + randName + '.png').status(200);
          }
        });
      } catch (err) {
        console.error(err);
        res.send('Error en la generar la imagen').status(500);
      }
    } else {
      console.error('Error en la solicitud GET:', response.status, response.body);
      res.send('Error en la respuesta de la solicitud').status(500);
    }
  } catch (error) {
    console.log(error);
    res.send('Ocurrión un eror en Unirest').status(500);
  }
});

module.exports = router; 