FROM node:15.11
WORKDIR /home/node/api

COPY package.json ./
RUN npm install
RUN npm install --save-dev nodemon

COPY . .

EXPOSE 9001