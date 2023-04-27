FROM node:14-alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN yarn

CMD [ "yarn", "dev" ]