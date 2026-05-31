# Bengkel Lengkoan Website

A production website for **Bengkel Lengkoan**, a long-running steel repair and machining workshop in Manado, Indonesia. The site presents the workshop's services, project gallery, quality testing process, contact details, and location in a clean responsive interface.

Live site: [bengkellengkoan.com](https://bengkellengkoan.com)  
Repository: [gitnyaDanil/manado-steel-solutions](https://github.com/gitnyaDanil/manado-steel-solutions)

---

## Tech Stack

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![TanStack](https://img.shields.io/badge/TanStack_Start-FF4154?style=flat&logo=reactrouter&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat&logo=netlify&logoColor=white)

---

## Features

- Responsive product/service website for desktop and mobile
- Server-rendered React app using **TanStack Start**
- File-based routing with pages for home, services, gallery, and contact
- SEO metadata and Open Graph tags for better sharing previews
- Service catalog for bubut, las, korter, crankshaft, asphalt sprayer, and excavator hydraulic repair
- Gallery page with workshop documentation and quality testing photos
- Contact page with address, phone/WhatsApp information, and embedded Google Maps
- Netlify deployment configured for TanStack Start SSR

---

## Pages

| Page | Description |
| --- | --- |
| `/` | Landing page with hero section, service preview, and trust indicators |
| `/services` | Detailed list of workshop services with supporting photos |
| `/gallery` | Work gallery and quality test documentation |
| `/contact` | Contact form, workshop details, and map location |

---

## Deployment Notes

This project uses **TanStack Start**, so it is not deployed as a simple static Vite site. The Netlify setup uses:

```toml
[build]
  command = "vite build"
  publish = "dist/client"
```

The Vite config also includes the Netlify TanStack Start plugin:

```ts
import netlify from "@netlify/vite-plugin-tanstack-start";
```

This lets Netlify handle the server-side rendering output correctly while serving client assets from `dist/client`.

---

## Local Development

Install dependencies:

```bash
bun install
```

Start the development server:

```bash
bun run dev
```

Build for production:

```bash
bun run build
```

---

## Project Context

This project was built as a real business website for a local workshop. The focus was on turning workshop services, photos, and location information into a usable online presence that customers can open from search, mobile, or direct domain access.

