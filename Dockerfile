FROM node:14.5.0-stretch-slim AS base

LABEL maintainer="ricardocosta"

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
ENV APP_DIR /usr/src/app

RUN yarn global add serve
RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}

ADD . ${APP_DIR}
RUN yarn install --frozen-lockfile

FROM base AS build
