import SEO from "../components/SEO";
import RecipesSection from "../components/RecipesSection";
import { recipes } from "../data/recipes";

export default function Recipes() {
  return (
    <>
      <SEO
        title="Recipes"
        description="Six official Mavuno recipes — Ugali & Fish, Beef Stew, Chicken, Kales, Eggs and Omena — made with Mavuno Maize Flour."
        path="/recipes"
        image={recipes[0].image}
      />
      <RecipesSection showBreadcrumbs />
    </>
  );
}
