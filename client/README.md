# Airbnb Client (Frontend)

**Recreated Airbnb homepage + property detail page** — built as the frontend part of the MERN recruitment task. Plain **JavaScript (React + Vite)**, Tailwind for styling and focused on achieving a **97% visual match** with functional search, filters and date selection powered by a backend API.

---

## Live demo

Add your deployed URL here (e.g. Vercel): `https://your-frontend.vercel.app`

## Screenshots

Place screenshots in `/public/screenshots` and reference them here.

---

## Key features

- Responsive Home page and Property detail page (mobile / tablet / desktop)
- Hero search bar: location, date range, guests
- Backend-driven filters: price range, guests, availability
- Listing grid with cards and click-to-open property page
- Property page with images carousel, details, amenities, and booking summary
- Uses dummy/seed data when backend is not connected

---

## Tech stack

- **Frontend:** React (Vite) — JavaScript
- **Styling:** Tailwind CSS
- **Routing:** react-router-dom
- **HTTP:** axios
- **Date selection:** react-date-range (or react-datepicker)

---

## Quick start (local)

### Prerequisites

- Node.js v16+ and npm
- (Optional) MongoDB or a running backend that exposes the expected API

### Install

```bash
# clone the repo
git clone <repo-url>
cd client
npm install
```

### Environment

Create a `.env` file in the `client/` folder with:

```
VITE_API_BASE_URL=https://your-backend.example.com
```

If you don't provide a backend, the app will use seed data in `src/data/seed.js`.

### Run (development)

```bash
npm run dev
```

### Build (production)

```bash
npm run build
npm run preview
```

---

## Available scripts (package.json)

- `dev` — start Vite dev server
- `build` — build for production
- `preview` — locally preview the production build

Add any additional scripts you include here.

---

## Expected backend API (contract)

The frontend expects a backend that exposes the following endpoints (adjust paths via `VITE_API_BASE_URL`):

- `GET /api/listings` — query params supported: `location, startDate, endDate, guests, priceMin, priceMax, q` -> returns filtered listings
- `GET /api/listings/:id` — returns single listing detail (images, description, amenities, bookings)
- `GET /api/filters/meta` — optional: returns filter metadata (price range, available amenities)

**Date availability logic:** the backend should return only listings that do not have bookings overlapping the requested date range. Overlap test: `booking.startDate <= req.endDate && booking.endDate >= req.startDate`.

---

## Seed data

A small seed file `src/data/seed.js` contains ~20 sample listings used when the backend is not connected. Use it to demonstrate filters, search and date-availability UI.

---

## Design notes

- Focused on pixel matching: spacing, font sizes, hero layout and card aspect ratios.
- Uses Tailwind utility classes plus a small custom stylesheet `src/styles/pixel-tweaks.css` for fine adjustments.
- Images use stock placeholders with Airbnb-like aspect ratios.

---

## Deployment

**Frontend:** recommended on Vercel (free). Set the environment variable `VITE_API_BASE_URL` in Vercel project settings to point to your backend.

If you host backend on Railway / Render / Fly / Heroku, ensure CORS allows your Vercel URL.

---

## Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/my-change`
3. Commit: `git commit -m "feat: description"`
4. Push and open a PR

---

## License

MIT

---

## Contact

Md Emon Miah — add your email or GitHub profile

_Need a matching `README.md` for the backend (Express + Mongo) or a ready-to-deploy Vercel configuration? I can add that next._
