# Plan: Build Bengkel Lengkoan website with real assets

The uploaded `Asset.zip` contains both **real photos** of the workshop and **design reference screenshots** (Landing, Services, Contact, Gallery pages). I'll use the real photos throughout and follow the reference layouts.

## 1. Import real assets

Copy from `user-uploads://Asset.zip` into `src/assets/photos/`:

- **Hero / front view**: `2015-11-30, Tampak Depan.jpg`, `WhatsApp...16.41.10.jpg`
- **Logo**: `Logo pecah.jpg` (will sharpen via CSS; ask later if user wants a clean SVG)
- **Bubut**: Bubut 1–4
- **Korter**: Korter 1–2
- **Crankshaft**: Crankshaft 1–2
- **Las / Pengelasan**: Pengelasan 1, `WhatsApp...16.29.00.jpg`
- **Asphalt Sprayer**: Sprayer 1–4 (from `New folder/` and root)
- **Excavator Hidrolik**: 1–4 (additional service)
- **Uji kualitas**: `Uji kekerasan...152250.png` (hardness), `Screenshot 152347 / 152745` (micrometer), `Uji Kemulusan...16.27.55.jpg` (roughness)
- **Struktur perusahaan**: `Bengkel Bubut Lengkoan Struktur Perusahaan.png`
- **Maps**: `SS Google Maps.png` (use as fallback; primary will be live Google Maps embed)

Delete the previously AI-generated images in `src/assets/` (hero-workshop, crankshaft, lathe-bubut, welding-las, korter-boring, asphalt-sprayer, precision-micrometer).

## 2. Routes (matching reference screenshots)

- `/` — **Landing**: full-bleed hero with `Tampak Depan` photo, brand "Bengkel Lengkoan", tagline "Bengkel terpercaya untuk jasa bubut, las, korter, and bor di Manado, Sulawesi Utara. Sejak 1970.", CTAs Learn More + Contact
- `/services` — **Steel Repair** grid: Bubut, Korter, Crankshaft, Las, Asphalt Sprayer, Excavator Hidrolik (each card uses real photo + short Bahasa Indonesia description)
- `/gallery` — **Uji Kualitas** section (3 precision tests with real photos) + photo grid of all workshop images
- `/contact` — **Hubungi Kami**: contact form (visual only, no backend), phone `0811-4349-891`, full address, Google Maps embed, workshop photo

## 3. Header / Footer

- Header: logo (left) + nav Home / Services / Contact / Gallery (right), underline on active link — matches reference exactly
- Footer: address, phone, hours, established 1970

## 4. Design system

Keep existing Steel & Spark tokens already in `src/styles.css` (Primary `#2d3748`, Accent `#e85d3a`, Bebas Neue headings, Barlow body). Hero overlay darkens the photo for white text readability.

## 5. SEO

Per-route `head()` with unique title + description in Bahasa Indonesia, og:image set to that route's hero photo.

## Technical notes

- Pages live under `src/routes/` (TanStack Start file routing)
- Photos imported as ES modules from `src/assets/photos/`
- Filenames with spaces/commas will be renamed to kebab-case on copy (e.g. `tampak-depan-2015.jpg`)
- Contact form is presentational only — submitting shows a toast. Wiring it to email/Lovable Cloud can be a follow-up
- `Logo pecah.jpg` is low-res; I'll display it small and crisp, but recommend you upload a higher-res or SVG version later
