import { useRef } from "react";
import { Link } from "react-router-dom";
import type { NewsArticle } from "../data/news";

export default function FeaturedVideoCard({ article }: { article: NewsArticle }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  function handleWatch() {
    const el = videoRef.current;
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    el.play().catch(() => {
      // Autoplay with sound can be blocked by the browser — the visible
      // controls let the person press play themselves in that case.
    });
  }

  return (
    <article className="border border-ink/10 bg-white overflow-hidden">
      <div className="bg-ink">
        <video
          ref={videoRef}
          controls
          preload="metadata"
          poster={article.videoPoster}
          className="w-full aspect-video block"
        >
          <source src={article.video} type="video/mp4" />
          Your browser does not support embedded video. You can download the video using the
          link below.
        </video>
      </div>

      <div className="p-6 sm:p-8">
        <p className="text-xs uppercase tracking-wide text-mavred font-semibold">
          {article.category}
        </p>
        <h3 className="mt-2 font-display text-xl sm:text-2xl text-ink">{article.title}</h3>
        <p className="mt-2 text-ink-600 leading-relaxed max-w-prose">{article.summary}</p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={handleWatch}
            className="inline-flex items-center justify-center px-6 py-3 bg-mavred text-harvest-50 font-semibold text-sm hover:bg-mavred-700 transition-colors"
          >
            Watch Video
          </button>
          {article.learnMoreLink && (
            <Link
              to={article.learnMoreLink}
              className="inline-flex items-center justify-center px-6 py-3 border border-ink/20 text-ink font-semibold text-sm hover:border-forest hover:text-forest transition-colors"
            >
              Learn More
            </Link>
          )}
          <p className="ml-auto text-xs text-ink-400">{article.date}</p>
        </div>
      </div>
    </article>
  );
}
