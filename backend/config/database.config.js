require('dotenv').config(); // this is important!

const defaults = {
  username: 'mintbean',
  password: process.env.DB_PASSWORD,
  host: '127.0.0.1',
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
