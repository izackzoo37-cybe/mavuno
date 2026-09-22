import { useEffect, useRef } from "react";
import type { Recipe } from "../data/recipes";

export default function RecipeModal({
  recipe,
  onClose,
}: {
  recipe: Recipe;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  const hasDetails = Boolean(recipe.ingredients?.length || recipe.instructions?.length);

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="recipe-modal-title"
    >
      <button
        type="button"
        aria-label="Close"
        className="absolute inset-0 bg-ink/70"
        onClick={onClose}
      />
      <div className="relative bg-harvest-50 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close recipe details"
          className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center bg-harvest-50/90 text-ink hover:text-mavred border border-ink/10 z-10"
        >
          <span aria-hidden="true" className="text-xl leading-none">×</span>
        </button>

        <img src={recipe.image} alt={recipe.imageAlt} className="w-full aspect-[4/3] object-cover" />

        <div className="p-7">
          <h2 id="recipe-modal-title" className="font-display text-2xl text-ink">
            {recipe.title}
          </h2>
          <p className="mt-3 text-ink-600 leading-relaxed">{recipe.description}</p>

          {(recipe.cookingTime || recipe.servings) && (
            <dl className="mt-5 flex flex-wrap gap-8 border-y border-ink/10 py-4 text-sm">
              {recipe.cookingTime && (
                <div>
                  <dt className="text-ink-400">Cooking time</dt>
                  <dd className="mt-0.5 font-semibold text-ink">{recipe.cookingTime}</dd>
                </div>
              )}
              {recipe.servings && (
                <div>
                  <dt className="text-ink-400">Serves</dt>
                  <dd className="mt-0.5 font-semibold text-ink">{recipe.servings}</dd>
                </div>
              )}
            </dl>
          )}

          {recipe.ingredients && recipe.ingredients.length > 0 && (
            <div className="mt-6">
              <h3 className="font-display text-lg text-forest">Ingredients</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink-600">
                {recipe.ingredients.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-maize shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {recipe.instructions && recipe.instructions.length > 0 && (
            <div className="mt-6">
              <h3 className="font-display text-lg text-forest">Preparation</h3>
              <ol className="mt-3 space-y-3 text-sm text-ink-600">
                {recipe.instructions.map((step, i) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-forest text-harvest-50 text-xs font-semibold shrink-0">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {!hasDetails && (
            <p className="mt-5 text-xs text-ink-400 italic border-t border-ink/10 pt-4">
              An official Mavuno recipe. The full ingredient list and preparation steps will be
              added here soon.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
