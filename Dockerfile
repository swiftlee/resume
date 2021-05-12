FROM node:14.12.0-alpine3.12 as builder

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json /app
COPY ./yarn.lock /app
RUN yarn --silent

COPY . /app
RUN yarn run build

FROM nginx:1.19.10-alpine
COPY --from=builder /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]