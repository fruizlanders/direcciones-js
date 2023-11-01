var constants = require('../../config/constants')();
// var nodemailer = require('nodemailer');
// var mailTemplate = require( '../../views/mails/congratulaion');
// var _ = require('underscore');

const indexCss = () => {
  var resp = [];
  if(constants.static == 'dev'){
    resp = [
      'build/doctor',
    ];
  }
  if(constants.static == 'build'){
    resp = [
      'build/doctor.min'
    ];
  }
  return resp;
}

const indexJs = () => {
  var resp = [];
  if(constants.static == 'dev'){
    resp = [
      'build/doctor',
    ];
  }
  if(constants.static == 'build'){
    resp = [
      'build/doctor.min'
    ];
  }
  return resp;
}

exports.indexCss= indexCss;
exports.indexJs= indexJs;
