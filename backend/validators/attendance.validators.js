const Joi = require('@hapi/joi');

const update = Joi.object({
  aesthetics: Joi.number().min(0).max(100).allow(null),
  codeQuality: Joi.number().min(0).max(100).allow(null),
  codeReview: Joi.number().min(0).max(100).allow(null)
});

module.exports = {
  update
};
