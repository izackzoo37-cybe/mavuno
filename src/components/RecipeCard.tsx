import type { Recipe } from "../data/recipes";

export default function RecipeCard({
  recipe,
  onView,
}: {
  recipe: Recipe;
  onView: (recipe: Recipe) => void;
}) {
  return (
    <article className="group bg-white border border-ink/10 overflow-hidden transition-shadow duration-300 hover:shadow-lg">
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
        {(recipe.cookingTime || recipe.servings) && (
          <div className="mt-4 flex flex-wrap gap-4 text-xs text-ink-400">
            {recipe.cookingTime && <span>{recipe.cookingTime}</span>}
            {recipe.servings && <span>{recipe.servings}</span>}
          </div>
        )}
        <button
          type="button"
          onClick={() => onView(recipe)}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-mavred transition-colors"
        >
          View Recipe
          <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </article>
  );
}
