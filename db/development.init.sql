CREATE DATABASE keycloak;


CREATE USER keycloak WITH PASSWORD 'password';

GRANT ALL PRIVILEGES ON DATABASE keycloak TO keycloak;

