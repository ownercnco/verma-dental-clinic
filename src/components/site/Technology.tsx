import { Reveal } from "./Reveal";
import clinicRoom from "@/assets/clinic-room.jpg";
import { ScanLine, Radiation, Waves, Sparkles } from "lucide-react";

const tech = [
  { icon: ScanLine, title: "Digital intraoral scanners", body: "No more goopy impressions. We capture a precise 3D model of your bite in minutes." },
  { icon: Radiation, title: "Low-dose 3D CBCT imaging", body: "Up to 90% less radiation than traditional medical CT, with surgical-grade precision." },
  { icon: Waves, title: "Soft-tissue dental lasers", body: "Quieter, gentler procedures with faster healing and minimal bleeding." },
  { icon: Sparkles, title: "Hospital-grade sterilization", body: "ISO 13485 sterilization protocols, with every instrument cycle tracked digitally." },
];

export function Technology() {
  return (
    <section id="technology" className="py-24 md:py-32">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.18em] text-primary font-medium">
                Technology & Excellence
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 font-display text-3xl md:text-5xl font-medium leading-[1.1] text-balance">
                Quietly advanced. Visibly gentler.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 text-muted-foreground text-pretty">
                We invest in technology that makes your visit shorter,
                quieter, and more predictable — not because it's flashy, but
                because it produces better outcomes with less discomfort.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 overflow-hidden rounded-3xl ring-soft shadow-card">
                <img
                  src={clinicRoom}
                  alt="Modern dental treatment room with advanced equipment"
                  width={1400}
                  height={1000}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ul className="space-y-px bg-border rounded-3xl overflow-hidden ring-soft">
              {tech.map((t, i) => (
                <Reveal key={t.title} delay={i * 60}>
                  <li className="bg-card p-7 md:p-9 flex items-start gap-5">
                    <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary">
                      <t.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-medium">{t.title}</h3>
                      <p className="mt-2 text-muted-foreground text-pretty">{t.body}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}