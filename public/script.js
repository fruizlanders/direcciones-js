let job = [], matrix = [];
const svgMarker = {
  path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
  fillColor: "blue",
  fillOpacity: 1,
  strokeWeight: 0,
  scale: 1.5,
};
const li1 = [
  { "lat": -12.086065, "lng": -77.032111 },
  { "lat": -12.080595, "lng": -77.034447 },
  { "lat": -12.083731, "lng": -77.030797 },
  { "lat": -12.08644, "lng": -77.028653 },
  { "lat": -12.083619, "lng": -77.042599 },
  { "lat": -12.082773, "lng": -77.0426 },
  { "lat": -12.085063, "lng": -77.039504 },
  { "lat": -12.084859, "lng": -77.048178 },
  { "lat": -12.081674, "lng": -77.031101 }
],
  li2 = [{ "lat": -12.086065, "lng": -77.032111 },
  { "lat": -12.080595, "lng": -77.034447 },
  { "lat": -12.083731, "lng": -77.030797 },
  { "lat": -12.08644, "lng": -77.028653 },
  { "lat": -12.083619, "lng": -77.042599 },
  { "lat": -12.082773, "lng": -77.0426 },
  { "lat": -12.085063, "lng": -77.039504 },
  { "lat": -12.084859, "lng": -77.048178 },
  { "lat": -12.081674, "lng": -77.031101 }],
  si1 = [
    { "lat": -12.086065, "lng": -77.032111 },
    { "lat": -12.093772, "lng": -77.03911 },
    { "lat": -12.092385, "lng": -77.040148 },
    { "lat": -12.102069, "lng": -77.038724 },
    { "lat": -12.085536, "lng": -77.031314 },
    { "lat": -12.087535, "lng": -77.056854 },
    { "lat": -12.094481, "lng": -77.055289 },
    { "lat": -12.097951, "lng": -77.034347 },
    { "lat": -12.102152, "lng": -77.038647 }
  ],
  si2 = [
    { "lat": -12.086065, "lng": -77.032111 },
    { "lat": -12.091761, "lng": -77.025267 },
    { "lat": -12.097851, "lng": -77.039963 },
    { "lat": -12.096839, "lng": -77.040075 },
    { "lat": -12.090398, "lng": -77.043093 },
    { "lat": -12.088445, "lng": -77.024344 },
    { "lat": -12.096355, "lng": -77.051021 }
  ],
  loca1 = [
    { "lat": -12.087983, "lng": -77.085284 },
    { "lat": -12.06293, "lng": -77.087668 },
    { "lat": -12.050816, "lng": -77.056429 },
    { "lat": -12.05459, "lng": -76.997483 },
    { "lat": -12.02836, "lng": -77.019586 },
    { "lat": -12.034973, "lng": -77.025645 },
    { "lat": -12.041553, "lng": -76.979972 },
    { "lat": -12.064084, "lng": -77.038394 }
  ],
  loca2 = [
    { "lat": -12.087983, "lng": -77.085284 },
    { "lat": -12.086283, "lng": -77.056217 },
    { "lat": -12.042477, "lng": -77.00462 },
    { "lat": -12.039731, "lng": -77.097345 },
    { "lat": -12.181762, "lng": -76.956584 },
    { "lat": -12.004151, "lng": -77.078752 },
    { "lat": -12.156863, "lng": -77.00875 }
  ];
  /*const demos = {
  "li1": li1,
  "li2": li2,
  "si1": si1,
  "si2": si2,
  "loca1": loca1,
  "loca2": loca2
};*/

var demos = {};
let
  myDiv1 = document.getElementById('myDiv1'),
  myDiv2 = document.getElementById('myDiv2'),
  myDiv3 = document.getElementById('myDiv3');
let lugares = [];
function cargarLugares() {
  var comboBox = document.getElementById("lugares");
  lugares = demos[comboBox.value];
  console.log(lugares)
  markers.forEach(marker => marker.setMap(null));
  markers.length = 0;
  // Crear el array job
  for (var i = 0; i < lugares.length; i++) {
    for (var j = 0; j < lugares.length; j++) {
      job.push([lugares[i], lugares[j], i, j]);
    }
  }
  //googleLoop()
  lugares.forEach(location => {
    const marker = new google.maps.Marker({
      position: location,
      map: map,
      icon: svgMarker
    });
    markers.push(marker);
  });

}
let jobData = [], valuesArray = [], myarr = [];
var myarr2 = [], l = 0, m1 = []

function googleLoop() {
  intervalID = window.setInterval(calcPeso, 500);
}
let pesoP = 0, pesoK = 0, optimoP = [], optimoK = [];
function calcPeso() {
  if (job.length > 0) {
    jobData = job.pop();
    myarr.push(jobData[2]);
    myarr.push(jobData[3]);
    var request = {
      origin: jobData[0],
      destination: jobData[1],
      travelMode: 'DRIVING'
    };
    directionsRenderer.setMap(map);
    directionsService.route(request, function(result, status) {
      if (status == 'OK') {
        directionsRenderer.setDirections(result);
        myarr.push(result.routes[0].legs[0])
        myarr2.push(myarr);
        myarr = [];
      }
    });

  }
  jobData = [];
  if (myarr2.length == lugares.length * lugares.length/*-lugares.length*/) {
    clearInterval(intervalID);
    transformM(myarr2)
  }
}

let rowData1 = [], dato = [], caminos = [], tempkru = [], tempcam = [], tempcam1 = [], tempcam2 = [], resultsP = [], resultsK = [], rutaOptima = [];
function transformM(m) {
  for (var i = 0; i < lugares.length; i++) {
    for (var j = 0; j < lugares.length; j++) {
      dato = m.pop();
      if (i == j) {
        rowData1.push(999999)
      } else {
        rowData1.push(dato[2].duration.value)
      }
    }
    m1.push(rowData1)
    rowData1 = [];
  }
  //var results=[ordenOptimo,pesoTotal]
  resultsP = algoritmoPrim(m1)
  resultsK = algoritmoKruskal(m1)
  document.getElementById("myDiv1").innerHTML = "Ruta Optima es:";
  if (resultsP[1] >= resultsK[1]) {
    rutaOptima = resultsP[0]
    document.getElementById("myDiv2").innerHTML = resultsP[1] + " de peso Prim. Orden optimo:";
    document.getElementById("myDiv3").innerHTML = resultsP[0];
  } else {
    rutaOptima = resultsK[0]
    document.getElementById("myDiv2").innerHTML = resultsK[1] + " de peso Kruskal. Orden optimo:";
    document.getElementById("myDiv3").innerHTML = resultsK[0];
  }

}

function algoritmoPrim(m) {
  var a = 0, ordenOptimo = [];
  var n = m.length;
  //-console.log(n)
  var visited = [1];
  for (var i = 1; i < n; i++) {
    visited.push(0)
  }
  var min = -1;
  var u = 0;
  var v = 0;
  var pesoTotal = 0;
  while (a < n - 1) {
    min = 9999999;
    for (var i = 0; i < n; i++) {
      if (visited[i] == 1) {
        for (var j = 1; j < n; j++) {
          if (visited[j] == 0) {
            if (min > m[i][j]) {
              min = m[i][j];
              u = i;
              v = j;
            }
          }
        }
      }
    }

    visited[v] = 1;
    visited[u] = 2;
    pesoTotal = pesoTotal + min;
    //console.log("vert: "+u+"->"+v+":"+min);
    ordenOptimo.push(u)
    if (ordenOptimo.length == n - 1) {
      ordenOptimo.push(v)
    }

    a++;
  }
  visited = [];
  var results = [ordenOptimo, pesoTotal]
  return results;

}
let krusarr1 = [];
function algoritmoKruskal(mK) {
  var krusarr = [], resultadoK = [];
  arrtotal = [];
  a = 0;
  var n = mK.length;
  var visited = [1];
  for (var i = 1; i < n; i++) {

    visited.push(0)
  }
  var min = -1;
  var u = 0;
  var v = 0;
  var total = 0;
  while (a < n - 1) {
    min = 9999999;
    for (var i = 0; i < n; i++) {
      if (visited[i] == 1) {
        for (var j = 1; j < n; j++) {
          if (visited[j] == 0) {
            if (min > mK[i][j]) {
              min = mK[i][j];
              u = i;
              v = j;
            }
          }
        }
      }
    }

    visited[v] = 1;
    visited[u] = 1;
    total = total + min;
    arrtotal.push(min)
    //console.log("vert: "+u+"->"+v+":"+min);
    krusarr = [];
    krusarr.push(u);
    krusarr.push(v);
    krusarr1.push(krusarr);
    a++;

  }

  resultadoK.push(modificacion(krusarr1))
  resultadoK.push(total)
  return resultadoK
}
function modificacion(k) {
  //ingresar a caminos el primer par de destinos
  caminos.push(k[0])
  //recorrer krusarr1 desde la segunda posicion
  for (var i = 1; i < k.length; i++) {
    //guardamos el par i en un arreglo temporal
    tempkru = k[i];
    //si el primer valor del par i es 0
    if (tempkru[0] == 0) {
      //todo el par se registra en caminos
      caminos.push(tempkru)
      //si no es 0
    } else {
      //se recorre caminos de nuevo
      for (var j = 0; j < caminos.length; j++) {
        //se guarda el grupo de destinos que
        // se encuentre en la posicion j
        //en una variable temporal
        tempcam = caminos[j];
        for (var n = 1; n < tempcam.length; n++) {
          if (tempcam[n] == tempkru[0]) {
            tempcam.push(tempkru[1])
            caminos[j] = tempcam;
          }
        }
      }
    }
  }
  return caminos
}


window.onload = function() {
  initMap();
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'location/list', true);
  xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
          var jsonResponse = JSON.parse(xhr.responseText);
          console.log(jsonResponse);
          demos = jsonResponse;

      }
  };
  xhr.send();
};