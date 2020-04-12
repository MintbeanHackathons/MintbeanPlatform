const Joi = require('@hapi/joi');

const { email } = require('./value.validators');

const profile = Joi.object({
  profileType: Joi.string().required(),
  profileValue: Joi.string().required()
});

const contactMethod = Joi.object({
  contactType: Joi.string().required(),
  contactValue: Joi.string().required()
});

const developer = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email,
  profiles: Joi.array().required().items(profile).min(0),
  contactMethods: Joi.array().required().items(contactMethod).min(0),
  technologies: Joi.array().required().items(Joi.string())
});

module.exports = developer;
