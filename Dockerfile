FROM node:12.16.1-buster

ARG GOOGLE_TAG_MANAGER_ID
ARG BASE_CDN_URL

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000


# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# update and install dependency
# RUN apk update && apk upgrade
# RUN apk add git

# copy the api, note .dockerignore
COPY . /usr/src/nuxt-app/
# COPY rds-combined-ca-bundle.pem /usr/src/express-api/
RUN chmod +x ./entrypoint.sh
RUN npm install
# RUN npm un sharp
# RUN npm i sharp
RUN npm run build

EXPOSE 3000

# start the app
ENTRYPOINT ["sh", "-c", "./entrypoint.sh"]
