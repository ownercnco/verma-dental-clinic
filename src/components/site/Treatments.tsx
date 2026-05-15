import { useState } from "react";
import { Sparkles, Smile, AlignJustify, SunMedium, Stethoscope, Tooth, X, Clock, Activity, Check } from "lucide-react";
import { Reveal } from "./Reveal";

type Treatment = {
  id: string;
  icon: typeof Sparkles;
  title: string;
  short: string;
  bullets: string[];
  duration: string;
  recovery: string;
  result: string;
};

const treatments: Treatment[] = [
  {
    id: "implants",
    icon: Tooth,
    title: "Dental Implants",
    short: "Permanent, natural-feeling tooth replacement using titanium-grade roots.",
    bullets: ["3D-guided placement", "Same-day temporaries available", "Lifetime functional warranty"],
    duration: "2 visits · 60–90 min",
    recovery: "3–5 days mild",
    result: "Looks, feels, and chews like a natural tooth.",
  },
  {
    id: "veneers",
    icon: Sparkles,
    title: "Smile Makeovers · Veneers",
    short: "Hand-crafted porcelain veneers designed for your face — never a 'one smile fits all'.",
    bullets: ["Digital smile preview before bonding", "Minimal-prep technique", "10+ year longevity"],
    duration: "2–3 visits",
    recovery: "None",
    result: "A camera-ready smile that still looks like you.",
  },
  {
    id: "aligners",
    icon: AlignJustify,
    title: "Invisible Aligners",
    short: "Clear, removable aligners that quietly straighten your smile in months, not years.",
    bullets: ["Free 3D simulation", "Average 6–9 month plans", "Remote check-ins between visits"],
    duration: "6–12 months",
    recovery: "None",
    result: "Straight teeth, no metal, no downtime.",
  },
  {
    id: "whitening",
    icon: SunMedium,
    title: "Teeth Whitening",
    short: "Professional whitening that's gentle on enamel and dramatic on results.",
    bullets: ["In-chair or take-home kits", "Sensitivity-safe formulas", "Up to 8 shades brighter"],
    duration: "60 min in-office",
    recovery: "None",
    result: "Visibly brighter smile after a single session.",
  },
  {
    id: "restorative",
    icon: Stethoscope,
    title: "Root Canal & Restorative",
    short: "Modern endodontics that's typically as comfortable as a routine filling.",
    bullets: ["Microscope-guided precision", "Single-visit completion in most cases", "Same-day crowns available"],
    duration: "60–90 min",
    recovery: "1–2 days mild",
    result: "Your natural tooth, saved and pain-free.",
  },
  {
    id: "general",
    icon: Smile,
    title: "General & Preventive",
    short: "Cleanings, exams, and gentle hygiene programs that keep problems from ever starting.",
    bullets: ["Ultrasonic, low-vibration cleanings", "Oral cancer screening included", "Personalized 6-month plans"],
    duration: "45–60 min",
    recovery: "None",
    result: "Healthier mouth, fewer surprises down the road.",
  },
];

export function Treatments() {
  const [active, setActive] = useState<Treatment | null>(null);

  return (
    <section id="treatments" className="py-24 md:py-32 bg-surface/60">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.18em] text-primary font-medium">
                Our Treatments
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 font-display text-3xl md:text-5xl font-medium leading-[1.1] text-balance">
                Comprehensive care, delivered with quiet precision.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <p className="text-muted-foreground max-w-sm text-pretty">
              From routine cleanings to full-mouth reconstruction — every
              treatment plan is built around your timeline, your comfort, and
              your budget.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {treatments.map((t, i) => (
            <Reveal key={t.id} delay={i * 60}>
              <button
                onClick={() => setActive(t)}
                className="group text-left h-full w-full bg-card rounded-3xl ring-soft p-7 hover:shadow-card hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <t.icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                    Learn more →
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-medium">{t.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground text-pretty">{t.short}</p>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          className="fixed inset-0 z-[60] grid place-items-center p-4 bg-foreground/30 backdrop-blur-sm animate-fade-in"
          onClick={() => setActive(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl bg-card rounded-3xl shadow-card ring-soft p-7 md:p-10 animate-scale-in"
          >
            <button
              aria-label="Close"
              onClick={() => setActive(null)}
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full hover:bg-surface"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary">
              <active.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-2xl md:text-3xl font-medium">
              {active.title}
            </h3>
            <p className="mt-3 text-muted-foreground text-pretty">{active.short}</p>

            <ul className="mt-6 space-y-2.5">
              {active.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm">
                  <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 grid grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden ring-soft">
              <div className="bg-card p-4">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" /> Treatment time
                </div>
                <p className="mt-1.5 text-sm font-medium">{active.duration}</p>
              </div>
              <div className="bg-card p-4">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
                  <Activity className="h-3.5 w-3.5" /> Recovery
                </div>
                <p className="mt-1.5 text-sm font-medium">{active.recovery}</p>
              </div>
            </div>

            <p className="mt-5 text-sm text-foreground/80 italic">
              "{active.result}"
            </p>

            <a
              href="#book"
              onClick={() => setActive(null)}
              className="mt-7 inline-flex w-full justify-center items-center rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium"
            >
              Discuss this treatment
            </a>
          </div>
        </div>
      )}
    </section>
  );
}