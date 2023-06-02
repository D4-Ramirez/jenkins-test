FROM node:lts-alpine3.17

WORKDIR /

COPY package*.json .
RUN npm install

COPY src .
RUN npm run build

CMD [ "node", "src/index.js" ]
