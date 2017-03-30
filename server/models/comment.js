'use strict';
module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define('Comment', {
    date: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    location: DataTypes.STRING,
    contact: DataTypes.STRING,
    photoUrl: DataTypes.STRING,
    activityUrl: DataTypes.STRING,
    isVolunteer: DataTypes.BOOLEAN,
    user_id: DataTypes.INTEGER,
    activity_id: DataTypes.INTEGER,
    educational_id: DataTypes.INTEGER,
    volunteer_id: DataTypes.INTEGER,
    camp_id: DataTypes.INTEGER

  }, {
    classMethods: {
      associate: function(models) {
        Comment.belongsTo(models.User, {foreignKey: 'user_id'} )
        
    }
  }
  });
  return Comment;
};
