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
    isVolunteer: DataTypes.BOOLEAN,
    user_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Volunteer.hasMany(models.Comment,{foreignKey: 'volunteer_id'} )
        Volunteer.belongsTo(models.User, {
          foreignKey: 'user_id'
        })
        // associations can be defined here
      }
    }
  });
  return Volunteer;
};
