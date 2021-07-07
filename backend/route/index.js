const developerRoute = require('./developer.route');
const experienceRoute = require('./experience.route');
const scoreRoute = require('./score.route');
const contributorsRoute = require('./contributors.route')

const setRoutes = (server) => {
  developerRoute(server);
  experienceRoute(server);
  scoreRoute(server);
  contributorsRoute(server);
};

module.exports = { setRoutes };
