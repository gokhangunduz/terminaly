FROM node:latest as build-stage
ARG IP_TOKEN
COPY . /app
WORKDIR /app
RUN npm install -s
RUN npm run build
FROM nginx:alpine as production-stage
COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 80