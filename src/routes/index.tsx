import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
// import { WhyLaxmi } from "@/components/site/WhyLaxmi";
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
      { title: "Laxmi Dental — Best Dental Clinic in Haldwani" },
      {
        name: "description",
        content:
          "Premium cosmetic and general dentistry in a serene, anxiety-free environment. Implants, veneers, Invisalign, and more — delivered with quiet precision.",
      },
      { property: "og:title", content: "Laxmi Dental — Calm, Confident Dental Care" },
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
        {/* <WhyLaxmi /> */}
        <Treatments />
        <Technology />
        {/* <Doctors /> */}
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
