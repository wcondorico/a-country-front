# Etapa 1: build del proyecto Angular
FROM node:22.15 AS builder

RUN mkdir /docker-project
WORKDIR /docker-project

COPY package*.json ./
RUN npm install

RUN npm install -g @angular/cli@17.2  


COPY . .

CMD ["ng", "serve", "--host", "0.0.0.0"]