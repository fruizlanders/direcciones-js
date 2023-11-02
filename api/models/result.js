const Sequelize = require('sequelize');
var db = require('../../config/database');
const Doctor = require('./doctor')
const Pacient = require('./pacient')

const Result =db.define('results', {
	id: { 
    type: Sequelize.INTEGER, 
    primaryKey: true, 
    autoIncrement: true ,
  },
  name: { 
    type: Sequelize.STRING, 
    allowNull: false,  
  },
  description: { 
    type: Sequelize.INTEGER, 
    allowNull: false,  
  },
  image_url: { 
    type: Sequelize.STRING, 
    allowNull: false,  
  },
  created_at: { 
    type: Sequelize.DATE, 
    allowNull: false,  
  },
  updated_at: { 
    type: Sequelize.DATE, 
    allowNull: false,  
  },
  pacient_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Pacient,
      key: 'id', // Nombre de la columna de la clave primaria en el modelo User
    },
  },
  doctor_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Doctor,
      key: 'id', // Nombre de la columna de la clave primaria en el modelo User
    },
  },
});

module.exports = Result;
