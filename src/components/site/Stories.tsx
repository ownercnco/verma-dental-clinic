import { Star, Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import p1 from "@/assets/patient-1.jpg";
import p2 from "@/assets/patient-2.jpg";
import p3 from "@/assets/patient-3.jpg";

const stories = [
  {
    img: p1,
    name: "Naomi A.",
    treatment: "Veneers · 2 visits",
    quote: "I avoided dentists for 12 years. Laxmi was the first place that didn't feel like a clinic — it felt like being looked after.",
  },
  {
    img: p2,
    name: "Elena R.",
    treatment: "Invisalign · 8 months",
    quote: "They explained every step. Pricing was clear up front. My smile is straighter than I ever thought possible at 47.",
  },
  {
    img: p3,
    name: "James T.",
    treatment: "Implant · single visit",
    quote: "Genuinely painless. I drove myself home and was back at work the next morning. The team is exceptional.",
  },
];

export function Stories() {
  return (
    <section id="stories" className="py-24 md:py-32 bg-surface/60">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 max-w-5xl">
          <div>
            <Reveal>
              <p className="text-xs uppercase tracking-[0.18em] text-primary font-medium">
                Patient Stories
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 font-display text-3xl md:text-5xl font-medium leading-[1.1] text-balance">
                Trust earned, one smile at a time.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div className="flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">4.9 / 5</span> · 612 Google reviews
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {stories.map((s, i) => (
            <Reveal key={s.name} delay={i * 80}>
              <figure className="bg-card rounded-3xl ring-soft p-7 h-full flex flex-col">
                <Quote className="h-8 w-8 text-primary/40" />
                <blockquote className="mt-4 text-foreground/85 text-pretty leading-relaxed">
                  "{s.quote}"
                </blockquote>
                <figcaption className="mt-6 pt-6 border-t border-border-soft flex items-center gap-3">
                  <img
                    src={s.img}
                    alt={s.name}
                    width={48}
                    height={48}
                    loading="lazy"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium">{s.name}</p>
                    <p className="text-xs text-muted-foreground">{s.treatment}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}