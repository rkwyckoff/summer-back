'use strict';
module.exports = function(sequelize, DataTypes) {
  var Educational = sequelize.define('Educational', {
    date: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    location: DataTypes.STRING,
    contact: DataTypes.STRING,
    photoUrl: DataTypes.STRING,
    activityUrl: DataTypes.STRING,
    admissionFee: DataTypes.STRING,
    isEducational: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Educational;
};