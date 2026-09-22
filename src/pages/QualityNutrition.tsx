import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import SectionHeading from "../components/SectionHeading";
import NutritionTable from "../components/NutritionTable";
import CertificationCard from "../components/CertificationCard";
import CTASection from "../components/CTASection";
import { macronutrients, fortificants, nutritionNote, basis } from "../data/nutritionInfo";
import { certifications, originStatement } from "../data/certifications";

export default function QualityNutrition() {
  return (
    <>
      <SEO
        title="Quality & Nutrition"
        description="Nutritional information and quality certifications for Mavuno Maize Flour, fortified with vitamins and minerals."
        path="/quality-nutrition"
      />
      <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "Quality & Nutrition" }]} />

      <section className="container-page py-14">
        <SectionHeading title="Quality You Can Trust" intro={`Presented on the packaging as a product of Kenya (${originStatement}).`} />
      </section>

      <section className="py-16 bg-white border-y border-ink/10">
        <div className="container-page">
          <h2 className="font-display text-2xl text-ink">Nutritional Information</h2>
          <p className="mt-2 text-sm text-ink-400">{basis}</p>
          <div className="mt-8 grid md:grid-cols-2 gap-10">
            <NutritionTable title="Macronutrients" rows={macronutrients} />
            <NutritionTable title="Vitamins & Minerals (min. per 100 g)" rows={fortificants} />
          </div>
          <p className="mt-6 text-xs text-ink-400 italic border-t border-ink/10 pt-4">{nutritionNote}</p>
        </div>
      </section>

      <section className="container-page py-16">
        <h2 className="font-display text-2xl text-ink">Fortified with Vitamins & Minerals</h2>
        <p className="mt-3 text-ink-600 max-w-prose leading-relaxed">
          Mavuno Maize Flour is fortified with vitamins and minerals, as shown on the product packaging.
          The specific fortificants and their minimum levels per 100 g are listed above.
        </p>
        <p className="mt-3 text-xs text-ink-400 italic">
          This information is for product transparency and is not a health or medical claim. Mavuno does
          not claim to cure, prevent, or treat any disease.
        </p>
      </section>

      <section className="py-16 bg-forest-50 border-y border-forest-100">
        <div className="container-page">
          <h2 className="font-display text-2xl text-ink">Certifications</h2>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <CertificationCard key={cert.name} cert={cert} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
