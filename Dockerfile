
FROM node:22.15 AS builder

RUN mkdir /docker-project
WORKDIR /docker-project

COPY package*.json ./
RUN npm ci

RUN npm install -g @angular/cli@17.2  

COPY . .