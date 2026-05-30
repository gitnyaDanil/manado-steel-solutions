import { Link } from "@tanstack/react-router";
import logo from "@/assets/photos/logo.jpg";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
  { to: "/gallery", label: "Gallery" },
] as const;

export function HeaderLight() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Bengkel Lengkoan logo" className="h-11 w-11 rounded-full object-cover" />
          <span className="hidden font-display text-2xl tracking-wider text-primary sm:block">
            Bengkel Lengkoan
          </span>
        </Link>
        <nav className="flex items-center gap-5 md:gap-10">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="font-display text-lg uppercase tracking-widest text-foreground/80 transition-colors hover:text-accent"
              activeProps={{
                className:
                  "font-display text-lg uppercase tracking-widest text-foreground border-b-2 border-accent pb-1",
              }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
