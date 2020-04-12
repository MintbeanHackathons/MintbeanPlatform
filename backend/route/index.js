const developerRoute = require('./developer.route');
const experienceRoute = require('./experience.route');
const scoreRoute = require('./score.route');

const setRoutes = (server) => {
  developerRoute(server);
  experienceRoute(server);
  scoreRoute(server);
};

module.exports = { setRoutes };
