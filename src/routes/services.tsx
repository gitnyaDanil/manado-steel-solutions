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
      { title: "Layanan — Bengkel Lengkoan | Bubut, Las, Korter, Crankshaft, Excavator, Asphalt Sprayer Manado" },
      {
        name: "description",
        content:
          "Bengkel bubut, las, korter, crankshaft, excavator hidrolik & asphalt sprayer terpercaya di Manado sejak 1970. Jl. Daan Mogot No.47, Tikala.",
      },
      { property: "og:title", content: "Layanan Bengkel Lengkoan — Bubut, Las, Korter & Lebih" },
      {
        property: "og:description",
        content:
          "Bengkel bubut, las, korter, crankshaft, excavator hidrolik & asphalt sprayer terpercaya di Manado sejak 1970.",
      },
      { property: "og:url", content: "https://bengkellengkoan.com/services" },
    ],
    links: [
      { rel: "canonical", href: "https://bengkellengkoan.com/services" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoRepair",
          name: "Bengkel Lengkoan",
          areaServed: "Manado",
          address: "Jl. Daan Mogot No.47, Tikala Baru, Kota Manado, Sulawesi Utara",
          makesOffer: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bubut" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Las / Pengelasan" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Korter Mesin" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Perbaikan Crankshaft" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Perbaikan Excavator Hidrolik" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Asphalt Sprayer" } },
          ],
        }),
      },
    ],
  }),
  component: ServicesPage,
});

const services: { title: string; id: string; images: string[]; desc: string; detail: string }[] = [
  {
    title: "Bubut",
    id: "bubut",
    images: [bubut, bubut2],
    desc: "Pengerjaan presisi pada poros, roda gigi, baut, dan komponen mesin lainnya menggunakan mesin bubut berdaya tinggi di Manado.",
    detail:
      "Layanan ini umum dibutuhkan untuk perbaikan mesin kendaraan, alat berat, dan mesin industri yang ausnya komponen berputar. " +
      "Kami mengerjakan bubut silinder, bubut dalam, dan pembubutan ulir sesuai spesifikasi. " +
      "Cocok untuk bengkel, kontraktor, dan industri di Manado dan sekitar Sulawesi Utara.",
  },
  {
    title: "Korter Mesin",
    id: "korter",
    images: [korter, korter2],
    desc: "Korter blok mesin dan boring silinder di Manado untuk mengembalikan ukuran standar dan kerataan permukaan.",
    detail:
      "Silinder yang sudah aus atau baret menyebabkan kompresi bocor dan mesin boros oli — korter adalah solusinya. " +
      "Proses ini menghaluskan dinding silinder kembali ke toleransi pabrik menggunakan mesin boring presisi. " +
      "Kami menangani mesin diesel dan bensin untuk kendaraan ringan maupun alat berat di Manado.",
  },
  {
    title: "Crankshaft",
    id: "crankshaft",
    images: [crankshaft, crankshaft2],
    desc: "Perbaikan, pengukuran, dan reparasi poros engkol (crankshaft) mesin diesel maupun bensin di Manado, Sulawesi Utara.",
    detail:
      "Crankshaft yang bengkok atau aus pada journal-nya menyebabkan getaran berlebih dan kerusakan bantalan. " +
      "Kami melakukan pengukuran presisi dengan micrometer, pelurusan, dan penggerindaan journal sesuai standar undersize. " +
      "Layanan ini tersedia untuk mesin truk, bus, alat berat, dan kendaraan pribadi di Manado.",
  },
  {
    title: "Las / Pengelasan",
    id: "las",
    images: [las, las2],
    desc: "Pengelasan struktur baja, perbaikan komponen berat, dan fabrikasi sesuai kebutuhan di Manado.",
    detail:
      "Kami mengerjakan las MIG, las listrik, dan las argon untuk berbagai kebutuhan industri dan konstruksi. " +
      "Termasuk pengelasan rangka alat berat, perbaikan chassis, fabrikasi bracket, dan sambungan pipa baja. " +
      "Hasil las diperiksa kekuatan sambungannya sebelum diserahkan ke pelanggan.",
  },
  {
    title: "Asphalt Sprayer",
    id: "asphalt-sprayer",
    images: [sprayer, sprayer2],
    desc: "Penjualan unit asphalt sprayer serta perawatan dan perbaikan komponennya untuk proyek jalan di Sulawesi Utara.",
    detail:
      "Unit asphalt sprayer kami digunakan untuk proyek pengerasan jalan, patching, dan pemeliharaan jalan di Sulawesi Utara. " +
      "Kami juga melayani servis rutin, penggantian pompa, selang, dan nozzle sprayer. " +
      "Tersedia unit siap pakai untuk kontraktor dan pemerintah daerah di wilayah Manado dan sekitarnya.",
  },
  {
    title: "Excavator Hidrolik",
    id: "excavator-hidrolik",
    images: [excavator, excavator2],
    desc: "Perbaikan komponen hidrolik alat berat seperti silinder, boom, dan arm excavator di Manado dan sekitarnya.",
    detail:
      "Kebocoran hidrolik pada excavator, bulldozer, atau loader menyebabkan downtime yang mahal di lapangan. " +
      "Kami memperbaiki silinder hidrolik, mengganti seal kit, dan memperbaiki kerusakan pada boom, arm, dan bucket cylinder. " +
      "Layanan tersedia untuk semua merek alat berat umum yang beroperasi di Sulawesi Utara.",
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
                <h2 id={s.id} className="font-display text-4xl tracking-wide text-primary md:text-5xl">{s.title}</h2>
                <p className="mt-4 max-w-prose text-base text-muted-foreground md:text-lg">{s.desc}</p>
                <p className="mt-3 max-w-prose text-sm text-muted-foreground">{s.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
