# Dockerfile
FROM node:12.16.1
WORKDIR /app

# Copy and install dependencies
COPY . .
RUN yarn install

EXPOSE 3000

CMD NODE_ENV=production yarn start

# VOLUMES are handled by docker-compose.yml