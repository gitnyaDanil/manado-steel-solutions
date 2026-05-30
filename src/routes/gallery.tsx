import { createFileRoute } from "@tanstack/react-router";
import { HeaderLight } from "@/components/HeaderLight";
import { Footer } from "@/components/Footer";

import kekerasan from "@/assets/photos/uji-kekerasan.png";
import micrometer from "@/assets/photos/uji-micrometer-1.png";
import roughness from "@/assets/photos/uji-roughness.jpg";

import bubut1 from "@/assets/photos/bubut-1.png";
import bubut2 from "@/assets/photos/bubut-2.png";
import bubut3 from "@/assets/photos/bubut-3.jpg";
import bubut4 from "@/assets/photos/bubut-4.jpg";
import korter1 from "@/assets/photos/korter-1.jpg";
import korter2 from "@/assets/photos/korter-2.jpg";
import crank1 from "@/assets/photos/crankshaft-1.jpg";
import crank2 from "@/assets/photos/crankshaft-2.jpg";
import las1 from "@/assets/photos/las-1.jpg";
import las2 from "@/assets/photos/las-2.jpg";
import sp1 from "@/assets/photos/sprayer-1.jpg";
import sp2 from "@/assets/photos/sprayer-2.jpg";
import sp3 from "@/assets/photos/sprayer-3.jpg";
import sp4 from "@/assets/photos/sprayer-4.jpg";
import sp5 from "@/assets/photos/sprayer-5.jpg";
import ex1 from "@/assets/photos/excavator-1.jpg";
import ex2 from "@/assets/photos/excavator-2.jpg";
import ex3 from "@/assets/photos/excavator-3.jpg";
import ex4 from "@/assets/photos/excavator-4.jpg";
import front from "@/assets/photos/workshop-front.jpg";
import micrometer2 from "@/assets/photos/uji-micrometer-2.png";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Galeri & Uji Kualitas — Bengkel Lengkoan" },
      {
        name: "description",
        content:
          "Galeri pekerjaan dan tiga pengukuran presisi standar industri: uji kekerasan, micrometer, dan kekasaran (roughness).",
      },
      { property: "og:title", content: "Galeri Bengkel Lengkoan" },
      { property: "og:description", content: "Pengukuran presisi sesuai standar industri." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const tests = [
  {
    title: "Uji Kekerasan",
    img: kekerasan,
    desc: "Hardness test untuk mengukur tingkat kekerasan material logam.",
  },
  {
    title: "Micrometer",
    img: micrometer,
    desc: "Pengukuran panjang dan diameter dengan presisi mikrometer.",
  },
  {
    title: "Uji Kemulusan",
    img: roughness,
    desc: "Roughness test menggunakan profilometer untuk kehalusan permukaan.",
  },
];

const allPhotos = [
  bubut1, bubut2, bubut3, bubut4,
  korter1, korter2,
  crank1, crank2,
  las1, las2,
  sp1, sp2, sp3, sp4, sp5,
  ex1, ex2, ex3, ex4,
  front, micrometer2,
];

function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderLight />

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="mb-14 text-center">
          <h1 className="font-display text-6xl text-primary md:text-7xl">Uji Kualitas</h1>
          <p className="mt-4 text-muted-foreground">Pengukuran presisi sesuai standar industri.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {tests.map((t) => (
            <article key={t.title} className="overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={t.img} alt={t.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h2 className="font-display text-2xl tracking-wide text-primary">{t.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <h2 className="mb-10 text-center font-display text-4xl text-primary md:text-5xl">Galeri Pekerjaan</h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {allPhotos.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Dokumentasi pekerjaan ${i + 1}`}
                className="aspect-square w-full rounded-xl object-cover ring-1 ring-border transition-transform duration-300 hover:scale-[1.02]"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
