import { Leaf, HandHeart, Clock, Wallet } from "lucide-react";
import { Reveal } from "./Reveal";

const reasons = [
  {
    icon: Leaf,
    title: "A space designed to calm you",
    body: "Soft lighting, quiet rooms, weighted blankets, noise-cancelling headphones, and aromatherapy on request — every detail tuned to lower your heart rate.",
  },
  {
    icon: HandHeart,
    title: "Empathy-first care",
    body: "If you've avoided the dentist for years, you're in good company. We take time to listen, explain, and pace treatment to your comfort — never the other way around.",
  },
  {
    icon: Clock,
    title: "On-time, every time",
    body: "Long waits feel disrespectful. We keep our schedule honest so you spend less time anticipating and more time leaving with a healthier smile.",
  },
  {
    icon: Wallet,
    title: "Transparent pricing",
    body: "Clear quotes before any treatment begins. Flexible financing available, and we work directly with most major insurance providers.",
  },
];

export function WhyLumina() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <div className="max-w-3xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-primary font-medium">
              Why Lumina
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-medium leading-[1.1] text-balance">
              Dentistry, reimagined for people who'd rather be anywhere else.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 text-lg text-muted-foreground text-pretty">
              We rebuilt the dental visit from the ground up — quiet rooms,
              gentler tools, and a team trained to make every step feel
              predictable. The result is care that's clinically excellent and
              genuinely humane.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 gap-px bg-border rounded-3xl overflow-hidden ring-soft">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 80}>
              <div className="bg-card p-8 md:p-10 h-full">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary">
                  <r.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-xl md:text-2xl font-medium">
                  {r.title}
                </h3>
                <p className="mt-3 text-muted-foreground text-pretty">{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}