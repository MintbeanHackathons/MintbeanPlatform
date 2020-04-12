'use strict';
const experienceFactory = require('../factory/experience.factory');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const experiences = experienceFactory(10);
    return queryInterface.bulkInsert('Experiences', experiences);
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
