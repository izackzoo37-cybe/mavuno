import { useEffect, useRef, useState } from "react";
import type { Recipe } from "../data/recipes";

export default function RecipeModal({
  recipe,
  onClose,
}: {
  recipe: Recipe;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const id = window.requestAnimationFrame(() => setEntered(true));

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      window.cancelAnimationFrame(id);
    };
  }, [onClose]);

  function handleBackdropClick(e: React.MouseEvent) {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <div
      className={`fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-8 bg-ink/70 transition-opacity duration-200 ${
        entered ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="recipe-modal-title"
        className={`relative bg-harvest-50 rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl transition-all duration-200 ${
          entered ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close recipe details"
          className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center rounded-full bg-harvest-50/90 text-ink hover:text-mavred border border-ink/10 z-10"
        >
          <span aria-hidden="true" className="text-xl leading-none">×</span>
        </button>

        <img
          src={recipe.image}
          alt={recipe.imageAlt}
          className="w-full aspect-[4/3] object-cover rounded-t-2xl"
        />

        <div className="p-6 sm:p-7">
          <p className="text-[0.7rem] font-semibold tracking-wide text-mavred uppercase">
            {recipe.category}
          </p>
          <h2 id="recipe-modal-title" className="mt-1.5 font-display text-2xl text-ink">
            {recipe.title}
          </h2>
          <p className="mt-2 text-ink-600 leading-relaxed">{recipe.description}</p>

          <div className="mt-4 flex items-center gap-6 border-y border-ink/10 py-3 text-sm font-semibold text-ink">
            <span className="inline-flex items-center gap-1.5">
              <span aria-hidden="true">⏱</span> {recipe.totalTime}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span aria-hidden="true">👥</span> Serves {recipe.servings}
            </span>
          </div>

          <div className="mt-5">
            <h3 className="font-display text-base text-forest">Ingredients</h3>
            <p className="mt-1.5 text-sm text-ink-600 leading-relaxed">
              {recipe.ingredients.join(", ")}.
            </p>
          </div>

          <div className="mt-4">
            <h3 className="font-display text-base text-forest">Method</h3>
            <p className="mt-1.5 text-sm text-ink-600 leading-relaxed">
              {recipe.instructions.join(" ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
