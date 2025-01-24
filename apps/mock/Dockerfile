FROM node:22-slim AS base
WORKDIR /app

FROM base AS prod-deps
RUN npm i @nestjs/common@^10.0.2 @nestjs/core@^10.0.2 @nestjs/platform-express@^10.0.2 tslib@^2.3.0 ng-packagr@~19.0.0

FROM base AS deps
COPY package.json package-lock.json /app/
RUN npm i

FROM base AS build
COPY --from=deps /app/node_modules /app/node_modules
COPY . .
RUN npx nx build mock

FROM base AS release
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/dist/apps/mock /app
EXPOSE 3000
ENTRYPOINT ["node", "main.js" ]
