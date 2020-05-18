# Dockerfile
FROM node:12.16.1 AS build
WORKDIR /app

# Copy and install dependencies
COPY . .
RUN ls -alth node_modules
RUN yarn install && yarn build

FROM nginx:stable

COPY --from=build /app/dist /var/www/
COPY ./production.nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx -g 'daemon off;'"]
