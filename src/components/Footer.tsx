export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3 md:px-10">
        <div>
          <h3 className="font-display text-2xl tracking-wider">Bengkel Lengkoan</h3>
          <p className="mt-2 text-sm text-primary-foreground/80">
            Bengkel bubut, las, korter & bor terpercaya di Manado. Melayani sejak 1970.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg uppercase tracking-widest text-accent">Alamat</h4>
          <p className="mt-2 text-sm text-primary-foreground/80">
            Jl. Daan Mogot No.47, Tikala Baru, Kec. Tikala,<br />
            Kota Manado, Sulawesi Utara 95126
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg uppercase tracking-widest text-accent">Kontak</h4>
          <p className="mt-2 text-sm text-primary-foreground/80">
            Telepon / WA: <a className="hover:text-accent" href="tel:+6281143498910">0811-4349-891</a>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Bengkel Lengkoan. Semua hak dilindungi.
      </div>
    </footer>
  );
}
