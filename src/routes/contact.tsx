import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { HeaderLight } from "@/components/HeaderLight";
import { Footer } from "@/components/Footer";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
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
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Terima kasih! Pesan Anda telah terkirim.");
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 600);
  }

  return (
    <div className="min-h-screen bg-background">
      <HeaderLight />
      <Toaster />

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
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border"
            >
              <Field label="Nama" name="name" placeholder="Nama lengkap Anda" required />
              <Field label="Email" name="email" type="email" placeholder="email@contoh.com" required />
              <Field label="Telepon (opsional)" name="phone" type="tel" placeholder="08xx-xxxx-xxxx" />
              <div className="mb-5">
                <label className="mb-1 block font-display text-sm uppercase tracking-widest text-primary">
                  Pesan*
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Ceritakan kebutuhan perbaikan Anda"
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full bg-accent px-8 py-3 font-display text-base uppercase tracking-widest text-accent-foreground transition-colors hover:bg-accent/90 disabled:opacity-60"
              >
                {submitting ? "Mengirim..." : "Kirim Pesan"}
              </button>
            </form>
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

function Field({
  label, name, type = "text", placeholder, required,
}: {
  label: string; name: string; type?: string; placeholder?: string; required?: boolean;
}) {
  return (
    <div className="mb-5">
      <label className="mb-1 block font-display text-sm uppercase tracking-widest text-primary">
        {label}{required ? "*" : ""}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
      />
    </div>
  );
}
