import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import SectionHeading from "../components/SectionHeading";
import ManufacturingProcess from "../components/ManufacturingProcess";
import CTASection from "../components/CTASection";
import { manufacturingStages, manufacturingIntro, manufacturingClosing } from "../data/manufacturingProcess";
import { siteConfig } from "../data/siteConfig";
import { manufacturingOverview } from "../data/companyInfo";
import manufacturingHero from "../assets/manufacturing-hero.jpg";

export default function Manufacturing() {
  return (
    <>
      <SEO
        title="Maize Flour Manufacturing Process"
        description="See how Mavuno Maize Flour is made — from maize sourcing and cleaning through milling, sifting, quality control, packaging and distribution."
        path="/manufacturing"
        image={manufacturingHero}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "Maize Flour Manufacturing Process",
          description: manufacturingIntro,
          step: manufacturingStages.map((stage) => ({
            "@type": "HowToStep",
            position: stage.step,
            name: stage.title,
            text: stage.description,
          })),
        }}
      />
      <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "Manufacturing" }]} />

      <section className="relative overflow-hidden">
        {/* Decorative maize-milling photograph — the heading and intro text
            already convey the section's meaning, so the image is treated
            as decorative background (empty alt). */}
        <img
          src={manufacturingHero}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-forest-900/95 via-forest-900/85 to-forest-900/60"
          aria-hidden="true"
        />
        <div className="container-page relative py-20 lg:py-28">
          <h1 className="sr-only">Manufacturing — Maize Flour Manufacturing Process</h1>
          <SectionHeading
            tone="light"
            eyebrow="Our Manufacturing Process"
            title="From Grain to Quality Flour"
            intro={manufacturingIntro}
          />
        </div>
      </section>

      <section className="container-page py-20" aria-label={`${siteConfig.productName} manufacturing process, 10 stages`}>
        <ManufacturingProcess />
      </section>

      <section className="py-16 bg-white border-y border-ink/10">
        <div className="container-page max-w-2xl">
          <h2 className="font-display text-2xl sm:text-3xl text-ink">From Maize to Mavuno</h2>
          {manufacturingOverview.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-ink-600 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="py-16 bg-forest-50 border-y border-forest-100">
        <div className="container-page max-w-2xl">
          <h2 className="font-display text-2xl sm:text-3xl text-ink">{manufacturingClosing.title}</h2>
          <p className="mt-4 text-ink-600 leading-relaxed">{manufacturingClosing.text}</p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
