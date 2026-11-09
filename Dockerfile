FROM node:22-alpine AS build-stage
ARG IP_TOKEN
ENV IP_TOKEN=$IP_TOKEN
WORKDIR /app
COPY package.json ./
RUN npm install --no-audit --no-fund
COPY . .
RUN npm run build

FROM nginx:alpine AS production-stage
COPY --from=build-stage /app/out /usr/share/nginx/html
EXPOSE 80
