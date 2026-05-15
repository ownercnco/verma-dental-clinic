import { Reveal } from "./Reveal";
import doc1 from "@/assets/doctor-1.jpg";
import doc2 from "@/assets/doctor-2.jpg";
import doc3 from "@/assets/doctor-3.jpg";

const doctors = [
  {
    img: doc1,
    name: "Dr. Amelia Chen",
    role: "Founder · Cosmetic & Restorative",
    creds: "DDS, FAACD",
    bio: "15 years specializing in smile design and minimally invasive veneers. Trained at UCSF and the Kois Center.",
  },
  {
    img: doc2,
    name: "Dr. Marcus Reyes",
    role: "Implant & Oral Surgery",
    creds: "DMD, MS Periodontics",
    bio: "Board-certified periodontist with over 2,000 implants placed. Pioneer of guided same-day implant protocols.",
  },
  {
    img: doc3,
    name: "Dr. Sofia Lindqvist",
    role: "Orthodontics & Aligners",
    creds: "DDS, MSD Orthodontics",
    bio: "Invisalign Diamond Provider with a gentle, evidence-based approach to teen and adult orthodontics.",
  },
];

export function Doctors() {
  return (
    <section id="doctors" className="py-24 md:py-32 bg-surface/60">
      <div className="container-page">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-primary font-medium">
              Meet Our Doctors
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-medium leading-[1.1] text-balance">
              The hands you'll be in.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 text-lg text-muted-foreground text-pretty">
              A small, deliberately chosen team — each a recognized specialist
              in their discipline, all sharing one philosophy: gentler
              dentistry, done exceptionally well.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((d, i) => (
            <Reveal key={d.name} delay={i * 80}>
              <article className="bg-card rounded-3xl ring-soft overflow-hidden hover:shadow-card transition-shadow">
                <div className="aspect-[4/5] overflow-hidden bg-surface-2">
                  <img
                    src={d.img}
                    alt={`Portrait of ${d.name}`}
                    width={800}
                    height={1000}
                    loading="lazy"
                    className="h-full w-full object-cover hover:scale-[1.03] transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-wider text-primary">
                    {d.role}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-medium">{d.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{d.creds}</p>
                  <p className="mt-4 text-sm text-foreground/80 text-pretty">
                    {d.bio}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}