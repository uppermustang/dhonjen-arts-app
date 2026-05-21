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

Vercel builds from **GitHub only** — push changes here, then Vercel redeploys automatically.

1. Commit and push to `main` on GitHub (`vercel.json`, `package.json`, `client/package.json`, lock files).
2. In Vercel → Project → **Settings** → **General**:
   - **Root Directory:** `.` (repo root, not `client`)
3. In **Build & Development Settings**, use defaults or match `vercel.json`:
   - **Install Command:** `npm install` (also runs `postinstall` → installs `client` + Vite)
   - **Build Command:** `npm run build`
   - **Output Directory:** `client/dist`
4. Use the **Production** URL (from the latest successful deploy on `main`). Older preview URLs with random hashes may show failed builds from before the fix.

Contact form on Vercel uses `api/contact.js` (serverless). Local dev still uses the Express server in `server/`.

## Contact form

Submissions POST to `/api/contact` and are logged to the server console. Connect an email provider (SendGrid, Nodemailer, etc.) in `server/index.js` when ready for production.

## Replace placeholder images

Edit `client/src/data/galleryArt.js` with your real artwork URLs and titles.
