# DEVELOPMENT
(* = critical path)

- DONE - postgres data volume
- DONE - postgres username password
- DONE - sequelize postgres hostname - change to 'db' and connect to postgres
- DONE - sequelize migrate on start
- DONE - sequelize seed on command
- DONE - keycloak
- DONE backend should run with nodemon
- DONE - *auth - set user on login
- *auth - topbar
- *auth - login/logout button
- *auth - dummy protected frontend route
- *auth - protected backend route
- template the auth server BASE_URL for index.html keycloak.js
- auth JSON export
- nginx self-signed SSL certs for localhost and auth.localhost, and turn "Require SSL" on for Keycloak
- [low priority] theme keycloak

PRODUCTION
- VOLUMES: Frontend needs to be built and deployed to an nginx public server
- VOLUMES: Keycloak, what directories need to be volumized?
- VOLUMES: Keycloak, where is the signing certificate located? Does it need to be volumized? Do I need to save a cert for local use?
- Volume management
- Clean up configuration so it conistently uses either Dockerfile or docker-compose.yml
- Setup db backup
- Keycloak Mintbean realm
- Keycloak email setup + enable email SSL

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