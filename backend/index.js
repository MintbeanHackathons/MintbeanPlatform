/* eslint-disable no-console */
'use strict';
const consola = require('consola');
const Hapi = require('@hapi/hapi');
const HapiPino = require('hapi-pino');
const authKeycloak = require("hapi-auth-keycloak");

const { version } = require('./package.json');
const { setRoutes } = require('./route');

process.on('unhandledRejection', (err) => {
  consola.error(err);
});

async function start () {
  const server = Hapi.server({
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 3002,
    router: {
      stripTrailingSlash: true
    },
    debug: {
      request: ['error']
    },
    routes: {
      validate: {
        failAction: (request, h, err) => {
          if (process.env.NODE_ENV === 'production') {
            // In prod, log a limited error message and throw the default Bad Request error.
            consola.error('ValidationError:', err.message);
          } else {
            // During development, log and respond with the full error.
            consola.error(err);
            throw err;
          }
        }
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/api/v1/version',
    handler: () => version
  });

  server.events.on('log', (event, tags) => {
    consola.log(event);
  });

  await server.register({
    plugin: authKeycloak
  });

  server.auth.strategy("keycloak-jwt", "keycloak-jwt", {
    // realmUrl: "https://localhost:8080/auth/realms/testme",
    realmUrl: "http://local.auth.mintbean.io:3000/auth/realms/mintbean.io",
    clientId: "mintbean-backend",
    minTimeBetweenJwksRequests: 15,
    cache: true,
    userInfo: ["name", "email"],
  });

  await server.register({
    plugin: HapiPino,
    options: {
      prettyPrint: process.env.NODE_ENV !== 'production',
      // Redact Authorization headers, see https://getpino.io/#/docs/redaction
      redact: ['req.headers.authorization']
    }
  });

  setRoutes(server);

  server.start().then(() => consola.ready({
    message: `Server running at: ${server.info.uri}`,
    badge: true
  }));
}

start();
