#!/bin/bash

if [ $NODE_ENV == "development" ] || [ $NODE_ENV == "test" ]
then
  yarn sql db:drop && yarn sql db:create && yarn sql db:migrate && yarn sql db:seed:all;
else
  echo 'Cannot run. NODE_ENV must equal development or test'
fi
