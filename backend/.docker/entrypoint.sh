#!/bin/sh

npm install

npm install -g @nestjs/cli

npm run migration:run

npm run start:dev