const Boom = require('@hapi/boom');
const Joi = require('@hapi/joi');
const { getExperience } = require('../service/experience.service');
const { Experience } = require('../models');
const { id: idValidator } = require('../validators/value.validators');
const { create: createExperienceValidator, update: updateExperienceValidator } = require('../validators/experience.validators');

module.exports = (server) => {
  // Get all experiences
  server.route({
    method: 'GET',
    path: '/api/v1/experience',
    handler: (request, h) => {
      return Experience.findAll();
    }
  });

  // get experience by id
  server.route({
    method: 'GET',
    path: '/api/v1/experience/{experienceId}',
    options: {
      validate: {
        params: Joi.object({
          experienceId: idValidator.required()
        })
      }
    },
    handler: (request, h) => {
      return getExperience(request.params.experienceId);
    }
  });

  // get developers for experience
  server.route({
    method: 'GET',
    path: '/api/v1/experience/{experienceId}/developers',
    options: {
      validate: {
        params: Joi.object({
          experienceId: idValidator.required()
        })
      }
    },
    handler: (request, h) => {
      return getExperience(request.params.experienceId)
        .then(experience => experience.getDevelopers());
    }
  });

  // create experience
  server.route({
    method: 'POST',
    path: '/api/v1/experience',
    options: {
      validate: {
        payload: createExperienceValidator
      }
    },
    handler: (request, h) => {
      return Experience.create(request.payload);
    }
  });

  // update experience
  server.route({
    method: ['PUT', 'PATCH'],
    path: '/api/v1/experience/{experienceId}',
    options: {
      validate: {
        params: Joi.object({
          experienceId: idValidator.required()
        }),
        payload: updateExperienceValidator
      }
    },
    handler: (request, h) => {
      return getExperience(request.params.experienceId)
        .then(experience => experience.update(request.payload));
    }
  });

  // delete experience
  server.route({
    method: 'DELETE',
    path: '/api/v1/experience/{experienceId}',
    options: {
      validate: {
        params: Joi.object({
          experienceId: idValidator.required()
        })
      }
    },
    handler: (request, h) => {
      return getExperience(request.params.experienceId)
        .then(async (experience) => {
          const developers = await experience.getDevelopers();
          if (developers.length !== 0) {
            return Boom.forbidden('That experience already has registered developers and cannot be deleted.');
          } else {
            return experience.destroy();
          }
        })
        .then(() => ({ success: true }));
    }
  });
};
