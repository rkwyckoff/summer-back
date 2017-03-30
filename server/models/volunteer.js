'use strict';
module.exports = function(sequelize, DataTypes) {
  var Volunteer = sequelize.define('Volunteer', {
    date: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    location: DataTypes.STRING,
    contact: DataTypes.STRING,
    photoUrl: DataTypes.STRING,
    activityUrl: DataTypes.STRING,
    isVolunteer: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Volunteer;
};