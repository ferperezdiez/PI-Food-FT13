const {  DataTypes } = require('sequelize');
require('uuid')





module.exports = (sequelize) => {
    sequelize.define('diets', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
           
        },
        name: {
            type: DataTypes.STRING,
            unique: true, 
            primaryKey: true 
          }
    })
};