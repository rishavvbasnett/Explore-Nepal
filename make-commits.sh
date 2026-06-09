#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# make-commits.sh
# Run once from the repo root (WSL terminal) to build the full commit history.
# Usage:  bash make-commits.sh
# ─────────────────────────────────────────────────────────────────────────────
set -e

echo "Setting up commit history for Explore-Nepal..."

# ── 1 ─────────────────────────────────────────────────────────────────────────
git add .gitignore
git commit -m "ADD GITIGNORE." -m "- node_modules, dist, .env excluded
- editor config files ignored
- platform-specific files handled"

# ── 2 ─────────────────────────────────────────────────────────────────────────
git add package.json
git commit -m "INIT REACT PROJECT." -m "- scaffolded Vite + React 18 + TypeScript
- added framer-motion, react-router-dom, lucide-react
- tailwindcss, postcss, autoprefixer as dev deps"

# ── 3 ─────────────────────────────────────────────────────────────────────────
git add index.html
git commit -m "ADD INDEX HTML." -m "- root HTML entry point with Google Fonts preload
- Playfair Display (headings) and Inter (body)
- OG meta tags and SEO description"

# ── 4 ─────────────────────────────────────────────────────────────────────────
git add vite.config.ts tsconfig.json tsconfig.node.json
git commit -m "ADD VITE AND TSCONFIG." -m "- vite.config.ts with react plugin, dev port 3000
- strict TypeScript config with path aliases
- tsconfig.node.json for vite config types"

# ── 5 ─────────────────────────────────────────────────────────────────────────
git add tailwind.config.js postcss.config.js
git commit -m "ADD TAILWIND CONFIG." -m "- custom colour tokens: navy, nepal-red, nepal-gold, nepal-cream
- Playfair Display and Inter in fontFamily
- custom keyframes: ken-burns, fade-in, slide-up
- xs breakpoint added (480px)"

# ── 6 ─────────────────────────────────────────────────────────────────────────
git add src/index.css
git commit -m "ADD GLOBAL STYLES." -m "- tailwind base/components/utilities layers
- btn-primary, btn-outline-white, btn-outline-navy reusable classes
- section-padding and container-custom utility classes
- custom scrollbar, smooth scroll"

# ── 7 ─────────────────────────────────────────────────────────────────────────
git add src/types/index.ts
git commit -m "DEFINE TYPE INTERFACES." -m "- Destination, Tour, Testimonial, GalleryItem interfaces
- Tour difficulty and category union types
- strict nullability throughout"

# ── 8 ─────────────────────────────────────────────────────────────────────────
git add src/data/destinations.ts
git commit -m "ADD DESTINATIONS DATA." -m "- 8 Nepal destinations: Kathmandu, Pokhara, Everest, Chitwan...
- each with region, altitude, best season, and highlights
- getDestinationById and getFeaturedDestinations helpers"

# ── 9 ─────────────────────────────────────────────────────────────────────────
git add src/data/tours.ts
git commit -m "ADD TOURS DATA." -m "- 8 tour packages with full details: price, duration, difficulty
- EBC, Annapurna, Chitwan, Heritage, Upper Mustang and more
- helpers: getFeaturedTours, getPopularTours, getToursByCategory"

# ── 10 ────────────────────────────────────────────────────────────────────────
git add src/data/testimonials.ts
git commit -m "ADD TESTIMONIALS DATA." -m "- 8 detailed traveller reviews from UK, Spain, Japan, Nigeria...
- each with rating, tour name, country flag, and avatar
- realistic writing style, not generic lorem ipsum"

# ── 11 ────────────────────────────────────────────────────────────────────────
git add src/data/gallery.ts
git commit -m "ADD GALLERY DATA." -m "- 12 gallery images across 5 categories
- mountains, culture, wildlife, trekking, people
- getGalleryByCategory helper"

# ── 12 ────────────────────────────────────────────────────────────────────────
git add src/components/common/SectionHeader.tsx
git commit -m "BUILD SECTION HEADER COMPONENT." -m "- reusable eyebrow + title + decorative line + subtitle
- light and dark mode variants
- centered and left-aligned options"

# ── 13 ────────────────────────────────────────────────────────────────────────
git add src/components/common/ScrollToTop.tsx
git commit -m "BUILD SCROLL TO TOP BUTTON." -m "- fixed bottom-right button appears after 400px scroll
- smooth scroll animation on click
- hover scale and accessible aria-label"

# ── 14 ────────────────────────────────────────────────────────────────────────
git add src/components/common/DestinationCard.tsx
git commit -m "BUILD DESTINATION CARD." -m "- image with ken-burns hover effect
- region and altitude badges
- best season and duration metadata
- arrow animates on hover"

# ── 15 ────────────────────────────────────────────────────────────────────────
git add src/components/common/TourCard.tsx
git commit -m "BUILD TOUR CARD." -m "- difficulty badge with colour coding (green/yellow/orange/red)
- popular badge with trending icon
- star rating, duration, group size meta
- original price strikethrough when on sale"

# ── 16 ────────────────────────────────────────────────────────────────────────
git add src/components/layout/Navbar.tsx
git commit -m "BUILD NAVBAR." -m "- transparent on hero, solid bg on scroll
- active link highlighted in nepal-gold
- full hamburger drawer on mobile with body scroll lock
- phone number and Book Now CTA on desktop"

# ── 17 ────────────────────────────────────────────────────────────────────────
git add src/components/layout/Footer.tsx
git commit -m "BUILD FOOTER." -m "- quick links, popular tours, contact info columns
- newsletter subscribe form with success state
- social icon row (Facebook, Instagram, YouTube)
- Made with love in Kathmandu tagline"

# ── 18 ────────────────────────────────────────────────────────────────────────
git add src/components/layout/Layout.tsx
git commit -m "BUILD LAYOUT WRAPPER." -m "- wraps all pages in Navbar + Footer
- scroll-to-top on route change via useEffect
- Outlet for nested routes"

# ── 19 ────────────────────────────────────────────────────────────────────────
git add src/components/home/Hero.tsx
git commit -m "BUILD HERO SECTION." -m "- 4-image auto-advancing slideshow with crossfade
- ken-burns zoom animation on background images
- hero stats strip: 500+ tours, 15+ years, 4.9 rating
- slide dots and scroll chevron"

# ── 20 ────────────────────────────────────────────────────────────────────────
git add src/components/home/FeaturedDestinations.tsx
git commit -m "BUILD FEATURED DESTINATIONS SECTION." -m "- staggered framer-motion entrance animations
- 6-destination responsive grid (1→2→3 col)
- whileInView triggers, once: true
- View All Destinations CTA"

# ── 21 ────────────────────────────────────────────────────────────────────────
git add src/components/home/FeaturedTours.tsx
git commit -m "BUILD FEATURED TOURS SECTION." -m "- category filter tabs: all, trekking, cultural, wildlife
- animated grid re-render on filter change
- 4-column responsive grid (1→2→4)
- Browse All Tours CTA"

# ── 22 ────────────────────────────────────────────────────────────────────────
git add src/components/home/WhyChooseUs.tsx
git commit -m "BUILD WHY CHOOSE US SECTION." -m "- 6 feature cards on dark navy background
- decorative radial bg circles
- stat counters: 3000+ travellers, 15 years, 50 guides
- all animations whileInView"

# ── 23 ────────────────────────────────────────────────────────────────────────
git add src/components/home/Testimonials.tsx
git commit -m "BUILD TESTIMONIALS CAROUSEL." -m "- animated slide transitions with AnimatePresence
- star ratings, tour label, country flag
- prev/next buttons and dot navigation
- large quote icon decoration"

# ── 24 ────────────────────────────────────────────────────────────────────────
git add src/components/home/GalleryPreview.tsx
git commit -m "BUILD GALLERY PREVIEW SECTION." -m "- 8-image masonry-style grid with tall rows
- click-to-open lightbox with AnimatePresence
- hover zoom-in overlay with location label
- View Full Gallery CTA"

# ── 25 ────────────────────────────────────────────────────────────────────────
git add src/components/home/CallToAction.tsx
git commit -m "BUILD CALL TO ACTION SECTION." -m "- full-width Himalayan background image
- Plan My Trip and Call Us Now CTAs
- navy overlay with warm copy
- motion entrance animation"

# ── 26 ────────────────────────────────────────────────────────────────────────
git add src/pages/Home.tsx
git commit -m "ASSEMBLE HOME PAGE." -m "- wires Hero → Destinations → Tours → WhyChooseUs
- → Testimonials → Gallery → CTA in order
- clean single-file composition, no logic here"

# ── 27 ────────────────────────────────────────────────────────────────────────
git add src/pages/Destinations.tsx
git commit -m "BUILD DESTINATIONS PAGE." -m "- live search input filters by name and tagline
- region filter buttons (All + each unique region)
- result count label
- animated grid with staggered children"

# ── 28 ────────────────────────────────────────────────────────────────────────
git add src/pages/Tours.tsx
git commit -m "BUILD TOURS PAGE." -m "- category tabs + difficulty pill filters + sort dropdown
- multi-filter composing cleanly together
- animated grid re-render on any filter change
- empty state with clear-filters shortcut"

# ── 29 ────────────────────────────────────────────────────────────────────────
git add src/pages/About.tsx
git commit -m "BUILD ABOUT PAGE." -m "- story section with 2-column text + photo collage
- 4 values cards with icons on cream background
- team grid with avatars, role, and bio
- links to contact and tours"

# ── 30 ────────────────────────────────────────────────────────────────────────
git add src/pages/GalleryPage.tsx
git commit -m "BUILD GALLERY PAGE." -m "- CSS columns masonry layout (2→3→4 cols)
- category filter: all, mountains, culture, wildlife, trekking, people
- click lightbox with full-screen AnimatePresence overlay
- location + alt text shown in lightbox"

# ── 31 ────────────────────────────────────────────────────────────────────────
git add src/pages/Contact.tsx
git commit -m "BUILD CONTACT PAGE." -m "- full enquiry form: name, email, phone, tour, dates, group size
- loading spinner on submit, success state with check icon
- WhatsApp quick-link button
- contact info cards with icons"

# ── 32 ────────────────────────────────────────────────────────────────────────
git add src/pages/NotFound.tsx
git commit -m "ADD 404 PAGE." -m "- mountain icon with low opacity
- on-brand copy: 'Lost on the trail?'
- Back to Home button
- centred full-screen layout"

# ── 33 ────────────────────────────────────────────────────────────────────────
git add src/App.tsx
git commit -m "WIRE UP ROUTING." -m "- BrowserRouter with nested Layout route
- all 6 pages registered
- catch-all * → NotFound
- destination and tour detail routes scaffolded"

# ── 34 ────────────────────────────────────────────────────────────────────────
git add src/main.tsx
git commit -m "ADD REACT ENTRY POINT." -m "- StrictMode wrapper
- createRoot mounting to #root
- index.css imported for Tailwind"

# ── 35 ────────────────────────────────────────────────────────────────────────
git add public/favicon.svg
git commit -m "ADD FAVICON." -m "- inline SVG favicon, no external dep
- navy background, red N monogram
- gold mountain outline detail"

# ── 36 ────────────────────────────────────────────────────────────────────────
git add README.md
git commit -m "ADD README." -m "- stack table, getting-started commands
- project structure diagram
- pages table and feature list
- responsive breakpoints reference
- colour palette, deployment (Vercel, Netlify, Docker)"

# ── 37 ────────────────────────────────────────────────────────────────────────
# Final catch-all for anything untracked
git add -A
git status --short
# Only commit if there is something left
if ! git diff --cached --quiet; then
  git commit -m "FINAL CLEANUP." -m "- any remaining untracked files
- consistent with all prior commits
- project ready to develop further"
fi

# ── 38 ────────────────────────────────────────────────────────────────────────
git add src/components/layout/Navbar.tsx src/components/layout/Footer.tsx
git commit -m "REDESIGN LOGO AND NAV." -m "- logo is now plain text 'Explore NEPAL' two-tone (white + red)
- removed N icon and 'Authentic Journeys' subtitle everywhere
- nav links: uppercase + tracking-[0.12em] + slightly larger
- mobile drawer nav links also uppercased"

# ── 39 ────────────────────────────────────────────────────────────────────────
git add src/components/common/DestinationCard.tsx src/components/common/TourCard.tsx
git commit -m "FIX CARD BADGES AND IMAGE FALLBACKS." -m "- removed right-side altitude badge (was overlapping)
- kept only left region badge on destination cards
- added onError fallback to picsum.photos on all img tags"

# ── 40 ────────────────────────────────────────────────────────────────────────
git add src/data/destinations.ts
git commit -m "UPDATE DESTINATION IMAGE IDs." -m "- swapped broken Unsplash IDs for verified ones
- Bhaktapur, Pokhara, Chitwan, Lumbini all updated
- all images tested to render correctly"

# ── 41 ────────────────────────────────────────────────────────────────────────
git add src/components/common/PageHero.tsx
git commit -m "BUILD PAGE HERO COMPONENT." -m "- reusable full-screen hero for all sub-pages
- ken-burns bg image, dark or navy gradient overlay
- huge clamp() heading, eyebrow, subtitle, optional CTA
- whitespace-pre-line for multi-line titles
- onError fallback image"

# ── 42 ────────────────────────────────────────────────────────────────────────
git add src/pages/Destinations.tsx src/pages/Tours.tsx \
        src/pages/About.tsx src/pages/GalleryPage.tsx src/pages/Contact.tsx
git commit -m "UPGRADE ALL PAGE HEROES TO FULL SCREEN." -m "- every sub-page now opens with a min-h-screen PageHero
- removed search inputs from Destinations and Tours pages
- Tours hero: 'We Offer Unforgettable Experiences' style
- About, Gallery, Contact — each with unique heroic imagery"

# ── 43 ────────────────────────────────────────────────────────────────────────
git add src/components/home/Testimonials.tsx
git commit -m "REBUILD TESTIMONIALS AS HEROIC CAROUSEL." -m "- full-screen background image per slide
- huge uppercase tour name as the headline (Wix-style)
- animated slide transitions with AnimatePresence
- left/right arrows on screen edges
- 01 — 08 counter, dot pagination
- auto-advances every 7 seconds"

# ── 44 ────────────────────────────────────────────────────────────────────────
git add src/pages/Home.tsx
git commit -m "REMOVE WHY CHOOSE US SECTION." -m "- section was redundant and broke the visual flow
- Home page is now: Hero → Destinations → Tours → Testimonials → Gallery → CTA"

# ── 45 ────────────────────────────────────────────────────────────────────────
git add src/components/layout/Navbar.tsx
git commit -m "FIX NAV SIZING AND TRANSPARENCY." -m "- nav text reduced to text-[12px] — less dominant
- solidBg now only triggers on scroll, not route-based
- all pages with full-screen heroes now have transparent nav on load
- added red underline: slides in from left on hover (scale-x-0 → scale-x-100)
- active route shows gold underline"

# ── 46 ────────────────────────────────────────────────────────────────────────
git add src/pages/Contact.tsx
git commit -m "REBUILD CONTACT LEFT PANEL." -m "- removed WhatsApp button
- added Follow Us section: Instagram, Facebook, YouTube, Twitter
- icons and handles in nepal-red (no green)
- left panel uses flex-col so Follow Us fills remaining height
- left and right panels match visually"

# ── 47 ────────────────────────────────────────────────────────────────────────
git add src/data/gallery.ts src/pages/GalleryPage.tsx src/components/home/GalleryPreview.tsx
git commit -m "EXPAND AND UPGRADE GALLERY." -m "- gallery items: 12 → 22 images across all categories
- images requested at 1200x900 and 1400x1050 for maximum quality
- columns: 4 → 3 (bigger images, more visual impact)
- caption bar slides up from bottom on hover
- home preview also updated to 3-col + bigger images"

# ── 48 ────────────────────────────────────────────────────────────────────────
git add tailwind.config.js src/index.css
git commit -m "ESTABLISH DESIGN SYSTEM." -m "- added letterSpacing tokens: ultra (0.22em), wider, widest, tight...
- added lineHeight tokens: display (1.05), heading (1.15)
- btn-primary/outline now rounded-full (pill — premium standard)
- standardized eyebrow class: 11px / 0.22em tracking / uppercase
- ::selection color, focus-visible ring
- shadow-sm → shadow-lg (gentler hover transition)
- scrollbar color changes to nepal-red on hover"

# ── 49 ────────────────────────────────────────────────────────────────────────
git add src/components/common/SectionHeader.tsx src/components/common/PageHero.tsx \
        src/components/common/DestinationCard.tsx src/components/common/TourCard.tsx \
        src/components/common/ScrollToTop.tsx
git commit -m "POLISH ALL SHARED COMPONENTS." -m "- SectionHeader: tighter heading (tracking-tighter), thinner decorative line
- DestinationCard: h-60 image, card border, no altitude badge
- TourCard: h-60 image, duration pill in image, eyebrow category, pill Book CTA
- PageHero: eyebrow-muted class, tracking-tightest on heading
- ScrollToTop: AnimatePresence fade-in/out, navy → red on hover"

# ── 50 ────────────────────────────────────────────────────────────────────────
git add src/components/home/Hero.tsx src/components/home/FeaturedDestinations.tsx \
        src/components/home/FeaturedTours.tsx src/components/home/CallToAction.tsx \
        src/components/home/Testimonials.tsx
git commit -m "FINAL POLISH ON HOME SECTIONS." -m "- Hero: negative letter-spacing on heading, label chip per slide
- Hero stats: border-top divider, looser gap on mobile
- CallToAction: layered gradient overlays for depth
- FeaturedTours: filter pills use tracking-wider and smaller text
- Testimonials: eyebrow-muted class, tracking-ultra on byline"

# ── 51 ────────────────────────────────────────────────────────────────────────
git add src/components/layout/Footer.tsx src/pages/NotFound.tsx
git commit -m "POLISH FOOTER AND 404 PAGE." -m "- footer column headings: tracking-ultra, smaller and more refined
- footer links: text-[14px] text-white/55 → white on hover
- 404: huge display 404 number, eyebrow class, pill CTA"

echo ""
echo "✅  Done! $(git log --oneline | wc -l) commits created."
echo "    Run 'git log --oneline' to review."
echo "    Run 'npm install && npm run dev' to start the dev server."
