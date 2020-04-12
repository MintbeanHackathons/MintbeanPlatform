const Joi = require('@hapi/joi');

module.exports = {
  email: Joi.string().required().email({
    tlds: {
      allow: false // allow any TLD, for example .com or .net
    }
  }),
  percentage: Joi.number().min(0).max(100),
  id: Joi.number().min(1),
  date: Joi.date().timestamp('unix')
};
