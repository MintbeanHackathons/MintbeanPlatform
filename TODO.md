# DEVELOPMENT

## Critical path to production

1. Docker-compose prod
  * Save keycloak export json for development purposes
  * Create docker-compose.yml for production
  * Setup Keycloak Mintbean realm based on development
  * VOLUMES: Keycloak, where is the JWT signing certificate located? Does it need to be volumized? Do I need to save a cert for local use?
  * VOLUMES: Keycloak, where is the password hash signing certificate located (if any)? Does it need to be volumized? Do I need to save a cert for local use?
  * Staging should deploy prod images
  * Manually deploy Dockerized app
  * Manually install certbot on nginx + document
  * Manually setup firewall rules + document
  * Keycloak email setup + enable email SSL
2. Document & finalize prod workflow
3. Docker prod deploy




- Create database backup systems
- cicd - implement ci
- auth - dummy protected frontend route
- auth - protected backend route
- auth JSON export
- nginx self-signed SSL certs for localhost and auth.localhost, and turn "Require SSL" on for Keycloak
- theme keycloak

PRODUCTION
- VOLUMES: Frontend needs to be built and deployed to an nginx public server
- VOLUMES: Keycloak, what directories need to be volumized?

RELEASE
- find a better taskrunner for node

DOCUMENTATION
- Cloning
- Installing Docker + Docker Compose
- yarn commands OR taskrunner
- Setting up your hostsfile
- importing default keycloak json
- Don't do `sudo`
- note that Frontend dev mode puts frontend at localhost:3001
- note that Fullstack dev mode puts frontend at localhost:3001 and backend at localhost:3002

RESOURCES
- Keycloak docs for server admin: https://www.keycloak.org/docs/latest/server_admin/index.html

# DONE

- DONE - postgres data volume
- DONE - postgres username password
- DONE - sequelize postgres hostname - change to 'db' and connect to postgres
- DONE - sequelize migrate on start
- DONE - sequelize seed on command
- DONE - keycloak
- DONE backend should run with nodemon
- DONE - *auth - set user on login
- DONE - *auth - topbar
- DONE - *auth - login/logout button