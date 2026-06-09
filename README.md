# Explore Nepal — Authentic Journeys

A modern full-stack-ready frontend for a Nepal tourism company. Built from scratch with React 18, TypeScript, Tailwind CSS, and Framer Motion.

---

## Stack

| Layer       | Tech                                     |
|-------------|------------------------------------------|
| Framework   | React 18 + TypeScript                    |
| Build tool  | Vite 5                                   |
| Styling     | Tailwind CSS 3 with custom theme         |
| Routing     | React Router v6                          |
| Animations  | Framer Motion 11                         |
| Icons       | Lucide React                             |
| Fonts       | Playfair Display (headings) + Inter (body)|

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Project Structure

```
src/
├── components/
│   ├── common/         # Reusable UI — cards, headers, scroll-to-top
│   ├── home/           # Home page sections — Hero, Tours, Gallery, CTA...
│   └── layout/         # Navbar, Footer, Layout wrapper
├── data/               # Static data — destinations, tours, testimonials, gallery
├── pages/              # Route-level pages — Home, Destinations, Tours, About...
├── types/              # TypeScript interfaces
└── index.css           # Tailwind directives + global styles
```

---

## Pages

| Route           | Page               |
|-----------------|--------------------|
| `/`             | Home               |
| `/destinations` | All Destinations   |
| `/tours`        | Tours & Treks      |
| `/gallery`      | Photo Gallery      |
| `/about`        | About Us           |
| `/contact`      | Contact / Enquiry  |
| `*`             | 404 Not Found      |

---

## Key Features

- **Hero slideshow** — 4-image ken-burns crossfade with auto-advance
- **Tour filter + sort** — filter by category & difficulty, sort by price/rating/duration
- **Destination search** — live search + region filter
- **Gallery lightbox** — category filter + click-to-expand with Framer Motion
- **Testimonials carousel** — dot-nav with animated transitions
- **Responsive navbar** — transparent on hero, solid on scroll; full hamburger drawer on mobile
- **Contact form** — client-side validation with loading + success states
- **Scroll-to-top** — appears after 400px scroll
- **Framer Motion animations** — all sections use `whileInView` for scroll-triggered entrance

---

## Responsive Breakpoints

| Breakpoint | Width   | Notes                          |
|------------|---------|--------------------------------|
| `xs`       | 480px   | Custom — extra-small phones    |
| `sm`       | 640px   | Tablet portrait                |
| `md`       | 768px   | Tablet landscape               |
| `lg`       | 1024px  | Desktop                        |
| `xl`       | 1280px  | Wide desktop                   |
| `2xl`      | 1536px  | Ultra-wide                     |

---

## Images

All images are served from Unsplash CDN. To replace with your own photography:

1. Upload images to your preferred CDN (Cloudinary, S3, etc.)
2. Update the image URLs in `src/data/destinations.ts`, `src/data/tours.ts`, and `src/data/gallery.ts`
3. Update hero slide images in `src/components/home/Hero.tsx`

---

## Colour Palette

| Token              | Hex       | Usage                  |
|--------------------|-----------|------------------------|
| `navy-800`         | `#1F3A5F` | Primary dark / navbar  |
| `nepal-red`        | `#C0392B` | Accent / CTAs          |
| `nepal-gold`       | `#D4AF37` | Highlights / eyebrows  |
| `nepal-cream`      | `#F8F5F0` | Light section bg       |

---

## Deployment

### Vercel (recommended)
```bash
npm i -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Drag & drop the dist/ folder into netlify.com/drop
```

### Docker
```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
```

---

## Contributing

1. Fork the repo
2. Create a feature branch (`git checkout -b feat/my-feature`)
3. Commit your changes (see commit style in git log)
4. Open a pull request

---

## License

MIT — do whatever you want, just don't claim you built the mountains.
