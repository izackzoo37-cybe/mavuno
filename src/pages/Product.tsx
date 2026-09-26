import { useRef, useState } from "react";
import SEO from "../components/SEO";
import ProductShowcase from "../components/ProductShowcase";
import ProductRangeCard from "../components/ProductRangeCard";
import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";
import Button from "../components/Button";
import { productInfo, productSizes, productFeatures, type ProductSize } from "../data/productInfo";
import { siteConfig } from "../data/siteConfig";

export default function Product() {
  const [size, setSize] = useState<ProductSize["size"]>("2kg");
  const showcaseRef = useRef<HTMLDivElement>(null);

  function handleViewProduct(newSize: ProductSize["size"]) {
    setSize(newSize);
    showcaseRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const active = productSizes.find((p) => p.size === size) ?? productSizes[0];

  return (
    <>
      <SEO
        title="Mavuno Maize Flour | Quality Maize Flour in Kenya"
        description="Discover Mavuno Maize Flour in 1kg and 2kg packs. Quality sifted maize meal made for delicious everyday meals."
        path="/product"
        image={active.image}
        type="product"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: productInfo.name,
          brand: { "@type": "Brand", name: productInfo.brand },
          description: siteConfig.defaultDescription,
          image: productSizes.map((p) => p.image),
        }}
      />

      <div ref={showcaseRef}>
        <ProductShowcase size={size} onSizeChange={setSize} />
      </div>

      {/* WHY MAVUNO? */}
      <section className="py-20">
        <div className="container-page">
          <Reveal>
            <h2 className="font-display text-3xl text-ink">Why Mavuno?</h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productFeatures.map((feature, i) => (
              <Reveal key={feature.title} delayMs={i * 80}>
                <div className="border-l-4 border-forest pl-5 py-1 h-full">
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

      {/* PRODUCT RANGE */}
      <section className="py-20 bg-forest-50 border-y border-forest-100">
        <div className="container-page">
          <Reveal>
            <div className="max-w-xl">
              <h2 className="font-display text-3xl text-ink">Our Product Range</h2>
              <p className="mt-3 text-ink-600 leading-relaxed">
                Choose the Mavuno pack that works for your household.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 gap-6 max-w-3xl">
            {productSizes.map((product, i) => (
              <Reveal key={product.size} delayMs={i * 100}>
                <ProductRangeCard product={product} onView={handleViewProduct} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT DETAILS / QUALITY */}
      <section className="py-20">
        <div className="container-page grid lg:grid-cols-2 gap-12">
          <Reveal>
            <div>
              <h2 className="font-display text-2xl text-ink">Product Details</h2>
              <dl className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
                {(
                  [
                    ["Brand", productInfo.brand],
                    ["Product", productInfo.name],
                    ["Sizes", productInfo.netWeight],
                    ["Product Type", productInfo.classification],
                    ["Positioning", productInfo.positioning],
                    ["Fortification", productInfo.fortificationStatement],
                    ["Ingredients", productInfo.ingredients],
                    ["Origin", productInfo.origin],
                  ] as [string, string][]
                ).map(([label, value]) => (
                  <div key={label} className="flex justify-between gap-4 py-3 text-sm">
                    <dt className="text-ink-400">{label}</dt>
                    <dd className="font-semibold text-right">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal delayMs={100}>
            <div>
              <div className="border border-maize/40 bg-maize/5 p-4 text-sm text-ink-600">
                <p className="font-semibold text-ink">Storage</p>
                <p className="mt-1">{productInfo.storageInstructions}</p>
              </div>
              <div className="mt-6">
                <Button to="/quality-nutrition" variant="secondary">
                  View Nutritional Information
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        heading="Ready to find Mavuno near you?"
        text="Discover where to buy Mavuno Maize Flour in your area."
        ctaLabel="Where to Buy"
        ctaTo="/where-to-buy"
      />
    </>
  );
}
