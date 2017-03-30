'use strict';
module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define('Comment', {
    date: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    activity_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Comment.belongsTo(models.User, {foreignKey: 'user_id'} )
        // Photo.belongsTo(models.User, {
        //   foreignKey: 'user_id'

    }
  }
  });
  return Comment;
};
