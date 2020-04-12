const faker = require('faker');
const factory = require('./factory');

module.exports = factory({
  title: () => faker.lorem.sentence(),
  description: () => faker.lorem.paragraph(),
  externalLinks: () => JSON.stringify([{ linkType: 'experienceListing', linkDescription: faker.lorem.words(2), linkValue: faker.internet.url() }]),
  experienceDate: () => new Date(),
  createdAt: () => new Date(),
  updatedAt: () => new Date()
});
