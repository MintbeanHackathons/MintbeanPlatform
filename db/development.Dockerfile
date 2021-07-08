FROM postgres
COPY development.init.sql /docker-entrypoint-initdb.d/
