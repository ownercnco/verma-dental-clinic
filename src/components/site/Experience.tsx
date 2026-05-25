import { Reveal } from "./Reveal";
import reception from "@/assets/reception.jpg";
import room from "@/assets/clinic-room.jpg";

export function Experience() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.18em] text-primary font-medium">
                The Laxmi Experience
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 font-display text-3xl md:text-5xl font-medium leading-[1.1] text-balance">
                A clinic that doesn't feel like one.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 text-lg text-muted-foreground text-pretty">
                Step inside and you'll find natural light, soft textures, and
                quiet rooms. Less institution, more wellness retreat — without
                compromising a single clinical standard.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <ul className="mt-8 space-y-3 text-sm text-foreground/80">
                <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Noise-cancelling headphones in every room</li>
                <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Weighted blankets and aromatherapy on request</li>
                <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Warm tea and oat milk in the lobby</li>
                <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Dedicated parking and step-free access</li>
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <Reveal delay={100}>
              <div className="aspect-[3/4] overflow-hidden rounded-3xl ring-soft shadow-soft">
                <img src={reception} alt="Laxmi Dental reception area" loading="lazy" className="h-full w-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="aspect-[3/4] overflow-hidden rounded-3xl ring-soft shadow-soft mt-12">
                <img src={room} alt="Laxmi Dental treatment room" loading="lazy" className="h-full w-full object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}