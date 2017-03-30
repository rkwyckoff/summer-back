'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    salt: DataTypes.STRING,
    profileUrl: DataTypes.STRING,
    facebookId: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
          User.hasMany(models.Activity, {
            foreignKey: 'user_id'
          });
        }
    }
  })
    return User;
};
