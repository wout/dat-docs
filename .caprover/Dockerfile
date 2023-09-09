# ##############################
# Build site
# ##############################
FROM node:20-alpine as vite_build
WORKDIR /build
COPY . .
RUN npm install -g npm@latest typescript vite
RUN npm install
RUN npm run docs:build

# ##############################
# Build webserver
# ##############################
FROM nginx:stable-alpine as webserver

# prepare proxy cache setup
RUN mkdir -p /var/run/nginx-cache

# copy vhost config
RUN rm -rf /etc/nginx/conf.d
RUN mkdir -p /etc/nginx/conf.d
COPY ./.caprover/default.conf /etc/nginx/conf.d/

# copy vite build
COPY --from=vite_build /build/.vitepress/dist /usr/share/nginx/html

# release app
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
