FROM node:22-slim AS base
WORKDIR /app

FROM base AS deps
COPY package.json package-lock.json /app/
RUN npm i

FROM base AS build
COPY --from=deps /app/node_modules /app/node_modules
COPY . .
RUN npx nx build client

FROM nginx:1-alpine-slim AS release
COPY --from=build /app/dist/apps/client/browser /usr/share/nginx/html
