const Boom = require('@hapi/boom');
const Joi = require('@hapi/joi');
const { getExperience } = require('../service/experience.service');
const { Developer, Attendance } = require('../models');
const developerValidator = require('../validators/developer.validator');
const { update: validateAttendanceUpdate } = require('../validators/attendance.validators');
const { email: emailValidator, id: idValidator } = require('../validators/value.validators');

const getUser = (email, shouldExplode = true) => Developer.findOne({ where: { email } })
  .then((developer) => {
    if (!developer && shouldExplode) {
      throw Boom.notFound('Could not find developer with that email.');
    } else {
      return developer;
    }
  });

const getAttendance = (DeveloperId, ExperienceId, shouldExplode = true) => Attendance.findOne({ where: { DeveloperId, ExperienceId } })
  .then((attendance) => {
    if (!attendance && shouldExplode) {
      throw Boom.notFound('Could not find Attendance with that DeveloperId and ExperienceId');
    } else {
      return attendance;
    }
  });

// Get all developers
module.exports = (server) => {
  server.route({
    method: 'GET',
    path: '/api/v1/developer',
    handler: (request, h) => {
      return Developer.findAll();
    }
  });

  server.route({
    method: 'POST',
    path: '/api/v1/developer',
    options: {
      validate: {
        payload: developerValidator
      }
    },
    handler: (request, h) => {
      return getUser(request.payload.email, false)
        .then((developer) => {
          if (!developer) {
            return Developer.create(request.payload);
          } else {
            throw Boom.badRequest('Developer with that email already exists.');
          }
        });
    }
  });

  server.route({
    method: 'GET',
    path: '/api/v1/developer/{email}',
    options: {
      validate: {
        params: Joi.object({
          email: emailValidator.required()
        })
      }
    },
    handler: (request, h) => {
      return getUser(request.params.email);
    }
  });

  server.route({
    method: 'GET',
    path: '/api/v1/developer/{email}/experiences',
    options: {
      validate: {
        params: Joi.object({
          email: emailValidator.required()
        })
      }
    },
    handler: (request, h) => {
      return getUser(request.params.email).then(developer => developer.getExperiences());
    }
  });

  // Create association
  server.route({
    method: 'POST',
    path: '/api/v1/developer/{email}/experiences/{experienceId}',
    options: {
      validate: {
        params: Joi.object({
          email: emailValidator.required(),
          experienceId: idValidator.required()
        })
      }
    },
    handler: async (request, h) => {
      const { email, experienceId } = request.params;

      try {
        const developer = await getUser(email);
        const experience = await getExperience(experienceId);
        const attendance = await Attendance.findOne({
          where: {
            DeveloperId: developer.id,
            ExperienceId: experience.id
          }
        });
        if (!attendance) {
          return Attendance.create({
            DeveloperId: developer.id,
            ExperienceId: experience.id
          });
        }
        return attendance;
      } catch (e) {
        return e;
      }
    }
  });

  // Remove association
  server.route({
    method: 'DELETE',
    path: '/api/v1/developer/{email}/experiences/{experienceId}',
    options: {
      validate: {
        params: Joi.object({
          email: emailValidator.required(),
          experienceId: idValidator.required()
        })
      }
    },
    handler: async (request, h) => {
      const { email, experienceId } = request.params;
      try {
        const developer = await getUser(email);
        const attendance = await Attendance.findOne({
          where: {
            DeveloperId: developer.id,
            ExperienceId: experienceId
          }
        });

        if (!attendance) {
          throw Boom.notFound('This developer is not associated with that experience.');
        } else {
          await Attendance.destroy({
            where: {
              DeveloperId: developer.id,
              ExperienceId: experienceId
            }
          });

          return { success: true };
        }
      } catch (e) {
        return e;
      }
    }
  });

  // Edit association
  server.route({
    method: ['PUT', 'PATCH'],
    path: '/api/v1/developer/{email}/experiences/{experienceId}',
    options: {
      validate: {
        payload: validateAttendanceUpdate,
        params: Joi.object({
          email: emailValidator.required(),
          experienceId: idValidator.required()
        })
      }
    },
    handler: (request, h) => {
      return getUser(request.params.email)
        .then(developer => getAttendance(developer.id, request.params.experienceId))
        .then(attendance => attendance.update(request.payload));
    }
  });
};
