FROM node:14.4-buster

RUN mkdir /usr/app
WORKDIR /usr/app
RUN apt update && apt install python3 python3-pip -y
RUN pip3 install seaborn numpy pandas

COPY package.json ./
RUN npm install

EXPOSE 5000

CMD npm run dev
