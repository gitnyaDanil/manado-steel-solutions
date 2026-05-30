import { createFileRoute } from "@tanstack/react-router";
import { HeaderLight } from "@/components/HeaderLight";
import { Footer } from "@/components/Footer";
import bubut from "@/assets/photos/bubut-3.jpg";
import bubut2 from "@/assets/photos/bubut-4.jpg";
import korter from "@/assets/photos/korter-1.jpg";
import korter2 from "@/assets/photos/korter-2.jpg";
import crankshaft from "@/assets/photos/crankshaft-1.jpg";
import crankshaft2 from "@/assets/photos/crankshaft-2.jpg";
import las from "@/assets/photos/las-1.jpg";
import las2 from "@/assets/photos/las-2.jpg";
import sprayer from "@/assets/photos/sprayer-2.jpg";
import sprayer2 from "@/assets/photos/sprayer-4.jpg";
import excavator from "@/assets/photos/excavator-1.jpg";
import excavator2 from "@/assets/photos/excavator-3.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Layanan — Bengkel Lengkoan" },
      {
        name: "description",
        content: "Jasa bubut, las, korter, crankshaft, asphalt sprayer, dan perbaikan excavator hidrolik di Manado.",
      },
      { property: "og:title", content: "Layanan Bengkel Lengkoan" },
      { property: "og:description", content: "Tersedia jasa ahli untuk berbagai perbaikan kerusakan besi." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "Bubut",
    images: [bubut, bubut2],
    desc: "Pengerjaan presisi pada poros, roda gigi, baut, dan komponen mesin lainnya menggunakan mesin bubut berdaya tinggi.",
  },
  {
    title: "Korter",
    images: [korter, korter2],
    desc: "Korter blok mesin dan boring silinder untuk mengembalikan ukuran standar dan kerataan permukaan.",
  },
  {
    title: "Crankshaft",
    images: [crankshaft, crankshaft2],
    desc: "Perbaikan, pengukuran, dan reparasi poros engkol (crankshaft) mesin diesel maupun bensin.",
  },
  {
    title: "Las / Pengelasan",
    images: [las, las2],
    desc: "Pengelasan struktur baja, perbaikan komponen berat, dan fabrikasi sesuai kebutuhan.",
  },
  {
    title: "Asphalt Sprayer",
    images: [sprayer, sprayer2],
    desc: "Penjualan unit asphalt sprayer serta perawatan dan perbaikan komponennya.",
  },
  {
    title: "Excavator Hidrolik",
    images: [excavator, excavator2],
    desc: "Perbaikan komponen hidrolik alat berat seperti silinder, boom, dan arm excavator.",
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderLight />
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="mb-16 text-center">
          <h1 className="font-display text-6xl text-primary md:text-7xl">Steel Repair</h1>
          <p className="mt-4 text-muted-foreground">Tersedia jasa ahli untuk berbagai perbaikan kerusakan besi.</p>
        </div>

        <div className="space-y-20">
          {services.map((s, i) => (
            <article
              key={s.title}
              className={`grid items-center gap-8 md:grid-cols-2 ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="grid grid-cols-2 gap-3">
                {s.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${s.title} ${idx + 1}`}
                    className="aspect-[4/3] w-full rounded-2xl object-cover shadow-sm ring-1 ring-border"
                  />
                ))}
              </div>
              <div>
                <h2 className="font-display text-4xl tracking-wide text-primary md:text-5xl">{s.title}</h2>
                <p className="mt-4 max-w-prose text-base text-muted-foreground md:text-lg">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
