# Airbnb Clone

Monorepo containing the **frontend (client)** and **backend (server)** for the Airbnb UI challenge. Built with **JavaScript**: React (Vite) for the client, Node + Express for the server, and MongoDB for data. Designed to reproduce the Airbnb homepage and property details page with functional search, filters, and date availability.

---

## Repo layout

```
/ (root)
├─ client/            # React (Vite) frontend
├─ server/            # Node + Express backend
├─ README.md          # (this file)
└─ .gitignore
```

---

## Quick summary

- **Goal:** Recreate Airbnb home page + property details page (~97% visual match). Only homepage and property pages are required for the task.
- **Stack:** React (Vite) + Tailwind (client) | Node + Express + Mongoose (server) | MongoDB Atlas (DB)
- **Language:** Plain JavaScript (no TypeScript)

---

## Prerequisites

- Node.js v16+ and npm
- MongoDB Atlas account (or local MongoDB)
- (Optional) accounts for deployment platforms (Vercel, Railway/Render)

---

## Setup (local)

Clone the repo and install dependencies for both packages:

```bash
git clone <repo-url>
cd <repo-folder>
# Install client deps
cd client && npm install
# Install server deps
cd ../server && npm install
```

### Environment variables

Create `.env` files in both `client/` and `server/` (examples below).

#### server/.env

```
PORT=5000
MONGO_URI=your_mongo_connection_string
```

#### client/.env

```
VITE_API_BASE_URL=http://localhost:5000
```

---

## Development (run both)

From root you can run both in separate terminals:

```bash
# Terminal 1: start server
cd server
npm run dev

# Terminal 2: start client
cd client
npm run dev
```

**Server scripts** (server/package.json)

- `dev` — `nodemon index.js` (or `node index.js`)
- `start` — production start

**Client scripts** (client/package.json)

- `dev` — `vite`
- `build` — build for production
- `preview` — preview production build

---

## Seed data

A seed script is included at `server/seeds/seed.js` to populate sample listings (images, price, bookings). To run:

```bash
cd server
node seeds/seed.js
```

This creates ~20 listings to demonstrate filters, search, and date-availability logic.

---

## API contract (expected endpoints)

The frontend communicates with the server using these endpoints. Adjust paths if you change the base URL.

- `GET /api/listings` — query params: `location, startDate, endDate, guests, priceMin, priceMax, q` → returns filtered listings (availability computed server-side)
- `GET /api/listings/:id` — returns single listing with images, description, amenities, bookings
- `GET /api/filters/meta` — optional: returns available price range, amenities, guest options

**Date availability rule:** exclude listings with bookings that overlap `startDate`..`endDate`. Overlap test: `booking.startDate <= endDate && booking.endDate >= startDate`.

---

## Deployment tips

- **Frontend:** Deploy to **Vercel** — build output from `client/dist`. Set `VITE_API_BASE_URL` in Vercel environment variables.
- **Backend:** Deploy to **Railway**, **Render**, or **Fly**. Add `MONGO_URI` and allow CORS for your frontend URL.
- **MongoDB:** Use **MongoDB Atlas (free tier)** for an easy managed DB.

If you prefer, you can host the backend as serverless functions, but be careful with persistent DB connections — reuse connections across invocations.

---

## Testing & QA checklist

- [ ] Homepage responsive on mobile / tablet / desktop
- [ ] Search bar (location, dates, guests) sends correct queries to backend
- [ ] Filters (price, guests, availability) are backed by API
- [ ] Clicking a listing opens the property details page with images, details, and booking section
- [ ] Seed data demonstrates bookings and availability correctly
- [ ] CORS configured to allow frontend requests

---

## Contributing

1. Fork the repo
2. Create a branch: `git checkout -b feat/your-feature`
3. Commit changes: `git commit -m "feat: add ..."`
4. Push and open a PR

---

## Troubleshooting

- If API calls fail, check `VITE_API_BASE_URL` and server `PORT` / CORS settings.
- If images don't load in seed data, ensure public image URLs are reachable or swap with local `public/screenshots` images.

---

## License & Contact

MIT License.
Md Emon Miah — GitHub: `umayermdemon` — add email if you want direct contact.

---

Need me to also:

- generate `server/README.md` and `client/README.md` files, or
- create GitHub Actions for deploy, or
- produce a `Procfile` / `vercel.json` for deployment?

Tell me which and I’ll add it directly into the repo files.
