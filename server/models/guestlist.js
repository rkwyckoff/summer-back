'use strict';
module.exports = function(sequelize, DataTypes) {
  var Guestlist = sequelize.define('Guestlist', {
    user_id: DataTypes.INTEGER,
    activity_id: DataTypes.INTEGER,
    attending: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Guestlist;
};