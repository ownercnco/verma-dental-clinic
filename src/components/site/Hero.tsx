import { Phone, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-clinic.jpg";

export function Hero() {
  return (
    <section id="top" className="relative pt-28 md:pt-32 pb-16 md:pb-24 gradient-soft overflow-hidden">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6 max-w-xl">
            {/* <div className="inline-flex items-center gap-2 rounded-full bg-primary-soft text-primary px-3 py-1.5 text-xs font-medium tracking-wide">
              <Sparkles className="h-3.5 w-3.5" />
              Welcoming new patients · 2026
            </div> */}
            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-tight text-balance">
              Exceptional dental care that feels{" "}
              <span className="italic text-primary">calm</span> and confident.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground text-pretty">
              Advanced cosmetic and general dentistry in a serene, anxiety-free
              environment — designed around how you want to feel before, during,
              and after every visit.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#book"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium shadow-card hover:shadow-glow transition-all"
              >
                Book Your Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="tel:07906702265"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-6 py-3.5 text-sm font-medium hover:bg-surface transition"
              >
                <Phone className="h-4 w-4 text-primary" />
                Emergency · 07906702265
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                { v: "15+", l: "Years of care" },
                { v: "5,000+", l: "Happy smiles" },
                { v: "4.9★", l: "Google rating" },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="font-display text-2xl md:text-3xl text-foreground">{s.v}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[5/6] sm:aspect-[4/3] lg:aspect-[5/6] overflow-hidden rounded-3xl ring-soft shadow-card">
              <img
                src={heroImg}
                alt="Patient smiling in a bright, modern Laxmi Dental clinic"
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
            </div>

            {/* Floating trust card */}
            {/* <div className="absolute -bottom-6 -left-4 sm:left-6 bg-card rounded-2xl shadow-card ring-soft p-4 max-w-[260px] hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-primary-soft text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Sterilization</p>
                  <p className="text-sm font-medium">Hospital-grade · ISO 13485</p>
                </div>
              </div>
            </div> */}

            <div className="absolute -top-4 right-2 sm:-right-4 bg-card rounded-2xl shadow-card ring-soft p-4 max-w-[240px] hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full ring-2 ring-card bg-gradient-to-br from-primary-soft to-gold-soft"
                    />
                  ))}
                </div>
                <div className="text-xs">
                  <p className="font-medium text-foreground">238 patients</p>
                  <p className="text-muted-foreground">booked this month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}