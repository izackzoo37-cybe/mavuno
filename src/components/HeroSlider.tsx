import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { heroSlides } from "../data/heroSlides";
import { newsArticles } from "../data/news";

const AUTOPLAY_MS = 6000;

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [loaded, setLoaded] = useState<Set<number>>(() => new Set([0, 1]));
  const [reducedMotion, setReducedMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const containerRef = useRef<HTMLElement>(null);
  const touchStartX = useRef<number | null>(null);

  const count = heroSlides.length;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const goTo = useCallback((index: number) => {
    const next = ((index % count) + count) % count;
    setActive(next);
    setLoaded((prev) => {
      const updated = new Set(prev);
      updated.add(next);
      updated.add((next + 1) % count);
      return updated;
    });
  }, [count]);

  const goNext = useCallback(() => goTo(active + 1), [active, goTo]);
  const goPrev = useCallback(() => goTo(active - 1), [active, goTo]);

  // Autoplay
  useEffect(() => {
    if (paused || reducedMotion) return;
    const id = window.setInterval(() => {
      setActive((current) => {
        const next = (current + 1) % count;
        setLoaded((prev) => {
          const updated = new Set(prev);
          updated.add(next);
          updated.add((next + 1) % count);
          return updated;
        });
        return next;
      });
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, reducedMotion, count]);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goNext();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goPrev();
    }
  }

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 45) {
      if (delta < 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
  }

  function handleFocusCapture() {
    setPaused(true);
  }

  function handleBlurCapture(e: React.FocusEvent) {
    if (!containerRef.current?.contains(e.relatedTarget as Node)) {
      setPaused(false);
    }
  }

  const slide = heroSlides[active];
  const openingWeekArticle = newsArticles.find((a) => a.id === "mavuno-opening-week");

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-forest"
      aria-roledescription="carousel"
      aria-label="Mavuno highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={handleFocusCapture}
      onBlurCapture={handleBlurCapture}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Screen-reader announcement of slide changes */}
      <p className="sr-only" aria-live="polite">
        Slide {active + 1} of {count}: {slide.heading}
      </p>

      <div className="relative h-[86vh] min-h-[560px] max-h-[820px] sm:min-h-[620px]">
        {heroSlides.map((s, i) => (
          <div
            key={s.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
            aria-hidden={i !== active}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              i === active ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {loaded.has(i) && (
              <img
                src={s.image}
                alt={s.imageAlt}
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "auto"}
                className={`w-full h-full object-cover transition-transform ${
                  reducedMotion ? "" : "duration-[7000ms] ease-out"
                } ${i === active && !reducedMotion ? "scale-[1.06]" : "scale-100"}`}
                style={{ objectPosition: s.focalPoint ?? "center" }}
              />
            )}
            <div
              className="absolute inset-0 bg-gradient-to-r from-forest-900/90 via-forest-900/60 to-forest-900/20"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-forest-900/70 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>
        ))}

        <div className="relative z-20 h-full container-page flex items-center">
          <div key={slide.id} className="max-w-xl fade-up">
            <p className="text-maize-400 font-semibold tracking-wide text-sm uppercase">
              {slide.badge}
            </p>
            {active === 0 ? (
              <h1 className="mt-4 font-display text-3xl sm:text-5xl lg:text-[3.2rem] leading-[1.1] text-harvest-50">
                {slide.heading}
              </h1>
            ) : (
              <h2 className="mt-4 font-display text-3xl sm:text-5xl lg:text-[3.2rem] leading-[1.1] text-harvest-50">
                {slide.heading}
              </h2>
            )}
            <p className="mt-5 text-harvest-100/90 text-base sm:text-lg leading-relaxed max-w-md">
              {slide.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to={slide.primaryCta.to}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-mavred text-harvest-50 font-semibold text-sm hover:bg-mavred-700 transition-colors"
              >
                {slide.primaryCta.label}
              </Link>
              <Link
                to={slide.secondaryCta.to}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-harvest-50/40 text-harvest-50 font-semibold text-sm hover:border-maize-400 hover:text-maize-400 transition-colors"
              >
                {slide.secondaryCta.label}
              </Link>
            </div>

            {slide.id === "news" && openingWeekArticle && (
              <div className="mt-6 max-w-sm border border-harvest-50/25 bg-harvest-50/10 backdrop-blur-sm p-4">
                <p className="text-xs font-semibold tracking-wide text-maize-400 uppercase">
                  Latest Update
                </p>
                <p className="mt-1 font-display text-lg text-harvest-50">Mavuno Opening Week</p>
                <p className="mt-1 text-sm text-harvest-100/80 leading-relaxed">
                  Follow our latest activities, milestones and events as we continue growing
                  together with our customers and community.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Prev / Next arrows */}
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous slide"
          className="hidden sm:flex absolute z-20 left-3 lg:left-6 top-1/2 -translate-y-1/2 items-center justify-center w-11 h-11 rounded-full bg-harvest-50/15 text-harvest-50 hover:bg-harvest-50/25 backdrop-blur-sm transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Next slide"
          className="hidden sm:flex absolute z-20 right-3 lg:right-6 top-1/2 -translate-y-1/2 items-center justify-center w-11 h-11 rounded-full bg-harvest-50/15 text-harvest-50 hover:bg-harvest-50/25 backdrop-blur-sm transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>

        {/* Dot indicators */}
        <div className="absolute z-20 bottom-6 sm:bottom-8 left-0 right-0 flex justify-center gap-2.5">
          {heroSlides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}: ${s.badge}`}
              aria-current={i === active}
              className="p-2 -m-2"
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  i === active ? "w-7 h-2 bg-maize-400" : "w-2 h-2 bg-harvest-50/50"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
