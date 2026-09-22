import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import CTASection from "../components/CTASection";
import { productInfo } from "../data/productInfo";
import { siteConfig } from "../data/siteConfig";
import productImg from "../assets/mavuno-product.jpeg";

const details: [string, string][] = [
  ["Brand", productInfo.brand],
  ["Product", productInfo.name],
  ["Net Weight", productInfo.netWeight],
  ["Product Type", productInfo.classification],
  ["Positioning", productInfo.positioning],
  ["Fortification", productInfo.fortificationStatement],
  ["Ingredients", productInfo.ingredients],
  ["Origin", productInfo.origin],
];

export default function Product() {
  return (
    <>
      <SEO
        title="Our Product — Mavuno Maize Flour"
        description="Mavuno Maize Flour: premium Grade 1 sifted maize meal, fortified with vitamins and minerals, in a 2kg pack. A product of Kenya."
        path="/product"
        image={productImg}
        type="product"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: productInfo.name,
          brand: { "@type": "Brand", name: productInfo.brand },
          description: siteConfig.defaultDescription,
        }}
      />
      <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "Our Product" }]} />

      <section className="container-page py-14 grid lg:grid-cols-2 gap-14 items-start">
        <img src={productImg} alt="Mavuno Maize Flour, 2kg premium fortified maize meal" className="w-full max-w-md mx-auto" />
        <div>
          <SectionHeading title={productInfo.name} intro={`${productInfo.localName} — ${productInfo.fortificationStatement}.`} />

          <dl className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
            {details.map(([label, value]) => (
              <div key={label} className="flex justify-between gap-4 py-3 text-sm">
                <dt className="text-ink-400">{label}</dt>
                <dd className="font-semibold text-right">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 border border-maize/40 bg-maize/5 p-4 text-sm text-ink-600">
            <p className="font-semibold text-ink">Storage</p>
            <p className="mt-1">{productInfo.storageInstructions}</p>
          </div>

          <div className="mt-8">
            <Button to="/quality-nutrition" variant="secondary">
              View Nutritional Information
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
