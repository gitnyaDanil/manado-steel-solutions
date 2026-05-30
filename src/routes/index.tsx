import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import heroImg from "@/assets/photos/tampak-depan.jpg";
import bubutImg from "@/assets/photos/bubut-3.jpg";
import lasImg from "@/assets/photos/las-1.jpg";
import korterImg from "@/assets/photos/korter-1.jpg";
import sprayerImg from "@/assets/photos/sprayer-2.jpg";
import crankshaftImg from "@/assets/photos/crankshaft-1.jpg";
import excavatorImg from "@/assets/photos/excavator-1.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bengkel Lengkoan — Bubut, Las, Korter & Bor di Manado" },
      {
        name: "description",
        content:
          "Bengkel terpercaya untuk jasa bubut, las, korter, dan bor di Manado, Sulawesi Utara. Sejak 1970.",
      },
      { property: "og:title", content: "Bengkel Lengkoan — Sejak 1970" },
      { property: "og:description", content: "Jasa bubut, las, korter, dan bor terpercaya di Manado." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  { title: "Bubut", img: bubutImg, desc: "Pengerjaan presisi pada poros, roda gigi, dan komponen mesin." },
  { title: "Las", img: lasImg, desc: "Pengelasan struktur baja dan perbaikan komponen berat." },
  { title: "Korter", img: korterImg, desc: "Korter blok mesin & boring silinder dengan akurasi tinggi." },
  { title: "Crankshaft", img: crankshaftImg, desc: "Perbaikan dan reparasi crankshaft mesin diesel & bensin." },
  { title: "Asphalt Sprayer", img: sprayerImg, desc: "Penjualan & perawatan unit asphalt sprayer." },
  { title: "Excavator Hidrolik", img: excavatorImg, desc: "Perbaikan komponen hidrolik alat berat." },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-[92vh] min-h-[600px] w-full overflow-hidden">
        <img src={heroImg} alt="Tampak depan Bengkel Lengkoan" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center">
          <span className="font-display text-sm uppercase tracking-[0.4em] text-accent">Sejak 1970</span>
          <h1 className="mt-4 font-display text-6xl leading-none text-white drop-shadow-2xl md:text-8xl lg:text-9xl">
            Bengkel Lengkoan
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
            Bengkel terpercaya untuk jasa <span className="text-accent">bubut, las, korter, dan bor</span> di Manado, Sulawesi Utara.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/services"
              className="rounded-full border-2 border-white/70 px-8 py-3 font-display text-base uppercase tracking-widest text-white transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
            >
              Learn More
            </Link>
            <Link
              to="/contact"
              className="rounded-full bg-accent px-8 py-3 font-display text-base uppercase tracking-widest text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="mb-16 text-center">
          <h2 className="font-display text-5xl text-primary md:text-6xl">Steel Repair</h2>
          <p className="mt-4 text-muted-foreground">Tersedia jasa ahli untuk berbagai perbaikan kerusakan besi.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="group overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl tracking-wide text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/services" className="font-display text-lg uppercase tracking-widest text-accent hover:underline">
            Lihat semua layanan →
          </Link>
        </div>
      </section>

      {/* Trust band */}
      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 text-center md:grid-cols-3 md:px-10">
          <div>
            <p className="font-display text-6xl text-accent">50+</p>
            <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">Tahun Pengalaman</p>
          </div>
          <div>
            <p className="font-display text-6xl text-accent">3</p>
            <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">Uji Presisi Standar Industri</p>
          </div>
          <div>
            <p className="font-display text-6xl text-accent">1970</p>
            <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">Berdiri di Manado</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
