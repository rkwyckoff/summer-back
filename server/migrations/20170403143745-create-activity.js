'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Activities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      category: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      employer: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      location: {
        type: Sequelize.STRING
      },
      contact: {
        type: Sequelize.STRING
      },
      photoUrl: {
        type: Sequelize.STRING
      },
      activityUrl: {
        type: Sequelize.STRING
      },
      admissionFee: {
        type: Sequelize.STRING
      },
      isActivity: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      commentnumber: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      likesnumber: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Activities');
  }
};
