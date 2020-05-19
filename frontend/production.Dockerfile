# ========= Build phase 1 ===============================================

FROM node:12.16.1 AS build1
ARG frontend_vue_app_keycloak_url

RUN echo "NODE: FRONTEND_VUE_APP_KEYCLOAK_URL is: $frontend_vue_app_keycloak_url"
WORKDIR /app
COPY . .
RUN echo "VUE_APP_KEYCLOAK_URL=$frontend_vue_app_keycloak_url" >> .env && cat .env && yarn install && yarn build

# ========= Build phase 2 ===============================================

FROM nginx:stable

COPY --from=build1 /app/dist /var/www/
COPY ./production.nginx.conf /etc/nginx/conf.d/default.conf

CMD nginx -g 'daemon off;'
