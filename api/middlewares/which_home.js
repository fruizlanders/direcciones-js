var constants = require('../../config/constants')();

module.exports = (req, res, next) => {
  if (constants.session == true){
    if(req.session.state !== undefined){
      if(req.session.type == 'pacient' || req.session.type == 'doctor'){
        return res.redirect(`/${req.session.type}`);
      }
    }
  }
  return next();
};
