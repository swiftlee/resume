FROM node:14.12.0-alpine3.12

WORKDIR /app

COPY package.json /app

RUN yarn && yarn cache clean

COPY . /app

CMD ["yarn", "run", "build"]