import { createFileRoute } from "@tanstack/react-router";
import { HeaderLight } from "@/components/HeaderLight";
import { Footer } from "@/components/Footer";
import front from "@/assets/photos/workshop-front.jpg";
import { contactPhoneDisplay, contactPhoneTel, whatsappUrl } from "@/lib/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Hubungi Kami — Bengkel Lengkoan" },
      {
        name: "description",
        content:
          "Hubungi Bengkel Lengkoan di Jl. Daan Mogot No.47, Tikala Baru, Manado. Telepon 0811-4349-891.",
      },
      { property: "og:title", content: "Hubungi Bengkel Lengkoan" },
      { property: "og:description", content: "Telepon, alamat, dan lokasi di Google Maps." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderLight />

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h1 className="font-display text-6xl text-primary md:text-7xl">Hubungi Kami</h1>
            <p className="mt-6 max-w-md text-muted-foreground">
              Untuk pertanyaan mengenai jasa perbaikan baja kami, hubungi kami di{" "}
              <a href={`tel:${contactPhoneTel}`} className="font-medium text-accent hover:underline">
                {contactPhoneDisplay}
              </a>{" "}
              atau kunjungi bengkel kami di Manado.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#25D366] px-6 py-3 font-display text-sm uppercase tracking-widest text-white transition-colors hover:bg-[#1ebe5d]"
              >
                Chat WhatsApp
              </a>
              <a
                href={`tel:${contactPhoneTel}`}
                className="rounded-full border border-input px-6 py-3 font-display text-sm uppercase tracking-widest text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Telepon
              </a>
            </div>

            <dl className="mt-10 space-y-6 text-sm">
              <div>
                <dt className="font-display text-lg uppercase tracking-widest text-accent">Alamat</dt>
                <dd className="mt-1 text-foreground/80">
                  Jl. Daan Mogot No.47, Tikala Baru, Kec. Tikala,<br />
                  Kota Manado, Sulawesi Utara 95126
                </dd>
              </div>
              <div>
                <dt className="font-display text-lg uppercase tracking-widest text-accent">Telepon / WhatsApp</dt>
                <dd className="mt-1 text-foreground/80">{contactPhoneDisplay}</dd>
              </div>
              <div>
                <dt className="font-display text-lg uppercase tracking-widest text-accent">Jam Operasional</dt>
                <dd className="mt-1 text-foreground/80">Senin – Sabtu, 08.00 – 17.00 WITA</dd>
              </div>
            </dl>

            <div className="mt-10 overflow-hidden rounded-2xl ring-1 ring-border">
              <img src={front} alt="Tampak depan bengkel" className="aspect-[16/9] w-full object-cover" />
            </div>
          </div>

          <div>
            <div className="rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border">
              <h2 className="font-display text-4xl text-primary">Kontak Cepat</h2>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                Untuk respons tercepat, hubungi Bengkel Lengkoan langsung melalui WhatsApp atau telepon.
              </p>
              <div className="mt-8 space-y-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center rounded-full bg-[#25D366] px-8 py-3 font-display text-base uppercase tracking-widest text-white transition-colors hover:bg-[#1ebe5d]"
                >
                  Chat WhatsApp
                </a>
                <a
                  href={`tel:${contactPhoneTel}`}
                  className="flex w-full items-center justify-center rounded-full border border-input bg-background px-8 py-3 font-display text-base uppercase tracking-widest text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  Telepon {contactPhoneDisplay}
                </a>
              </div>
              <div className="mt-8 border-t border-border pt-6">
                <p className="font-display text-sm uppercase tracking-widest text-accent">Jam Operasional</p>
                <p className="mt-2 text-sm text-muted-foreground">Senin - Sabtu, 08.00 - 17.00 WITA</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-2xl ring-1 ring-border">
          <iframe
            title="Lokasi Bengkel Lengkoan"
            src="https://www.google.com/maps?q=Jl.+Daan+Mogot+No.47,+Tikala+Baru,+Kec.+Tikala,+Kota+Manado,+Sulawesi+Utara&output=embed"
            className="h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
