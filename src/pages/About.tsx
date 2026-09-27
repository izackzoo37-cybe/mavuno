import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import ProductRangeCard from "../components/ProductRangeCard";
import ValueIcon, { type ValueIconName } from "../components/ValueIcons";
import { companyInfo } from "../data/companyInfo";
import { productSizes } from "../data/productInfo";
import aboutHero from "../assets/about-hero.jpg";
import whoWeAreImage from "../assets/about-team-2.jpg";
import brandStoryImage from "../assets/about-team-4.jpg";
import finalCtaImage from "../assets/about-team-1.jpg";

const valueIcons: ValueIconName[] = ["quality", "trust", "integrity", "community"];

export default function About() {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="About Mavuno | Mavuno Maize Flour"
        description="Learn more about Mavuno Maize Flour, our values and our commitment to quality everyday meals."
        path="/about"
        image={aboutHero}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-forest">
        <img
          src={aboutHero}
          alt="The Mavuno team celebrating together, holding packs of Mavuno Maize Flour"
          className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-forest-900/90 via-forest-900/75 to-forest-900/45"
          aria-hidden="true"
        />
        <div className="relative pt-24 sm:pt-28">
          <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "About Us" }]} tone="light" />
        </div>
        <div className="container-page relative pt-8 pb-20 lg:pb-28 min-h-[55vh] sm:min-h-[65vh] flex items-center">
          <div className="fade-up max-w-xl">
            <SectionHeading
              as="h1"
              tone="light"
              eyebrow="About Mavuno"
              title="Good Food. Shared Moments."
              intro="Discover the story and values behind Mavuno Maize Flour."
            />
            <div className="mt-8">
              <Button href="#who-we-are" variant="primary">
                Discover Mavuno
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section id="who-we-are" className="py-14 sm:py-20 lg:py-28 bg-white scroll-mt-24">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <img
              src={whoWeAreImage}
              alt="Mavuno staff packing and checking Mavuno Maize Flour"
              loading="lazy"
              className="w-full aspect-[4/3] object-cover rounded-2xl shadow-md"
            />
          </Reveal>
          <Reveal delayMs={120}>
            <p className="text-mavred font-semibold tracking-wide text-sm uppercase">
              Who We Are
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl text-ink leading-tight">
              About Mavuno
            </h2>
            <div className="mt-5 space-y-4 text-ink-600 text-lg leading-relaxed max-w-md">
              <p>{companyInfo.aboutCompany}</p>
              <p>{companyInfo.aboutCompanySecondary}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OUR PURPOSE */}
      <section className="py-14 sm:py-20 lg:py-28 bg-harvest-50">
        <div className="container-page text-center max-w-2xl mx-auto">
          <Reveal>
            <p className="text-mavred font-semibold tracking-wide text-sm uppercase">
              Our Purpose
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl text-ink leading-tight">
              Made For Everyday Meals
            </h2>
            <p className="mt-5 text-ink-600 text-lg leading-relaxed">{companyInfo.mission}</p>
            <div className="mt-6 flex justify-center text-forest">
              <ValueIcon name="quality" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-14 sm:py-20 lg:py-28 bg-white border-y border-ink/10">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="What Matters To Us" title="Our Values" align="center" />
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyInfo.coreValues.map((value, i) => (
              <Reveal key={value.title} delayMs={i * 80}>
                <div className="group h-full bg-harvest-50 border border-ink/10 rounded-[20px] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-maize/50">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-forest-50 text-forest transition-transform duration-300 group-hover:scale-110 group-hover:bg-maize/15 group-hover:text-mavred">
                    <ValueIcon name={valueIcons[i]} />
                  </div>
                  <h3 className="mt-4 font-display text-lg text-ink">{value.title}</h3>
                  <p className="mt-1.5 text-sm text-ink-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="py-14 sm:py-20 lg:py-28 bg-harvest-50">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <img
              src={brandStoryImage}
              alt="The Mavuno team together at the production facility"
              loading="lazy"
              className="w-full aspect-[4/3] object-cover rounded-2xl shadow-md"
            />
          </Reveal>
          <Reveal delayMs={120}>
            <p className="text-mavred font-semibold tracking-wide text-sm uppercase">
              The Mavuno Experience
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl text-ink leading-tight">
              Made For The Table
            </h2>
            <p className="mt-5 text-ink-600 text-lg leading-relaxed max-w-md">
              {companyInfo.qualityCommitment}
            </p>
          </Reveal>
        </div>
      </section>

      {/* PRODUCT PREVIEW */}
      <section className="py-14 sm:py-20 lg:py-28 bg-white border-y border-ink/10">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Our Product"
              title="Mavuno Maize Flour"
              intro="Discover Mavuno Maize Flour in 1kg and 2kg packs, made for everyday meals."
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

      {/* OUR COMMITMENT */}
      <section className="py-16 sm:py-20 bg-forest text-harvest-50">
        <div className="container-page text-center max-w-2xl mx-auto">
          <Reveal>
            <p className="text-maize-400 font-semibold tracking-wide text-sm uppercase">
              Our Commitment
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl leading-tight">
              Quality In Every Meal
            </h2>
            <p className="mt-5 text-harvest-100/90 text-lg leading-relaxed">
              {companyInfo.qualityCommitment}
            </p>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-forest">
        <img
          src={finalCtaImage}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-900/85" aria-hidden="true" />
        <div className="relative container-page py-20 text-center max-w-xl mx-auto">
          <Reveal>
            <p className="text-maize-400 font-semibold tracking-wide text-sm uppercase">
              Discover Mavuno
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl text-harvest-50 leading-tight">
              Good Food Starts With Mavuno
            </h2>
            <p className="mt-4 text-harvest-100/90 text-lg leading-relaxed">
              Explore our products, recipes and learn more about Mavuno Maize Flour.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button to="/product" variant="primary">
                Our Product
              </Button>
              <Button
                to="/recipes"
                variant="ghost"
                className="!border-harvest-50/40 !text-harvest-50 hover:!border-maize-400 hover:!text-maize-400"
              >
                Our Recipes
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
