FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json .

RUN yarn

COPY . .

EXPOSE 8080

RUN 

CMD ["yarn", "start"]