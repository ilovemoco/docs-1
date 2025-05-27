FROM node:18-slim AS builder

WORKDIR /www

COPY package-lock.json package.json ./

RUN npm install

COPY . ./

RUN npm run build

# nginx server
FROM nginx:alpine

COPY --from=builder /www/build /usr/share/nginx/html

COPY --from=builder /www/config_devops/nginx.conf /etc/nginx/conf.d/default.conf

# container port
EXPOSE 9080

