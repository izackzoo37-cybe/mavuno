import { useRef, useState } from "react";
import RecipeCard from "./RecipeCard";
import RecipeModal from "./RecipeModal";
import Breadcrumbs from "./Breadcrumbs";
import Button from "./Button";
import { recipes, type Recipe } from "../data/recipes";
import recipeBackground from "../assets/recipe-section-background.jpg";

export default function RecipesSection({
  showBreadcrumbs = false,
  as = "h1",
}: {
  showBreadcrumbs?: boolean;
  as?: "h1" | "h2";
}) {
  const [active, setActive] = useState<Recipe | null>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  function openRecipe(recipe: Recipe) {
    lastFocused.current = document.activeElement as HTMLElement | null;
    setActive(recipe);
  }

  function closeRecipe() {
    setActive(null);
    lastFocused.current?.focus();
  }

  return (
    <section className="relative overflow-hidden bg-forest">
      <img
        src={recipeBackground}
        alt=""
        aria-hidden="true"
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-forest-900/85" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-forest-900/40 via-transparent to-forest-900/60"
        aria-hidden="true"
      />

      {showBreadcrumbs && (
        <div className="relative pt-24 sm:pt-28">
          <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "Recipes" }]} tone="light" />
        </div>
      )}

      <div className={`relative container-page ${showBreadcrumbs ? "pt-8" : "pt-24 sm:pt-28"} pb-20`}>
        <div className="max-w-xl">
          <p className="text-maize-400 font-semibold tracking-wide text-sm uppercase">
            Our Recipes
          </p>
          {as === "h1" ? (
            <h1 className="mt-3 font-display text-3xl sm:text-4xl text-harvest-50 leading-tight">
              More Ways to Enjoy Mavuno
            </h1>
          ) : (
            <h2 className="mt-3 font-display text-3xl sm:text-4xl text-harvest-50 leading-tight">
              More Ways to Enjoy Mavuno
            </h2>
          )}
          <p className="mt-4 text-base sm:text-lg text-harvest-100/90 leading-relaxed">
            Explore our collection of meal ideas and discover delicious ways to enjoy Mavuno
            Maize Flour.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} onView={openRecipe} />
          ))}
        </div>

        <div className="mt-16 border-t border-harvest-50/15 pt-12 text-center max-w-lg mx-auto">
          <h2 className="font-display text-2xl text-harvest-50">What's on your plate today?</h2>
          <p className="mt-3 text-harvest-100/80">
            Discover simple, satisfying ways to enjoy Mavuno maize flour.
          </p>
          <div className="mt-7">
            <Button to="/product" variant="primary">
              Discover Mavuno
            </Button>
          </div>
        </div>
      </div>

      {active && <RecipeModal recipe={active} onClose={closeRecipe} />}
    </section>
  );
}
