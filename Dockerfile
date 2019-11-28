# Build Environment
FROM node:alpine as builder
WORKDIR /opt
COPY . .
RUN npm install
RUN npm run build

# Production Environment
FROM nginx:alpine
LABEL maintaner="vlad.crishan20@gmail.com"
COPY --from=builder /opt/build /usr/share/nginx/html
EXPOSE 5000
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]