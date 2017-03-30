'use strict';
module.exports = function(sequelize, DataTypes) {
  var Camp = sequelize.define('Camp', {
    date: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    location: DataTypes.STRING,
    contact: DataTypes.STRING,
    photoUrl: DataTypes.STRING,
    activityUrl: DataTypes.STRING,
    admissionFee: DataTypes.STRING,
    isCamp: DataTypes.BOOLEAN,
    user_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Camp.hasMany(models.Comment,{foreignKey: 'camp_id'} )
        Camp.belongsTo(models.User, {
          foreignKey: 'user_id'
        })
        // associations can be defined here
      }
    }
  });
  return Camp;
};
