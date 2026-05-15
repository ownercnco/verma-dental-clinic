import { useRef, useState } from "react";
import { Reveal } from "./Reveal";
import before from "@/assets/smile-before.jpg";
import after from "@/assets/smile-after.jpg";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement | null>(null);

  const onMove = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  };

  return (
    <section id="results" className="py-24 md:py-32">
      <div className="container-page">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-primary font-medium">
              Smile Transformations
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-medium leading-[1.1] text-balance">
              Real patients. Real results.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 text-lg text-muted-foreground text-pretty">
              Drag the slider to see the difference. Every smile shown is the
              outcome of a personalized treatment plan — never a stock image.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div
            ref={ref}
            className="mt-12 relative aspect-[16/10] w-full max-w-5xl mx-auto overflow-hidden rounded-3xl ring-soft shadow-card select-none touch-none"
            onMouseMove={(e) => e.buttons === 1 && onMove(e.clientX)}
            onTouchMove={(e) => onMove(e.touches[0].clientX)}
            onClick={(e) => onMove(e.clientX)}
          >
            <img
              src={after}
              alt="Smile after Lumina Dental treatment"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <img
                src={before}
                alt="Smile before treatment"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Labels */}
            <span className="absolute top-4 left-4 rounded-full bg-background/85 backdrop-blur px-3 py-1 text-xs font-medium text-foreground">
              Before
            </span>
            <span className="absolute top-4 right-4 rounded-full bg-primary text-primary-foreground px-3 py-1 text-xs font-medium">
              After
            </span>

            {/* Handle */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-background/90 cursor-ew-resize"
              style={{ left: `${pos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-background shadow-card ring-soft">
                <div className="flex gap-0.5">
                  <span className="block h-3 w-0.5 bg-foreground/60" />
                  <span className="block h-3 w-0.5 bg-foreground/60" />
                </div>
              </div>
            </div>

            <input
              aria-label="Reveal before and after"
              type="range"
              min={0}
              max={100}
              value={pos}
              onChange={(e) => setPos(Number(e.target.value))}
              className="absolute inset-0 w-full opacity-0 cursor-ew-resize"
            />
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-3 sm:grid-cols-6 gap-3 max-w-5xl mx-auto">
          {[after, before, after, before, after, before].map((src, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-2xl ring-soft">
              <img src={src} alt="Patient result" loading="lazy" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}