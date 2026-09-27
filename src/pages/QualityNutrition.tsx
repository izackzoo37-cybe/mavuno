import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import SectionHeading from "../components/SectionHeading";
import NutritionTable from "../components/NutritionTable";
import QualityIcon, { type QualityIconName } from "../components/QualityIcons";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import CTASection from "../components/CTASection";
import { macronutrients, fortificants, nutritionNote, basis } from "../data/nutritionInfo";
import { productInfo } from "../data/productInfo";
import qualityHero from "../assets/quality-nutrition-hero.jpg";
import qualityIntroImage from "../assets/opening-week-2.jpg";
import mavuno1kg from "../assets/mavuno-1kg.webp";
import mavuno2kg from "../assets/mavuno-2kg.webp";

const qualityFeatures: { icon: QualityIconName; title: string; description: string }[] = [
  {
    icon: "maize",
    title: "Quality Maize",
    description:
      "Carefully selected maize is an important starting point for producing consistent maize flour.",
  },
  {
    icon: "sifted",
    title: "Sifted Maize Meal",
    description:
      "Mavuno Maize Flour is presented as a sifted maize meal suitable for preparing everyday meals.",
  },
  {
    icon: "consistent",
    title: "Consistent Quality",
    description: "A focus on consistency helps deliver a reliable product for households.",
  },
  {
    icon: "everyday",
    title: "Made for Everyday Meals",
    description: "Mavuno Maize Flour is designed to be part of everyday family meals.",
  },
];

const qualityProcess = [
  "Selected Maize",
  "Processing",
  "Sifting",
  "Quality Checks",
  "Packaging",
  "Ready for Your Table",
];

export default function QualityNutrition() {
  return (
    <>
      <SEO
        title="Mavuno Quality & Nutrition | Quality Maize Flour"
        description="Learn about the quality and nutritional information behind Mavuno Maize Flour, made for delicious everyday meals."
        path="/quality-nutrition"
        image={qualityHero}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-forest">
        <img
          src={qualityHero}
          alt="A Mavuno staff member holding a pack of Mavuno Maize Flour at the milling facility"
          className="absolute inset-0 w-full h-full object-cover object-[center_25%]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-forest-900/92 via-forest-900/80 to-forest-900/50"
          aria-hidden="true"
        />
        <div className="relative pt-24 sm:pt-28">
          <Breadcrumbs
            items={[{ label: "Home", path: "/" }, { label: "Quality & Nutrition" }]}
            tone="light"
          />
        </div>
        <div className="container-page relative pt-8 pb-20 lg:pb-28 min-h-[60vh] sm:min-h-[68vh] flex items-center">
          <div className="fade-up">
            <SectionHeading
              as="h1"
              tone="light"
              eyebrow="Quality & Nutrition"
              title="Quality You Can Taste. Nutrition You Can Trust."
              intro="Discover the quality behind Mavuno Maize Flour and learn more about the nutritional value of a product made for everyday meals."
            />
            <div className="mt-8">
              <Button href="#nutrition" variant="primary">
                Explore Nutrition
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* QUALITY INTRODUCTION */}
      <section className="py-20 bg-white border-b border-ink/10">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Our Quality"
              title="Made With Quality in Mind"
              intro="At Mavuno, quality is an important part of every stage of producing our maize flour. From carefully selected maize to processing and packaging, our focus is on delivering consistent maize flour for everyday meals."
            />
          </Reveal>
          <Reveal delayMs={120}>
            <img
              src={qualityIntroImage}
              alt="Mavuno staff members weighing and checking flour packs at the production facility"
              loading="lazy"
              className="w-full aspect-[4/3] object-cover rounded-2xl"
            />
          </Reveal>
        </div>
      </section>

      {/* QUALITY FEATURES */}
      <section className="py-20">
        <div className="container-page">
          <Reveal>
            <h2 className="font-display text-3xl text-ink">Why Quality Matters</h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityFeatures.map((feature, i) => (
              <Reveal key={feature.title} delayMs={i * 80}>
                <div className="group h-full bg-white border border-ink/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-maize/50">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-forest-50 text-forest transition-transform duration-300 group-hover:scale-110 group-hover:bg-maize/15 group-hover:text-mavred">
                    <QualityIcon name={feature.icon} />
                  </div>
                  <h3 className="mt-4 font-display text-lg text-ink">{feature.title}</h3>
                  <p className="mt-1.5 text-sm text-ink-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NUTRITION */}
      <section id="nutrition" className="py-20 bg-forest-50 border-y border-forest-100 scroll-mt-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Nutrition"
              title="Nutritional Information"
              intro="Mavuno Maize Flour provides an important staple food option for everyday meals. The product packaging provides nutritional information to help consumers understand what they are consuming."
            />
          </Reveal>

          <div className="mt-12 grid lg:grid-cols-2 gap-10 items-start">
            <Reveal>
              <img
                src={mavuno2kg}
                alt="Mavuno Maize Flour, 2kg pack showing the printed nutrition panel"
                loading="lazy"
                className="w-full max-w-sm mx-auto"
              />
            </Reveal>

            <Reveal delayMs={120}>
              <div className="bg-white rounded-2xl border border-ink/10 overflow-hidden">
                <div className="bg-forest text-harvest-50 px-6 py-4">
                  <p className="font-display text-lg">Nutrition Information</p>
                  <p className="text-sm text-harvest-100/80">{basis}</p>
                </div>
                <div className="p-6 space-y-8">
                  <NutritionTable title="Per 100 g" rows={macronutrients} />
                  <NutritionTable title="Vitamins & Minerals (min. per 100 g)" rows={fortificants} />
                </div>
                <p className="px-6 pb-6 text-xs text-ink-400 italic border-t border-ink/10 pt-4">
                  {nutritionNote}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FORTIFICATION */}
      <section className="py-20 bg-white">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <img
              src={mavuno1kg}
              alt="Mavuno Maize Flour, 1kg pack, fortified with vitamins and minerals"
              loading="lazy"
              className="w-full max-w-xs mx-auto"
            />
          </Reveal>
          <Reveal delayMs={120}>
            <p className="text-mavred font-semibold tracking-wide text-sm uppercase">
              Fortified with Vitamins &amp; Minerals
            </p>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl text-ink">
              Supporting Everyday Nutrition
            </h2>
            <p className="mt-4 text-ink-600 leading-relaxed max-w-md">
              Mavuno Maize Flour is fortified with vitamins and minerals, as indicated on the
              product packaging.
            </p>
            <p className="mt-3 text-xs text-ink-400 italic max-w-md">
              Presented on the packaging as {productInfo.origin.toLowerCase()}.
            </p>
          </Reveal>
        </div>
      </section>

      {/* QUALITY PROCESS */}
      <section className="py-20 bg-forest-50 border-y border-forest-100">
        <div className="container-page">
          <Reveal>
            <h2 className="font-display text-3xl text-ink text-center">The Quality Journey</h2>
          </Reveal>
          <ol className="mt-12 grid sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {qualityProcess.map((step, i) => (
              <Reveal key={step} delayMs={i * 70}>
                <li className="flex flex-col items-center text-center">
                  <span className="flex items-center justify-center w-11 h-11 rounded-full bg-forest text-harvest-50 font-display text-sm font-semibold">
                    {i + 1}
                  </span>
                  <p className="mt-3 text-sm font-medium text-ink">{step}</p>
                  {i < qualityProcess.length - 1 && (
                    <span className="block sm:hidden mt-3 text-forest/50" aria-hidden="true">
                      &#8595;
                    </span>
                  )}
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CTASection
        heading="Good Quality Starts With Mavuno"
        text="Discover Mavuno Maize Flour and make it part of your everyday meals."
        ctaLabel="Explore Our Product"
        ctaTo="/product"
        secondaryLabel="Where to Buy"
        secondaryTo="/where-to-buy"
      />
    </>
  );
}
