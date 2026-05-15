import { Award, ShieldCheck, BadgeCheck, HeartPulse, Microscope } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: ShieldCheck, label: "ISO 13485 Certified" },
  { icon: Award, label: "ADA Member Practice" },
  { icon: BadgeCheck, label: "Board-Certified Specialists" },
  { icon: Microscope, label: "Digital 3D Imaging" },
  { icon: HeartPulse, label: "Sedation Dentistry" },
];

export function TrustBar() {
  return (
    <section className="border-y border-border-soft bg-surface/60">
      <div className="container-page py-6 md:py-8">
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {items.map((it) => (
              <div
                key={it.label}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <it.icon className="h-4 w-4 text-primary" />
                <span className="tracking-wide">{it.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}