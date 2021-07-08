const developerRoute = require('./developer.route');
const experienceRoute = require('./experience.route');
const scoreRoute = require('./score.route');

const setRoutes = (server) => {
  developerRoute(server);
  experienceRoute(server);
  scoreRoute(server);
  server.route([
    {
      method: "GET",
      path: "/api/v1/test-auth",
      config: {
        description: "test of a protected endpoint",
        auth: {
          strategies: ["keycloak-jwt"],
          access: {
            scope: [
              "realm:mintbean",
              "developer"
            ],
          },
        },
        handler(req, reply) {
          reply(req.auth.credentials);
        },
      },
    },
  ]);
};

module.exports = { setRoutes };
