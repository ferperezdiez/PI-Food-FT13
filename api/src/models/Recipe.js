const {  DataTypes } = require('sequelize');
require('uuid')


// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
  },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resume: {
      type: DataTypes.TEXT,
      allowNull: false,
    }, 
    spoonacularScore: {
      type: DataTypes.INTEGER    
    },
    healthScore: {
      type: DataTypes.INTEGER
    },
    analyzedInstructions: {
      type: DataTypes.TEXT
    }
  });
};
