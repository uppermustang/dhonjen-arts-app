# Dhonjen Arts — dhonjenarts.com

A React + Node.js website for **Dhonjen Arts**: portfolio gallery, about page, and custom wall art / kid's room commission booking.

## Features

- **Home** — Hero landing, featured works, category highlights, CTA
- **About** — Studio story and commission process
- **Gallery** — 30 placeholder artworks (Unsplash), filter by Abstract, Portrait, Landscape, Wall Art (4-column responsive grid)
- **Book Art** — Commission contact form (wall art & kid's room)
- **Footer** — Navigation, categories, contact links

## Tech stack

- **Frontend:** React 19, Vite, React Router
- **Backend:** Express 5 (contact API, static serve in production)

## Getting started

```bash
# Install all dependencies
npm install
npm install --prefix client
npm install --prefix server

# Run client (5173) + API (3001) together
npm run dev
```

- Site: [http://localhost:5173](http://localhost:5173)
- API health: [http://localhost:3001/api/health](http://localhost:3001/api/health)

## Production build (local)

```bash
npm run build
npm start
```

Serves the built React app from the Express server on port 3001.

## Deploy to Vercel (GitHub)

1. Push this repo to GitHub (include `vercel.json` and `package-lock.json` files).
2. In [Vercel](https://vercel.com) → **Add New Project** → import your GitHub repo.
3. Leave **Root Directory** as `.` (repository root). Vercel reads `vercel.json` automatically:
   - **Install:** root + `client` dependencies (so Vite is available)
   - **Build:** `client` → `client/dist`
   - **Output:** `client/dist`
4. Deploy. React routes use SPA rewrites; `/api/contact` runs as a serverless function.

If the dashboard overrides settings, match `vercel.json` or clear custom build commands.

**Why the earlier error happened:** Vercel only ran `npm install` at the repo root, so `vite` in `client/` was never installed (`vite: command not found`).

## Contact form

Submissions POST to `/api/contact` and are logged to the server console. Connect an email provider (SendGrid, Nodemailer, etc.) in `server/index.js` when ready for production.

## Replace placeholder images

Edit `client/src/data/galleryArt.js` with your real artwork URLs and titles.
