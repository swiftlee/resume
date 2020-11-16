FROM node:10.22.0-alpine

WORKDIR /app

COPY package.json /app

RUN yarn && yarn cache clean

COPY . /app

CMD ["yarn", "run", "build"]