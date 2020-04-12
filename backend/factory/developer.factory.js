const faker = require('faker');
const factory = require('./factory');

module.exports = factory({
  firstName: () => faker.name.firstName(),
  lastName: () => faker.name.lastName(),
  email: () => faker.internet.email(),
  profiles: () => JSON.stringify([{ profileType: 'github', profileValue: 'johndoe' }]),
  contactMethods: () => JSON.stringify([{ contactType: 'mintbean' }]),
  technologies: () => JSON.stringify(['React', 'Node', 'JavaScript']),
  createdAt: () => new Date(),
  updatedAt: () => new Date()
});
