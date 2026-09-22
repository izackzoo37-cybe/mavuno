import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import RecipesSection from "../components/RecipesSection";

export default function Recipes() {
  return (
    <>
      <SEO
        title="Recipes"
        description="Official Mavuno recipes — Ugali & Fish, Ugali & Beef Stew, and Ugali & Chicken — made with Mavuno Maize Flour."
        path="/recipes"
      />
      <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "Recipes" }]} />

      <RecipesSection />

      <section className="py-16 bg-forest-50 border-y border-forest-100">
        <div className="container-page">
          <h2 className="font-display text-2xl text-ink">More From Mavuno</h2>
          <p className="mt-2 text-ink-400 max-w-prose">
            Full ingredient lists and step-by-step preparation instructions for these official
            Mavuno recipes will be added soon. More recipes will be published here as they are
            confirmed.
          </p>
        </div>
      </section>
    </>
  );
}
