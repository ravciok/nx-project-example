FROM node:22-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /app

FROM base AS build
COPY package.json pnpm-lock.yaml /app/
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
COPY . .
RUN NX_DAEMON=false pnpm nx build client

FROM nginx:1-alpine-slim AS release
COPY --from=build /app/dist/apps/client/browser /usr/share/nginx/html
