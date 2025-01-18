FROM node:22-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /app

FROM base AS prod-deps
COPY package.json pnpm-lock.yaml /app/
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM base AS build
COPY package.json pnpm-lock.yaml /app/
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
COPY . .
RUN NX_DAEMON=false pnpm nx build mock

FROM base AS release
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/dist/apps/mock /app
EXPOSE 3000
ENTRYPOINT ["node", "main.js" ]
