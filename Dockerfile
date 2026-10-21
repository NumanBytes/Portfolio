# Portfolio image: Next.js static export served by Caddy. No Node in the final image.
#   docker build -t portfolio --build-arg NEXT_PUBLIC_SITE_URL=https://numan-razzaq.duckdns.org .

# ── Build the static site ─────────────────────────────────────────────────────
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY . .
ARG NEXT_PUBLIC_SITE_URL=https://numan-razzaq.duckdns.org
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ── Serve it ──────────────────────────────────────────────────────────────────
FROM caddy:2-alpine AS web
COPY deploy/Caddyfile /etc/caddy/Caddyfile
COPY --from=build /app/out /srv
