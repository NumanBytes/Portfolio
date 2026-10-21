# Deploying the portfolio next to Shortlist

The portfolio runs on the **same EC2 server as Shortlist** (`t4g.small`, Mumbai). It's a
static site, so in production it's just one tiny Caddy container (a few MB of RAM) serving
HTML/CSS/JS. There's no Node process and no database.

```
visitor ──HTTPS──► Shortlist's Caddy (owns ports 80/443, gets the certificates)
                    ├─ numan-shortlist.duckdns.org ──► Shortlist (unchanged)
                    └─ numan-razzaq.duckdns.org   ──► portfolio container (:80, "web" network)
```

Only one program can listen on ports 80/443, and Shortlist's Caddy already does. So the
portfolio doesn't publish any ports. Shortlist's Caddy gets one more site block that
forwards the portfolio's hostname to the portfolio container over a shared Docker network
called `web`.

## 1. Get the free hostname (DuckDNS)

Same as for Shortlist: sign in at <https://www.duckdns.org>, add the subdomain
**`numan-razzaq`**, and set its IP to the server's Elastic IP (the same IP as
`numan-shortlist`). Result: `numan-razzaq.duckdns.org`.

> Want a nicer name? See "Custom domain" at the bottom. Only DNS and one `.env` line change.

## 2. One-time server setup

SSH in (`ssh ubuntu@YOUR_SERVER_IP`), then:

```bash
# The shared network both Caddy and the portfolio join.
docker network create web

# Get the portfolio code.
git clone https://github.com/NumanBytes/Portfolio.git ~/portfolio
cd ~/portfolio/deploy
cp .env.example .env          # PORTFOLIO_ADDRESS=numan-razzaq.duckdns.org
```

Add the resume PDF that the "Resume" button links to (otherwise the button links to
LinkedIn instead). From your laptop:

```bash
scp Numan_Razzaq_Resume.pdf ubuntu@YOUR_SERVER_IP:~/portfolio/public/
```

## 3. Teach Shortlist's Caddy about the portfolio

Make these two small edits in the **Shortlist** repo, commit them, and pull them on the
server. They're harmless to Shortlist itself.

**`deploy/Caddyfile`**: add this block at the end of the file:

```caddy
# The portfolio (github.com/NumanBytes/Portfolio): its own container on the "web" network.
{$PORTFOLIO_ADDRESS} {
	encode zstd gzip
	reverse_proxy portfolio:80
}
```

**`deploy/docker-compose.yml`**: give the `caddy` service the hostname and the shared
network, and declare the network at the bottom:

```yaml
  caddy:
    # ...everything that's already there...
    environment:
      SITE_ADDRESS: ${SITE_ADDRESS:?set SITE_ADDRESS in .env}
      PORTFOLIO_ADDRESS: ${PORTFOLIO_ADDRESS:?set PORTFOLIO_ADDRESS in .env}
    networks: [default, web]

networks:
  web:
    external: true
```

Add the hostname to Shortlist's `deploy/.env` too:

```bash
echo 'PORTFOLIO_ADDRESS=numan-razzaq.duckdns.org' >> ~/shortlist/deploy/.env
```

## 4. Start it

Start the portfolio first, so Caddy finds it:

```bash
cd ~/portfolio/deploy && docker compose --env-file .env up -d --build
cd ~/shortlist/deploy  && docker compose --env-file .env up -d --build caddy
```

The first build takes a few minutes on the `t4g.small` (Next.js compiles the site). The
2 GB of swap from the Shortlist setup covers the memory. Caddy gets the HTTPS
certificate for the new hostname on its own within a minute. Then open
**https://numan-razzaq.duckdns.org**.

Check that it's all running:

```bash
docker ps --format '{{.Names}}\t{{.Status}}'      # portfolio-portfolio-1 should be "Up"
curl -sI https://numan-razzaq.duckdns.org | head -1  # HTTP/2 200
```

## Updating the site

Edit `lib/data.ts` (all of the content lives there), push to `main`, then on the server:

```bash
~/portfolio/deploy/deploy.sh
```

That script pulls, rebuilds and restarts the container. Shortlist keeps running
throughout.

## Troubleshooting

| Symptom | Fix |
|---|---|
| `network web declared as external, but could not be found` | `docker network create web` (step 2) |
| Browser shows Shortlist's 502 / "connection refused" for the portfolio | Portfolio container isn't up: `cd ~/portfolio/deploy && docker compose ps` / `logs` |
| Certificate error for the new hostname | DuckDNS IP is wrong, or ports 80/443 are closed in the security group. `docker logs shortlist-caddy-1` shows why Let's Encrypt refused |
| Build killed / "JavaScript heap out of memory" | Swap is off: `swapon --show`; see Shortlist's deploy guide §3b |

## Custom domain (optional)

There's no free `.dev` domain: the `.dev` registry charges everyone, and it's about
**$12–15/year** (cheapest at Cloudflare Registrar or Porkbun, e.g. `numanrazzaq.dev`).
`.dev` also requires HTTPS, which Caddy already handles. Free alternatives:

- **`numan-razzaq.duckdns.org`**: what this guide uses. Free and already working for
  Shortlist.
- **`numan.is-a.dev`**: free developer subdomains, requested with a pull request to
  <https://github.com/is-a-dev/register> containing a JSON file with your server IP
  (an `A` record).

To switch to any domain: point its `A` record at the server IP, change `PORTFOLIO_ADDRESS`
in **both** `~/portfolio/deploy/.env` and `~/shortlist/deploy/.env`, then rerun step 4.
The portfolio rebuilds so its canonical URL and share image use the new name.
