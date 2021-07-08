#!/bin/bash

echo 'Mintbean dev config script: Started.'

# Exit if any command fails
echo 'Script will make a cowardly exit if any error occurs.'
set -e

# 
echo 'Making the /opt/mintbean directory and changing ownership to the current user'
sudo mkdir /opt/mintbean
sudo chown -R $USER:$USER /opt/mintbean

# Create the self-signed ssl files
echo 'Making the /opt/mintbean/config/self-signed-ssl directory'
mkdir -p /opt/mintbean/config/self-signed-ssl

echo 'Creating the self-signed certs necessary for nginx SSL to work locally.'
openssl req -x509 -nodes -days 365 -newkey rsa:1024 \
    -subj '/CN=*.mintbean.io/O=Mintbean/C=CA' \
    -keyout /opt/mintbean/config/self-signed-ssl/self-signed-ssl.key \
    -out /opt/mintbean/config/self-signed-ssl/self-signed-ssl.crt

echo 'Creating /opt/mintbean/config/docker-compose.env'
mkdir -p /opt/mintbean/config
cp ./docker-compose.env /opt/mintbean/config/docker-compose.env

echo 'DONE!'
