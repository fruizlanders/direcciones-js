const Sequelize = require('sequelize');
const Level = require('./level');
var db = require('../../config/database');

const Pacient =db.define('pacients', {
	id: { 
    type: Sequelize.INTEGER, 
    primaryKey: true, 
    autoIncrement: true ,
  },
	code: { 
    type: Sequelize.INTEGER, 
    allowNull: false,  
  },
  dni: { 
    type: Sequelize.STRING, 
    allowNull: false,  
  },
  names: { 
    type: Sequelize.INTEGER, 
    allowNull: false,  
  },
  last_names: { 
    type: Sequelize.INTEGER, 
    allowNull: false,  
  },
  email: { 
    type: Sequelize.INTEGER, 
    allowNull: false,  
  },
  phone: { 
    type: Sequelize.INTEGER, 
    allowNull: false,  
  },
  image_url: { 
    type: Sequelize.INTEGER, 
    allowNull: false,  
  },
});

module.exports = Pacient;
