var constants = require('../../config/constants')();

const accessCss = () => {
  var resp = [];
  if(constants.static == 'dev'){
    resp = [
      'build/error',
    ];
  }
  if(constants.static == 'build'){
    resp = [
      'build/error.min',
    ];
  }
  return resp;
}

const accessJs = () => {
  return [];
}

exports.accessCss= accessCss;
exports.accessJs= accessJs;
