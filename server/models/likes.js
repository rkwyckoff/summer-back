'use strict';
module.exports = function(sequelize, DataTypes) {
  var Likes = sequelize.define('Likes', {
    user_id: DataTypes.INTEGER,
    activity_id: DataTypes.INTEGER,
    comment_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Likes.belongsTo(models.Activity, {
          foreignKey: 'activity_id',
          as: "Activity"
        })
      }
    }
  });
  return Likes;
};
