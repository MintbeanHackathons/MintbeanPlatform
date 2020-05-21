FROM nginx
RUN rm /etc/nginx/conf.d/default.conf /etc/nginx/nginx.conf
# ADD ./conf/nginx.conf /etc/nginx/nginx.conf
# ADD ./conf/sites-enabled /etc/nginx/sites-enabled
