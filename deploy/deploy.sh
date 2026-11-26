#!/bin/sh
# Pull the latest portfolio and rebuild it. Run on the server from anywhere:
#   ~/portfolio/deploy/deploy.sh
set -eu
cd "$(dirname "$0")"
git pull --ff-only
docker compose --env-file .env up -d --build
docker image prune -f >/dev/null
echo "Deployed: https://$(sed -n 's/^PORTFOLIO_ADDRESS=//p' .env)"
