var constants = require('../../config/constants')();
// var nodemailer = require('nodemailer');
// var mailTemplate = require( '../../views/mails/congratulaion');
// var _ = require('underscore');

const indexCss = () => {
  var resp = [];
  if(constants.static == 'dev'){
    resp = [
      'build/login',
    ];
  }
  if(constants.static == 'build'){
    resp = [
      'build/login.min'
    ];
  }
  return resp;
}

const indexJs = () => {
  var resp = [];
  if(constants.static == 'dev'){
    resp = [
      'build/login',
    ];
  }
  if(constants.static == 'build'){
    resp = [
      'build/login.min'
    ];
  }
  return resp;
}

const isPacient = (user) => {
  const number = parseInt(user, 10);
  if (!isNaN(number) && Number.isInteger(number)) {
    return true;
  } else {
    return false;
  }
}

exports.indexCss= indexCss;
exports.indexJs= indexJs;
exports.isPacient= isPacient;
