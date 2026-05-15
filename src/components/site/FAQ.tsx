import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";

const faqs = [
  { q: "Will the treatment hurt?", a: "Modern dentistry has changed dramatically. We use micro-anesthesia, gentle lasers, and sedation options when needed. The vast majority of our patients describe their visits as 'surprisingly comfortable.'" },
  { q: "What if I have severe dental anxiety?", a: "You're not alone — roughly 1 in 3 of our patients tells us they were anxious. We offer pre-visit consultations with no instruments involved, calming sedation options, and a 'stop signal' you can use any time during treatment." },
  { q: "How long is recovery for common procedures?", a: "Cleanings and whitening: zero downtime. Fillings and crowns: usually same-day return to normal. Implants and surgical treatments: 3–7 days of mild soreness. We give you a precise timeline before you commit." },
  { q: "How transparent is your pricing?", a: "Every treatment plan comes with a written, itemized quote — no surprises. We accept most major insurance plans and offer 0% financing for plans over $1,000." },
  { q: "Do you see emergencies?", a: "Yes. Same-day emergency slots are reserved every weekday, and we have an after-hours line for active patients. Call (800) 555-LUMI any time." },
  { q: "How often should I come in?", a: "Most patients do best with a cleaning and exam every six months. We may recommend a different cadence based on your individual risk profile." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 md:py-32 bg-surface/60">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.18em] text-primary font-medium">
                Common Questions
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 font-display text-3xl md:text-5xl font-medium leading-[1.1] text-balance">
                Answered with honesty.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 text-muted-foreground text-pretty">
                Don't see your question? Call or message us — a real person on
                our care team will get back within the hour during business hours.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <ul className="divide-y divide-border-soft border-y border-border-soft">
              {faqs.map((f, i) => (
                <li key={f.q}>
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                    className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                  >
                    <span className="font-display text-lg md:text-xl font-medium text-pretty">
                      {f.q}
                    </span>
                    <span
                      className={`grid h-9 w-9 flex-shrink-0 place-items-center rounded-full border border-border transition-transform ${
                        open === i ? "rotate-45 bg-primary text-primary-foreground border-primary" : ""
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      open === i ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-muted-foreground max-w-2xl text-pretty">{f.a}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}