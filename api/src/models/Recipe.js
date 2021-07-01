const {  DataTypes } = require('sequelize');
require('uuid')


module.exports = (sequelize) => {
 
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
