# Dekont Upload Worker

Cloudflare Worker + R2 bucket for uploading payment receipts from the registration form.
Also manages in-person registration capacity (200 person limit).

## Endpoints

### `POST /` (file upload)
Uploads a receipt file to R2. Accepts `multipart/form-data` with a `file` field.
Returns `{ success, url, filename }`.

### `GET /capacity`
Returns current in-person registration count.
Response: `{ inPersonCount, capacity, isFull }`

### `POST /register`
Increments the in-person counter by 1. Returns 409 if capacity is full.
Response: `{ success, count, capacity, isFull }` or `{ error, isFull }` (409).

### `POST /reset` (admin only)
Resets the in-person counter. Requires `Authorization: Bearer <ADMIN_SECRET>` header.
Optional body: `{ "count": <number> }` (defaults to 0).

## Environment Variables

| Variable | Description | Example |
|---|---|---|
| `R2_PUBLIC_URL` | R2 bucket public URL | `https://pub-abc.r2.dev` |
| `IN_PERSON_CAPACITY` | Max in-person participants | `200` |
| `ADMIN_SECRET` | Secret for /reset endpoint | (use `wrangler secret put`) |

## Deployment

```bash
cd cloudflare-worker
npm install -g wrangler
wrangler login
wrangler r2 bucket create dekontlar
wrangler secret put ADMIN_SECRET    # enter a strong secret
wrangler deploy
```

After deploy, set the worker URL in `.env.local`:
```
NEXT_PUBLIC_UPLOAD_WORKER_URL=https://dekont-upload.<your-subdomain>.workers.dev
```

## Managing the Capacity Counter

### Check current count
```bash
curl https://dekont-upload.<your-subdomain>.workers.dev/capacity
```

### Reset to zero
```bash
curl -X POST https://dekont-upload.<your-subdomain>.workers.dev/reset \
  -H "Authorization: Bearer <ADMIN_SECRET>"
```

### Reset to a specific number
```bash
curl -X POST https://dekont-upload.<your-subdomain>.workers.dev/reset \
  -H "Authorization: Bearer <ADMIN_SECRET>" \
  -H "Content-Type: application/json" \
  -d '{"count": 50}'
```

### Change the capacity limit
Edit `IN_PERSON_CAPACITY` in `wrangler.toml` and re-deploy:
```bash
wrangler deploy
```

