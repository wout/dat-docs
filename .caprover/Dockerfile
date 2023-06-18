ARG NODE_VERSION=18

# ##############################
# Build site
# ##############################
FROM node:$NODE_VERSION-alpine as vite_build
WORKDIR /build
COPY . .
RUN npm install -g npm@latest
RUN npm install -g typescript
RUN npm install -g vite
RUN npm install
RUN npm run docs:build


# ##############################
# Build webserver
# ##############################
FROM nginx:stable-alpine as webserver
RUN rm -rf /etc/nginx/conf.d
RUN mkdir -p /etc/nginx/conf.d
COPY ./.caprover/default.conf /etc/nginx/conf.d/
COPY --from=vite_build /build/.vitepress/dist /usr/share/nginx/html

# release app
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


# ##############################
# Health check for zero-downtime deploys
# ##############################
HEALTHCHECK \
  --interval=20s --retries=5 \
  CMD curl --fail localhost || exit 1
