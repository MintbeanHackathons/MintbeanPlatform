# Dockerfile
FROM node:12.16.1
WORKDIR /app

# Copy and install dependencies
COPY package*.json yarn.lock ./
RUN yarn install

EXPOSE 3000
CMD yarn dev

# VOLUMES are handled by docker-compose.yml