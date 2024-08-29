#!/bin/sh

npm install

npm run migration:run

npm run build

npm run start:prod