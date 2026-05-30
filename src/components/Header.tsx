import { Link } from "@tanstack/react-router";
import logo from "@/assets/photos/logo.jpg";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
  { to: "/gallery", label: "Gallery" },
] as const;

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Bengkel Lengkoan logo"
            className="h-12 w-12 rounded-full object-cover ring-2 ring-white/40"
          />
          <span className="hidden font-display text-2xl tracking-wider text-white drop-shadow sm:block">
            Bengkel Lengkoan
          </span>
        </Link>
        <nav className="flex items-center gap-6 md:gap-10">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="font-display text-lg uppercase tracking-widest text-white/90 transition-colors hover:text-accent"
              activeProps={{
                className:
                  "font-display text-lg uppercase tracking-widest text-white border-b-2 border-accent pb-1",
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
