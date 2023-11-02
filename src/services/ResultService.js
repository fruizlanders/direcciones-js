import axios from 'axios';
import { CSRF } from '../stores/csrf.js';

export const addService = (params) => {
  return new Promise((resolve, reject) => {
    axios.post('/result/add', JSON.stringify(params), {
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (error) {
      if(error.response.status == 404){
        console.error('Miembro a asociar no existe en el servidor')
      }else{
        console.error(error.response.data);
      }
      reject(error.response);
    })
    .then(function () {
      // todo?
    });
  });
}