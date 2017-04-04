'use strict';
module.exports = function(sequelize, DataTypes) {
  var Activity = sequelize.define('Activity', {
    category: DataTypes.STRING,
    email: DataTypes.STRING,
    employer: DataTypes.STRING,
    date: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    location: DataTypes.STRING,
    contact: DataTypes.STRING,
    photoUrl: DataTypes.STRING,
    activityUrl: DataTypes.STRING,
    admissionFee: DataTypes.STRING,
    isActivity: DataTypes.BOOLEAN,
    user_id: DataTypes.INTEGER,
    commentnumber: DataTypes.INTEGER,
    likesnumber: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Activity.hasMany(models.Comment,{foreignKey: 'activity_id'} )
        Activity.belongsTo(models.User, {
          foreignKey: 'user_id'
        })
        Activity.belongsTo(models.Guestlist,{foreignKey: 'user_id'})
        // associations can be defined here
      }
    }
  });
  return Activity;
};
