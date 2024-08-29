FROM node:18-alpine3.18

WORKDIR /home/app

COPY . .

RUN npm install

RUN npm run build

RUN mkdir -p /var/www/html

RUN mv dist/* /var/www/html

VOLUME /var/www/html