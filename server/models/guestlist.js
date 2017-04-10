'use strict';
module.exports = function(sequelize, DataTypes) {
  var Guestlist = sequelize.define('Guestlist', {
    user_id: DataTypes.INTEGER,
    activity_id: DataTypes.INTEGER,
    attending: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
          Guestlist.belongsTo(models.Activity, {
            foreignKey: 'activity_id'
          });
          Guestlist.belongsTo(models.User, {
            foreignKey: 'user_id'
          });
        }
    }
  });
  return Guestlist;
};
