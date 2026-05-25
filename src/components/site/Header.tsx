import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "#treatments", label: "Treatments" },
  { href: "#technology", label: "Technology" },
  { href: "#doctors", label: "Doctors" },
  { href: "#results", label: "Results" },
  { href: "#stories", label: "Stories" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 md:h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground font-display text-base font-semibold">
            L
          </span>
          <span className="font-display text-lg md:text-xl font-medium tracking-tight">
            Laxmi <span className="text-muted-foreground">Dental Clinic</span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-foreground/75 hover:text-foreground underline-grow"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+18005558626"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" /> 07906702265
          </a>
          <a
            href="#book"
            className="hidden sm:inline-flex items-center rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium shadow-soft hover:opacity-95 transition"
          >
            Book Consultation
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid h-11 w-11 place-items-center rounded-full border border-border bg-background/70"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border-soft bg-background/95 backdrop-blur-xl animate-fade-in">
          <nav className="container-page py-6 grid gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-foreground/85 border-b border-border-soft last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex justify-center rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium"
            >
              Book Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}