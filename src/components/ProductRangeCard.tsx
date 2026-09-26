import type { ProductSize } from "../data/productInfo";

export default function ProductRangeCard({
  product,
  onView,
}: {
  product: ProductSize;
  onView: (size: ProductSize["size"]) => void;
}) {
  return (
    <article className="group relative bg-white rounded-2xl border border-ink/10 overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-maize/50">
      <div className="relative aspect-[4/3] bg-harvest-50 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.imageAlt}
          loading="lazy"
          className="max-h-[85%] w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <p className="text-[0.7rem] font-semibold tracking-wide text-mavred uppercase">
          Mavuno Maize Flour
        </p>
        <h3 className="mt-1.5 font-display text-xl text-ink">{product.label} Pack</h3>
        <p className="mt-2 text-sm text-ink-400 leading-relaxed">{product.description}</p>
        <button
          type="button"
          onClick={() => onView(product.size)}
          className="group/btn mt-5 inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-mavred transition-colors"
        >
          View Product
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
