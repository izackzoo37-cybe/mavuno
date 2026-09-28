import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import HeroSlider from "../components/HeroSlider";
import Reveal from "../components/Reveal";
import RecipeCard from "../components/RecipeCard";
import RecipeModal from "../components/RecipeModal";
import ProductRangeCard from "../components/ProductRangeCard";
import NewsCard from "../components/NewsCard";
import ManufacturingIcon from "../components/ManufacturingIcons";
import { siteConfig } from "../data/siteConfig";
import { productSizes, productFeatures } from "../data/productInfo";
import { companyInfo } from "../data/companyInfo";
import { newsArticles } from "../data/news";
import { recipes, type Recipe } from "../data/recipes";
import type { StageIcon } from "../data/manufacturingProcess";
import qualityHero from "../assets/quality-nutrition-hero.jpg";
import aboutTeamImage from "../assets/about-team-3.jpg";
import manufacturingImage from "../assets/manufacturing-hero.jpg";
import whereToBuyImage from "../assets/hero-availability.jpg";

const productImg = productSizes.find((p) => p.size === "2kg")!.image;

const manufacturingPreviewSteps: { step: string; label: string; icon: StageIcon }[] = [
  { step: "01", label: "Maize", icon: "sourcing" },
  { step: "02", label: "Processing", icon: "milling" },
  { step: "03", label: "Sifting", icon: "sifting" },
  { step: "04", label: "Packaging", icon: "packaging" },
  { step: "05", label: "Ready for Your Table", icon: "distribution" },
];

export default function Home() {
  const navigate = useNavigate();
  const [activeRecipe, setActiveRecipe] = useState<Recipe | null>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  function openRecipe(recipe: Recipe) {
    lastFocused.current = document.activeElement as HTMLElement | null;
    setActiveRecipe(recipe);
  }

  function closeRecipe() {
    setActiveRecipe(null);
    lastFocused.current?.focus();
  }

  return (
    <>
      <SEO
        title="Premium Fortified Maize Flour, A Product of Kenya"
        description={siteConfig.defaultDescription}
        path="/"
        image={productImg}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Mavuno",
          url: siteConfig.siteUrl,
          logo: `${siteConfig.siteUrl}/mavuno-logo.png`,
        }}
      />

      <HeroSlider />

      {/* ABOUT MAVUNO INTRODUCTION */}
      <section className="py-14 sm:py-20 lg:py-28 bg-harvest-50">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <img
              src={aboutTeamImage}
              alt="Mavuno staff members holding packs of Mavuno Maize Flour"
              loading="lazy"
              className="w-full aspect-[4/3] object-cover rounded-2xl shadow-md"
            />
          </Reveal>
          <Reveal delayMs={120}>
            <p className="text-mavred font-semibold tracking-wide text-sm uppercase">
              About Mavuno
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl text-ink leading-tight">
              Good Food Starts With Mavuno
            </h2>
            <p className="mt-5 text-ink-600 text-lg leading-relaxed max-w-md">
              {companyInfo.aboutCompany}
            </p>
            <div className="mt-8">
              <Button to="/about" variant="secondary">
                Discover Mavuno
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <section className="py-14 sm:py-20 lg:py-28 bg-white border-y border-ink/10">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Our Product"
              title="Mavuno Maize Flour"
              intro="Quality maize flour made for delicious everyday meals."
            />
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 gap-6 max-w-3xl">
            {productSizes.map((product, i) => (
              <Reveal key={product.size} delayMs={i * 100}>
                <ProductRangeCard product={product} onView={() => navigate("/product")} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY MAVUNO */}
      <section className="py-14 sm:py-20 lg:py-28 bg-harvest-50">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="Why Mavuno" title="Made For Everyday Meals" align="center" />
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productFeatures.map((feature, i) => (
              <Reveal key={feature.title} delayMs={i * 80}>
                <div className="group h-full bg-white border border-ink/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-maize/50">
                  <h3 className="font-display text-lg text-ink">{feature.title}</h3>
                  <p className="mt-1.5 text-sm text-ink-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY & NUTRITION FEATURE */}
      <section className="relative overflow-hidden bg-forest">
        <img
          src={qualityHero}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-[center_25%]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-forest-900/92 via-forest-900/80 to-forest-900/55"
          aria-hidden="true"
        />
        <div className="relative container-page py-20 sm:py-28">
          <Reveal>
            <div className="max-w-xl">
              <p className="text-maize-400 font-semibold tracking-wide text-sm uppercase">
                Quality &amp; Nutrition
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl text-harvest-50 leading-tight">
                Quality You Can Taste.
                <br />
                Nutrition You Can Trust.
              </h2>
              <p className="mt-4 text-harvest-100/90 text-lg leading-relaxed">
                Learn more about the quality and nutritional information behind Mavuno Maize
                Flour.
              </p>
              <div className="mt-8">
                <Button to="/quality-nutrition" variant="primary">
                  Explore Quality &amp; Nutrition
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RECIPES — one featured recipe, with a route to the full collection */}
      <section className="py-14 sm:py-20 lg:py-28 bg-white border-y border-ink/10">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="text-mavred font-semibold tracking-wide text-sm uppercase">
              Our Recipes
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl text-ink leading-tight">
              More Ways To Enjoy Mavuno
            </h2>
            <p className="mt-4 text-ink-600 text-lg leading-relaxed max-w-md">
              Discover delicious meal ideas made to be enjoyed with Mavuno Maize Flour.
            </p>
            <div className="mt-8">
              <Button to="/recipes" variant="secondary">
                Explore Recipes
              </Button>
            </div>
          </Reveal>
          <Reveal delayMs={120}>
            <div className="max-w-md mx-auto lg:mx-0 lg:ml-auto w-full">
              <RecipeCard recipe={recipes[0]} onView={openRecipe} />
            </div>
          </Reveal>
        </div>
        {activeRecipe && <RecipeModal recipe={activeRecipe} onClose={closeRecipe} />}
      </section>

      {/* MANUFACTURING PREVIEW */}
      <section className="py-14 sm:py-20 lg:py-28 bg-harvest-50">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <img
              src={manufacturingImage}
              alt="A technician operating the maize milling machine"
              loading="lazy"
              className="w-full aspect-[4/3] object-cover rounded-2xl shadow-md"
            />
          </Reveal>
          <Reveal delayMs={120}>
            <p className="text-mavred font-semibold tracking-wide text-sm uppercase">
              Our Process
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl text-ink leading-tight">
              From Maize To Meal
            </h2>
            <p className="mt-4 text-ink-600 leading-relaxed max-w-md">
              Discover the journey behind Mavuno Maize Flour.
            </p>
            <ol className="mt-8 grid grid-cols-5 gap-3">
              {manufacturingPreviewSteps.map((s) => (
                <li key={s.step} className="flex flex-col items-center text-center gap-2">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-forest text-harvest-50 text-xs font-semibold">
                    {s.step}
                  </span>
                  <span className="text-forest">
                    <ManufacturingIcon name={s.icon} />
                  </span>
                  <span className="text-xs font-medium text-ink-600 leading-tight">{s.label}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8">
              <Button to="/manufacturing" variant="secondary">
                Explore Our Process
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHERE TO BUY */}
      <section className="py-14 sm:py-20 lg:py-28 bg-white border-y border-ink/10">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <Reveal className="order-2 lg:order-1">
            <p className="text-mavred font-semibold tracking-wide text-sm uppercase">
              Find Mavuno
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl text-ink leading-tight">
              Bring Mavuno Home
            </h2>
            <p className="mt-4 text-ink-600 leading-relaxed max-w-md">
              Find out where you can get Mavuno Maize Flour.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/where-to-buy" variant="primary">
                Where to Buy
              </Button>
              <Button to="/contact" variant="ghost">
                Contact Us
              </Button>
            </div>
          </Reveal>
          <Reveal delayMs={120} className="order-1 lg:order-2">
            <img
              src={whereToBuyImage}
              alt="Stacked Mavuno Maize Flour stock ready for distribution"
              loading="lazy"
              className="w-full aspect-[4/3] object-cover rounded-2xl shadow-md"
            />
          </Reveal>
        </div>
      </section>

      {/* NEWS & EVENTS */}
      <section className="py-14 sm:py-20 lg:py-28 bg-harvest-50">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="News & Events"
              title="What's Happening at Mavuno"
              intro="Latest updates from the Mavuno team."
            />
          </Reveal>
          {newsArticles.length === 0 ? (
            <p className="mt-10 text-ink-400">News and events coming soon.</p>
          ) : (
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsArticles.slice(0, 3).map((article, i) => (
                <Reveal key={article.id} delayMs={i * 100}>
                  <NewsCard article={article} />
                </Reveal>
              ))}
            </div>
          )}
          <div className="mt-8">
            <Button to="/news" variant="ghost">
              View All News &amp; Events
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        heading="Good Food Starts With Mavuno"
        text="Explore our products, recipes and discover more about Mavuno Maize Flour."
        ctaLabel="Explore Our Product"
        ctaTo="/product"
        secondaryLabel="Explore Our Recipes"
        secondaryTo="/recipes"
      />
    </>
  );
}
