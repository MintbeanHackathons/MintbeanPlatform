'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Attendances', {
      DeveloperId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      ExperienceId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      aesthetics: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      codeReview: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      codeQuality: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }, {
      indexes: [
        {
          unique: true,
          primaryKey: true,
          fields: ['DeveloperId', 'ExperienceId']
        }
      ]
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Attendances');
  }
};
