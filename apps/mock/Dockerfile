FROM node:22-slim AS base
WORKDIR /app

FROM base AS prod-deps
COPY package.json package-lock.json /app/
RUN npm i --omit=dev

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
