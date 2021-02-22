FROM node:14.4-buster

RUN mkdir /usr/app
WORKDIR /usr/app

COPY package.json ./
RUN npm install

EXPOSE 5000

CMD npm run dev
