import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { WhatsAppButton } from "../components/WhatsAppButton";

const GA_MEASUREMENT_ID = "G-NQJNCXXG1T";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Halaman tidak ditemukan</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Halaman yang Anda cari tidak tersedia atau telah dipindahkan.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Terjadi kesalahan
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Coba muat ulang halaman atau kembali ke beranda.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Coba lagi
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Beranda
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Bengkel Lengkoan — Bubut, Las, Korter, Crankshaft & Excavator Hidrolik di Manado" },
      {
        name: "description",
        content:
          "Bengkel bubut, las, korter, crankshaft, excavator hidrolik & asphalt sprayer terpercaya di Manado sejak 1970. Jl. Daan Mogot No.47, Tikala.",
      },
      { name: "author", content: "Bengkel Lengkoan" },
      { property: "og:site_name", content: "Bengkel Lengkoan" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://bengkellengkoan.com/" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Bengkel Lengkoan — Bubut, Las, Korter, Crankshaft & Excavator Hidrolik di Manado" },
      { name: "twitter:title", content: "Bengkel Lengkoan — Bubut, Las, Korter, Crankshaft & Excavator Hidrolik di Manado" },
      {
        property: "og:description",
        content: "Bengkel bubut, las, korter, crankshaft, excavator hidrolik & asphalt sprayer terpercaya di Manado sejak 1970. Jl. Daan Mogot No.47, Tikala.",
      },
      {
        name: "twitter:description",
        content: "Bengkel bubut, las, korter, crankshaft, excavator hidrolik & asphalt sprayer terpercaya di Manado sejak 1970. Jl. Daan Mogot No.47, Tikala.",
      },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7eb1a020-79a3-4637-bdf2-683624f1ef95/id-preview-308e1008--dbaa775f-7542-44ed-a635-381344df328d.lovable.app-1780165623520.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7eb1a020-79a3-4637-bdf2-683624f1ef95/id-preview-308e1008--dbaa775f-7542-44ed-a635-381344df328d.lovable.app-1780165623520.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "https://bengkellengkoan.com/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@300;400;500;600;700&family=Barlow+Condensed:wght@400;600&display=swap",
      },
    ],
    scripts: [
      {
        async: true,
        src: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
      },
      {
        children: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `,
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Bengkel Lengkoan",
          description:
            "Bengkel bubut, las, korter, crankshaft, excavator hidrolik & asphalt sprayer di Manado. Melayani perbaikan baja dan komponen mesin sejak 1970.",
          url: "https://bengkellengkoan.com",
          telephone: "+62-811-4349-891",
          image: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7eb1a020-79a3-4637-bdf2-683624f1ef95/id-preview-308e1008--dbaa775f-7542-44ed-a635-381344df328d.lovable.app-1780165623520.png",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Jl. Daan Mogot No.47, Tikala Baru, Kec. Tikala",
            addressLocality: "Manado",
            addressRegion: "Sulawesi Utara",
            postalCode: "95126",
            addressCountry: "ID",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 1.4748,
            longitude: 124.8421,
          },
          openingHours: "Mo-Sa 08:00-17:00",
          priceRange: "Rp",
          foundingDate: "1970",
          sameAs: [
            "https://maps.google.com/?q=Bengkel+Lengkoan+Manado",
          ],
        }),
      },
      {
        // Organization schema — helps Google show logo in Search & Knowledge Panel
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Bengkel Lengkoan",
          url: "https://bengkellengkoan.com",
          logo: "https://bengkellengkoan.com/assets/logo.jpg",
          image: "https://bengkellengkoan.com/assets/logo.jpg",
          telephone: "+628114349891",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Jl. Daan Mogot No.47, Tikala Baru",
            addressLocality: "Manado",
            addressRegion: "Sulawesi Utara",
            postalCode: "95126",
            addressCountry: "ID",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <WhatsAppButton />
    </QueryClientProvider>
  );
}
