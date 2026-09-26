import { useEffect, useState } from "react";
import Button from "./Button";
import { productSizes, type ProductSize } from "../data/productInfo";
import { siteConfig } from "../data/siteConfig";

export default function ProductShowcase({
  size,
  onSizeChange,
}: {
  size: ProductSize["size"];
  onSizeChange: (size: ProductSize["size"]) => void;
}) {
  const [entered, setEntered] = useState(false);
  const [reducedMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setEntered(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  const active = productSizes.find((p) => p.size === size) ?? productSizes[0];

  return (
    <section className="relative overflow-hidden bg-harvest-50 border-b border-ink/10">
      {/* Subtle maize/grain-inspired brand shapes, not generic SaaS decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute -left-24 -top-24 w-96 h-96 rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #F2A900 0%, transparent 70%)" }}
        />
        <div
          className="absolute -right-32 bottom-0 w-[28rem] h-[28rem] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #1C4A32 0%, transparent 70%)" }}
        />
        <svg
          className="absolute right-8 top-10 w-24 h-24 text-forest/10 hidden lg:block"
          viewBox="0 0 100 100"
          fill="none"
        >
          <path
            d="M50 5c15 15 22 35 15 55A17 17 0 0 1 33 55C33 35 40 15 50 5Z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="relative container-page py-16 lg:py-24 grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT — product presentation */}
        <div
          className={`relative transition-all duration-700 ease-out ${
            entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div
            className="relative mx-auto max-w-sm aspect-square rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at 50% 35%, rgba(255,255,255,0.9) 0%, rgba(247,244,236,0.4) 45%, transparent 70%)",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {productSizes.map((p) => {
                const isActive = p.size === size;
                const fromLeft = p.size === "1kg";
                return (
                  // Positioning layer: crossfade + slide when switching sizes
                  <div
                    key={p.size}
                    className={`absolute transition-all duration-500 ease-out ${
                      isActive
                        ? "opacity-100 translate-x-0 scale-100"
                        : `opacity-0 scale-95 pointer-events-none ${
                            fromLeft ? "-translate-x-6" : "translate-x-6"
                          }`
                    }`}
                  >
                    {/* Floating layer: independent continuous idle motion */}
                    <div className={isActive && !reducedMotion ? "animate-float" : ""}>
                      {/* Hover layer: independent tilt/scale, never fights the above */}
                      <img
                        src={p.image}
                        alt={p.imageAlt}
                        loading={p.size === productSizes[0].size ? "eager" : "lazy"}
                        className={`max-h-[22rem] w-auto object-contain transition-transform duration-300 ease-out drop-shadow-[0_25px_25px_rgba(28,74,50,0.25)] ${
                          reducedMotion ? "" : "hover:scale-105 hover:[transform:perspective(900px)_rotateY(-4deg)_scale(1.05)]"
                        }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Soft floor shadow */}
            <div
              className="absolute left-1/2 bottom-6 -translate-x-1/2 w-52 h-8 rounded-full bg-ink/15 blur-xl"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* RIGHT — content */}
        <div
          className={`transition-all duration-700 ease-out delay-150 ${
            entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-mavred font-semibold tracking-wide text-sm uppercase">
            {siteConfig.brandName} Maize Flour
          </p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl leading-tight text-ink">
            {siteConfig.productName}
          </h1>
          <p className="mt-2 font-display italic text-xl text-forest">{siteConfig.slogan}</p>
          <p className="mt-5 text-ink-600 text-lg leading-relaxed max-w-md">
            {active.description}
          </p>

          {/* Size selector */}
          <div
            role="group"
            aria-label="Choose pack size"
            className="mt-7 inline-flex rounded-xl border border-forest/20 p-1 bg-white"
          >
            {productSizes.map((p) => {
              const isActive = p.size === size;
              return (
                <button
                  key={p.size}
                  type="button"
                  onClick={() => onSizeChange(p.size)}
                  aria-pressed={isActive}
                  className={`relative px-6 py-3 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? "bg-forest text-harvest-50"
                      : "bg-transparent text-ink-600 border border-transparent hover:border-forest/30"
                  }`}
                >
                  <span className={isActive ? "border-b-2 border-maize-400 pb-0.5" : ""}>
                    {p.label}
                  </span>
                </button>
              );
            })}
          </div>

          <ul className="mt-7 space-y-2.5">
            {active.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-ink-600">
                <span className="mt-0.5 text-forest font-bold" aria-hidden="true">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button to="/where-to-buy" variant="primary">
              Where to Buy
            </Button>
            <Button to="/contact" variant="ghost">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
