var express = require('express');
var router = express.Router();
var db = require('../../config/database');

router.get('/list', async (req, res, next) => {
  try{
    const sqlQuery = `
      SELECT L.name AS ubicacion, P.latitude AS lat, P.longitude lng 
      FROM positions P INNER JOIN locations L ON P.location_id = L.id;
    `;
    const rs = await db.query(sqlQuery, { type: db.QueryTypes.SELECT });
    console.log(rs)
    /*
        const demos = {
          "li1": li1,
          "li2": li2,
          "si1": si1,
          "si2": si2,
          "loca1": loca1,
          "loca2": loca2
        };
    */
    var ubicaciones = [];
    rs.forEach(row => {
      var nombre = row.ubicacion;
      if(ubicaciones.includes(nombre)) {
        // no hacer nada
      }else{
        ubicaciones.push(nombre)
      }
    });
    var ubicacionJSON = {}
    ubicaciones.forEach(ubicacion => {
      var arreglo_posiciones = [];
      ubicacionJSON[ubicacion] = []
      rs.forEach(row => {
        if(row.ubicacion == ubicacion){
          var tmp = { "lat": row.lat, "lng": row.lng }
          ubicacionJSON[ubicacion].push(tmp)
        }
      });
    });
    console.log(ubicacionJSON)
    res.send(JSON.stringify(ubicacionJSON))
  }catch(error){
    console.error(error)
    res.send(error.toString());
  }
});

module.exports = router;
