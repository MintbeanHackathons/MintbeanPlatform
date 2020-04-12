const Boom = require('@hapi/boom');
const { Experience } = require('../models');
const getExperience = (id, shouldExplode = true) => Experience.findOne({ where: { id } })
  .then((experience) => {
    if (!experience && shouldExplode) {
      throw Boom.notFound('Could not find experience with that ID');
    } else {
      return experience;
    }
  });

module.exports = {
  getExperience
};
