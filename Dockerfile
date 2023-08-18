FROM node:latest as build-stage
COPY . /app
WORKDIR /app
RUN npm install
RUN npm run export
FROM nginx:alpine as production-stage
COPY --from=build-stage /app/out /usr/share/nginx/html
EXPOSE 80