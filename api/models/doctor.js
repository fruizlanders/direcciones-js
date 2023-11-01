const Sequelize = require('sequelize');
var db = require('../../config/database');
const User = require('./user')

const Doctor = db.define('doctors', {
	id: { 
    type: Sequelize.INTEGER, 
    primaryKey: true, 
    autoIncrement: true ,
  },
	cmp: { 
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
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id', // Nombre de la columna de la clave primaria en el modelo User
    },
  },
});


module.exports = Doctor;
