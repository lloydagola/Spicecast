FROM node:latest

WORKDIR /usr/src/app 

COPY package*.json ./

RUN npm install -g nodemon && npm install

COPY . .

WORKDIR /usr/src/app/client

RUN npm install && npm run build

WORKDIR /usr/src/app

EXPOSE 4000

CMD ["npm", "start"]


