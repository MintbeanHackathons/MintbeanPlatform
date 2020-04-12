'use strict';
const models = require('../models');
const { Developer, Experience } = models;
// const Developer = require('../models/developer');
// const Experience = require('../models/experience');
// const

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const developers = await Developer.findAll();
    const experiences = await Experience.findAll();

    const matches = [];
    developers.map((developer) => {
      experiences.map((experience) => {
        if (Math.random() > 0.5) {
          matches.push({ DeveloperId: developer.id, ExperienceId: experience.id, createdAt: new Date(), updatedAt: new Date() });
        }
      });
    });

    return queryInterface.bulkInsert('Attendances', matches);

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
