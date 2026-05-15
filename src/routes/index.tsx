import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { WhyLumina } from "@/components/site/WhyLumina";
import { Treatments } from "@/components/site/Treatments";
import { Technology } from "@/components/site/Technology";
import { Doctors } from "@/components/site/Doctors";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Stories } from "@/components/site/Stories";
import { Experience } from "@/components/site/Experience";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumina Dental — Calm, Confident Dental Care in Portland" },
      {
        name: "description",
        content:
          "Premium cosmetic and general dentistry in a serene, anxiety-free environment. Implants, veneers, Invisalign, and more — delivered with quiet precision.",
      },
      { property: "og:title", content: "Lumina Dental — Calm, Confident Dental Care" },
      {
        property: "og:description",
        content:
          "Advanced cosmetic & general dentistry in a serene, anxiety-free environment.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <WhyLumina />
        <Treatments />
        <Technology />
        <Doctors />
        <BeforeAfter />
        <Stories />
        <Experience />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
