import { Reveal } from "./Reveal";
import { Phone, Calendar, Mail } from "lucide-react";

export function CTA() {
  return (
    <section id="book" className="py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-foreground text-background p-8 md:p-16 ring-soft shadow-card">
            <div
              aria-hidden
              className="absolute -top-24 -right-24 h-80 w-80 rounded-full"
              style={{
                background:
                  "radial-gradient(closest-side, color-mix(in oklab, var(--primary) 60%, transparent), transparent)",
              }}
            />
            <div
              aria-hidden
              className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full"
              style={{
                background:
                  "radial-gradient(closest-side, color-mix(in oklab, var(--gold) 40%, transparent), transparent)",
              }}
            />

            <div className="relative grid lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-7">
                <p className="text-xs uppercase tracking-[0.18em] text-background/60">
                  Begin Your Visit
                </p>
                <h2 className="mt-4 font-display text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.05] text-balance">
                  Your most confident smile starts with a single, calm conversation.
                </h2>
                <p className="mt-6 text-background/75 text-lg max-w-lg text-pretty">
                  Book a complimentary 30-minute consultation. No pressure, no
                  hidden fees — just a clear plan for the smile you've been
                  thinking about.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-background text-foreground px-6 py-3.5 text-sm font-medium hover:opacity-95 transition"
                  >
                    <Calendar className="h-4 w-4" />
                    Schedule consultation
                  </a>
                  <a
                    href="tel:+18005558626"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-background/25 text-background px-6 py-3.5 text-sm font-medium hover:bg-background/10 transition"
                  >
                    <Phone className="h-4 w-4" />
                    (800) 555-LUMI
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 lg:pl-8 lg:border-l border-background/15 grid gap-5 text-sm">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-background/70 mt-0.5" />
                  <div>
                    <p className="text-background/60 uppercase text-[10px] tracking-wider">Hours</p>
                    <p className="mt-1">Mon–Fri · 8:00 — 19:00</p>
                    <p>Sat · 9:00 — 14:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-background/70 mt-0.5" />
                  <div>
                    <p className="text-background/60 uppercase text-[10px] tracking-wider">24/7 Emergency</p>
                    <p className="mt-1">(800) 555-LUMI</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-background/70 mt-0.5" />
                  <div>
                    <p className="text-background/60 uppercase text-[10px] tracking-wider">Email</p>
                    <p className="mt-1">care@luminadental.co</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}