'use strict';
module.exports = function(sequelize, DataTypes) {
  var Job = sequelize.define('Job', {
    title: DataTypes.STRING,
    employer: DataTypes.STRING,
    description: DataTypes.STRING,
    location: DataTypes.STRING,
    contactName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Job;
};