# ========= Build phase 1 ===============================================

FROM node:12.16.1 AS build1
ARG FRONTEND_VUE_APP_KEYCLOAK_CLIENT_ID
ARG FRONTEND_VUE_APP_KEYCLOAK_REALM
ARG FRONTEND_VUE_APP_KEYCLOAK_URL

RUN echo "NODE: VUE_APP_KEYCLOAK_CLIENT_ID is: $FRONTEND_VUE_APP_KEYCLOAK_CLIENT_ID" && \
  echo "NODE: VUE_APP_KEYCLOAK_REALM is: $FRONTEND_VUE_APP_KEYCLOAK_REALM" && \
  echo "NODE: VUE_APP_KEYCLOAK_URL is: $FRONTEND_VUE_APP_KEYCLOAK_URL"

WORKDIR /app
COPY . .
RUN echo "\
  VUE_APP_KEYCLOAK_CLIENT_ID=$FRONTEND_VUE_APP_KEYCLOAK_CLIENT_ID && \
  VUE_APP_KEYCLOAK_REALM=$FRONTEND_VUE_APP_KEYCLOAK_REALM && \
  VUE_APP_KEYCLOAK_URL=$FRONTEND_VUE_APP_KEYCLOAK_URL \
  " >> .env && cat .env && yarn install && yarn build

# ========= Build phase 2 ===============================================

FROM nginx:stable

COPY --from=build1 /app/dist /var/www/
COPY ./production.nginx.conf /etc/nginx/conf.d/default.conf

CMD nginx -g 'daemon off;'
