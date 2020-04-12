'use strict';
const developerFactory = require('../factory/developer.factory');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const developers = developerFactory(10);
    return queryInterface.bulkInsert('Developers', developers);
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
