FROM node:16.18.1-alpine

WORKDIR /app

EXPOSE 3000

COPY package*.json ./

RUN npm ci

COPY . .


CMD [ "npm", "start" ]