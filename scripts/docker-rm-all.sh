#!/bin/bash

echo "Stopping all containers"
docker stop `docker ps -qa`

echo "Removing all containers"
docker rm `docker ps -qa`

echo "Removing all images"
docker rmi -f `docker images -qa `

echo "Removing all volumes"
docker volume rm $(docker volume ls -q)

echo "Removing all networks (except default ones)"
docker network rm `docker network ls -q`

echo "Docker should now be fresh and clean. The following commands should not output any items:"
echo "Remaining processes:"
docker ps -aq
echo "Remaining images:"
docker images -aq
echo "Remaining volumes:"
docker volume ls -q
echo "Remaining networks (these should only show the default networks):"
docker network ls -q
