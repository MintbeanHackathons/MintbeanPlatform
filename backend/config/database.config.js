require('dotenv').config(); // this is important!

const defaults = {
  username: process.env.DB_USERNAME || 'mintbean',
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST || '127.0.0.1',
  dialect: 'postgres',
  operatorsAliases: false
};

module.exports = {
  development: Object.assign({}, defaults, {
    database: 'mintbean_development'
  }),
  test: Object.assign({}, defaults, {
    database: 'mintbean_test'
  }),
  production: Object.assign({}, defaults, {
    database: 'mintbean_production'
  })
};
