const Joi = require('@hapi/joi');
const { date } = require('./value.validators');

const externalLink = Joi.object({
  linkType: Joi.string().valid('experienceListing', 'other').required(),
  linkValue: Joi.string().uri().min(1).required(),
  linkDescription: Joi.string().min(1)
});

const title = Joi.string().min(0).max(255);
const description = Joi.string().min(0);
const experienceDate = date;
const externalLinks = Joi.array().items(externalLink).min(0);

const update = Joi.object({
  title, description, experienceDate, externalLinks
});

const create = Joi.object({
  title: title.required(),
  description: description.required(),
  experienceDate: experienceDate.required(),
  externalLinks: externalLinks.required()
});

module.exports = {
  create,
  update
};
