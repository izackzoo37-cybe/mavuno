import SEO from "../components/SEO";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import NutritionTable from "../components/NutritionTable";
import ProcessTimeline from "../components/ProcessTimeline";
import HeroSlider from "../components/HeroSlider";
import { siteConfig } from "../data/siteConfig";
import { productInfo, productSizes, whyMavuno } from "../data/productInfo";
import { companyInfo } from "../data/companyInfo";
import { macronutrients, fortificants, nutritionNote } from "../data/nutritionInfo";
import { manufacturingStages } from "../data/manufacturingProcess";
import { newsArticles } from "../data/news";
import { recipes } from "../data/recipes";
const productImg = productSizes.find((p) => p.size === "2kg")!.image;

export default function Home() {
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

      {/* BRAND INTRO */}
      <section className="py-20">
        <div className="container-page grid lg:grid-cols-[1fr,1.1fr] gap-12 items-start">
          <SectionHeading title="Quality You Can Trust" />
          <div className="space-y-4 text-ink-600 leading-relaxed">
            <p>{companyInfo.aboutCompany}</p>
            <p>{companyInfo.aboutCompanySecondary}</p>
            <ul className="grid sm:grid-cols-2 gap-3 mt-4">
              {[
                productInfo.positioning,
                productInfo.classification,
                productInfo.fortificationStatement,
                `Available in ${productInfo.netWeight}`,
                productInfo.origin,
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-maize shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <section className="py-20 bg-white border-y border-ink/10">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <img src={productImg} alt="Mavuno Maize Flour pack, 2kg" className="w-full max-w-md mx-auto" loading="lazy" />
          <div>
            <SectionHeading
              title={productInfo.name}
              intro={`${productInfo.classification} — ${productInfo.fortificationStatement.toLowerCase()}.`}
            />
            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-ink-400">Available Sizes</dt>
                <dd className="font-semibold">{productInfo.netWeight}</dd>
              </div>
              <div>
                <dt className="text-ink-400">Classification</dt>
                <dd className="font-semibold">{productInfo.classification}</dd>
              </div>
              <div>
                <dt className="text-ink-400">Origin</dt>
                <dd className="font-semibold">{productInfo.origin}</dd>
              </div>
              <div>
                <dt className="text-ink-400">Positioning</dt>
                <dd className="font-semibold">{productInfo.positioning}</dd>
              </div>
            </dl>
            <div className="mt-8">
              <Button to="/product" variant="secondary">
                View Product Details
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY MAVUNO */}
      <section className="py-20">
        <div className="container-page">
          <SectionHeading title="Why Mavuno" align="center" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyMavuno.map((item) => (
              <div key={item.title} className="border-l-4 border-maize pl-5 py-1">
                <h3 className="font-display text-lg text-ink">{item.title}</h3>
                <p className="mt-1.5 text-sm text-ink-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY */}
      <section className="py-20 bg-forest-50 border-y border-forest-100">
        <div className="container-page">
          <SectionHeading title="Quality & Certification" intro={companyInfo.qualityCommitment} />
        </div>
      </section>

      {/* NUTRITION */}
      <section className="py-20">
        <div className="container-page">
          <SectionHeading title="Fortification & Nutrition" intro="Values shown per 100 g, as printed on the product packaging." />
          <div className="mt-10 grid md:grid-cols-2 gap-10">
            <NutritionTable title="Nutritional Information" rows={macronutrients} />
            <NutritionTable title="Vitamins & Minerals (min. per 100 g)" rows={fortificants} />
          </div>
          <p className="mt-6 text-xs text-ink-400 italic">{nutritionNote}</p>
        </div>
      </section>

      {/* MANUFACTURING */}
      <section className="py-20 bg-white border-y border-ink/10">
        <div className="container-page">
          <SectionHeading title="From Maize to Mavuno" intro="An illustrative overview of the milling journey — to be confirmed against Mavuno's actual process." />
          <div className="mt-12">
            <ProcessTimeline stages={manufacturingStages.slice(0, 5)} />
          </div>
          <div className="mt-6">
            <Button to="/manufacturing" variant="ghost">
              See Full Process
            </Button>
          </div>
        </div>
      </section>

      {/* RECIPES / MEAL IDEAS PREVIEW */}
      <section className="py-20">
        <div className="container-page">
          <SectionHeading title="Made for Great Meals" intro="Enjoy Mavuno ugali with some of Kenya's favorite hearty meals." />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {recipes.slice(0, 3).map((recipe) => (
              <div key={recipe.id} className="group bg-white border border-ink/10 overflow-hidden transition-shadow duration-300 hover:shadow-lg">
                <div className="overflow-hidden aspect-[4/3]">
                  <img
                    src={recipe.image}
                    alt={recipe.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-ink">{recipe.title}</h3>
                  <p className="mt-2 text-sm text-ink-400 leading-relaxed">{recipe.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button to="/recipes" variant="ghost">
              View All Recipes
            </Button>
          </div>
        </div>
      </section>

      {/* NEWS PREVIEW */}
      <section className="py-20 bg-forest-50 border-y border-forest-100">
        <div className="container-page">
          <SectionHeading title="News & Events" intro="Latest from Mavuno." />
          <div className="mt-10">
            {newsArticles.length === 0 ? (
              <p className="text-ink-400">News and events coming soon.</p>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsArticles.map((article) => (
                  <div key={article.id} className="bg-white border border-ink/10 overflow-hidden">
                    <div className="relative aspect-video bg-ink">
                      {(article.videoPoster ?? article.image) && (
                        <img
                          src={article.videoPoster ?? article.image}
                          alt=""
                          aria-hidden="true"
                          className="w-full h-full object-cover"
                        />
                      )}
                      {article.video && (
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <span className="w-14 h-14 rounded-full bg-harvest-50/90 flex items-center justify-center text-forest">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current ml-0.5">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </span>
                        </span>
                      )}
                    </div>
                    <div className="p-5">
                      <p className="text-xs uppercase tracking-wide text-mavred font-semibold">
                        {article.category}
                      </p>
                      <h3 className="mt-2 font-display text-lg text-ink">{article.title}</h3>
                      <p className="mt-1.5 text-sm text-ink-400">{article.summary}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="mt-8">
            <Button to="/news" variant="ghost">
              View News & Events
            </Button>
          </div>
        </div>
      </section>

      {/* WHERE TO BUY */}
      <section className="py-20">
        <div className="container-page">
          <SectionHeading title="Where to Buy Mavuno" intro="Retailer and distributor information coming soon." />
          <div className="mt-8">
            <Button to="/where-to-buy" variant="ghost">
              Explore Locations
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
