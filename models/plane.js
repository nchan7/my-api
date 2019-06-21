'use strict';
module.exports = (sequelize, DataTypes) => {
  const plane = sequelize.define('plane', {
    name: DataTypes.STRING,
    nickname: DataTypes.STRING,
    manufacturer: DataTypes.STRING,
    cost: DataTypes.INTEGER
  }, {});
  plane.associate = function(models) {
    // associations can be defined here
  };
  return plane;
};