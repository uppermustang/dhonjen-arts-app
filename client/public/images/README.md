# Your images go here

Paste your photo files into these folders. They are served at `/images/...` on the site.

**Do not change** the Home page hero — that image stays in code (Unsplash) unless you edit `client/src/pages/Home.jsx` yourself.

## Folder layout

```
client/public/images/
├── gallery/          ← Your artwork files (e.g. Dhonjen (1).jpg)
│   List is wired in client/src/data/galleryArt.js
├── about/            ← About page
│   DhonjenProfile.jpg
│   wallArt.jpg
│   artClass.jpg
│   personlizedArt.png
└── commission/       ← optional local sidebar (or use Unsplash in siteContent.js)
```

## Gallery (`gallery/`)

| File       | Title (update in code if needed)     | Category   | Shape      |
|------------|--------------------------------------|------------|------------|
| 01.jpg     | Nepalese Traditional Portrait        | Portrait   | tall       |
| 02.jpg     | Focus each other                     | Abstract   | wide       |
| 03.jpg     | work for living                      | Wall Art   | tall       |
| …          | …                                    | …          | …          |
| 30.jpg     | Horizon Line                         | Landscape  | wide       |

- **Tall / vertical** pieces: portrait orientation — use for ids marked portrait in `galleryArt.js`
- **Wide** pieces: landscape orientation — use for ids marked landscape
- Formats: `.jpg`, `.jpeg`, `.png`, or `.webp` (if you use `.webp`, change the filename in `client/src/data/galleryArt.js`)

Recommended size: **1200px** on the long edge, under **500 KB** each if possible.

## About (`about/`)

| File                 | Where it appears                          |
|----------------------|-------------------------------------------|
| DhonjenProfile.jpg   | Top intro portrait                        |
| wallArt.jpg          | “Wall art…” service card                  |
| artClass.jpg         | “Art Class” service card                  |
| personlizedArt.png   | “Personalized” service card               |

“Few words about me” uses one image from `gallery/` (see `aboutImages.bioFeatured` in `siteContent.js`). Quotes backdrop uses a Van Gogh-themed Unsplash image in code.

## Commission (`commission/`)

Contact sidebar uses `wallArt.jpg` from `images/about/` via `commissionImages.sidebar` in `siteContent.js`. To use a dedicated file, add `sidebar.jpg` here and update that path.

## After adding files

1. Run `npm run dev` from project root (or `npm run dev` in `client`).
2. Check Gallery, About, Contact pages.
3. Commit images + push to GitHub for Vercel.

Titles and categories are edited in `client/src/data/galleryArt.js` and `client/src/data/siteContent.js` — not by renaming files only.
