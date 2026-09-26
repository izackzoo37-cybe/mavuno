import { useState } from "react";
import type { Recipe } from "../data/recipes";

export default function RecipeCard({
  recipe,
  onView,
}: {
  recipe: Recipe;
  onView: (recipe: Recipe) => void;
}) {
  const [revealed, setRevealed] = useState(false);

  return (
    <article className="group relative bg-white rounded-2xl border border-ink/10 overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-maize/50">
      <button
        type="button"
        onClick={() => setRevealed((r) => !r)}
        aria-expanded={revealed}
        aria-label={`${revealed ? "Hide" : "Show"} quick info for ${recipe.title}`}
        className="relative block w-full aspect-[4/3] overflow-hidden text-left"
      >
        <img
          src={recipe.image}
          alt={recipe.imageAlt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
        {/* Mavuno-green overlay that deepens on hover/reveal */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-forest-900/85 via-forest-900/10 to-transparent transition-opacity duration-300 ${
            revealed ? "opacity-100" : "opacity-60 group-hover:opacity-100"
          }`}
          aria-hidden="true"
        />
        <div
          className={`absolute inset-x-0 bottom-0 p-4 text-harvest-50 transition-all duration-300 ${
            revealed
              ? "translate-y-0 opacity-100"
              : "translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
          }`}
        >
          <p className="text-sm leading-snug">{recipe.description}</p>
          <div className="mt-2 flex items-center gap-4 text-xs font-semibold text-maize-400">
            <span>⏱ {recipe.totalTime}</span>
            <span>Serves {recipe.servings}</span>
          </div>
        </div>
      </button>

      <div className="p-6">
        <p className="text-[0.7rem] font-semibold tracking-wide text-mavred uppercase">
          {recipe.category}
        </p>
        <h3 className="mt-1.5 font-display text-xl text-ink">{recipe.title}</h3>
        <p className="mt-2 text-sm text-ink-400 leading-relaxed line-clamp-2">
          {recipe.description}
        </p>
        <button
          type="button"
          onClick={() => onView(recipe)}
          className="group/btn mt-5 inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-mavred transition-colors"
        >
          View Recipe
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover/btn:translate-x-1"
          >
            →
          </span>
        </button>
      </div>
    </article>
  );
}
