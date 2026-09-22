import { useState } from "react";
import RecipeCard from "./RecipeCard";
import RecipeModal from "./RecipeModal";
import Button from "./Button";
import { recipes, type Recipe } from "../data/recipes";

export default function RecipesSection() {
  const [active, setActive] = useState<Recipe | null>(null);

  return (
    <section className="py-20">
      <div className="container-page">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl sm:text-4xl text-ink leading-tight">
            Made for Great Meals
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ink-600 leading-relaxed">
            Enjoy Mavuno ugali with some of Kenya's favorite hearty meals.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} onView={setActive} />
          ))}
        </div>

        <div className="mt-16 border-t border-ink/10 pt-12 text-center max-w-lg mx-auto">
          <h3 className="font-display text-2xl text-ink">What's on your plate today?</h3>
          <p className="mt-3 text-ink-400">
            Discover simple, satisfying ways to enjoy Mavuno maize flour.
          </p>
          <div className="mt-7">
            <Button to="/product" variant="primary">
              Discover Mavuno
            </Button>
          </div>
        </div>
      </div>

      {active && <RecipeModal recipe={active} onClose={() => setActive(null)} />}
    </section>
  );
}
