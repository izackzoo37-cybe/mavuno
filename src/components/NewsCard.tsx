import { Link } from "react-router-dom";
import type { NewsArticle } from "../data/news";

export default function NewsCard({ article }: { article: NewsArticle }) {
  const thumbnail = article.videoPoster ?? article.image;

  return (
    <article className="group bg-white border border-ink/10 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-maize/50">
      {thumbnail && (
        <div className="relative aspect-video overflow-hidden bg-ink">
          <img
            src={thumbnail}
            alt={article.imageAlt ?? ""}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />
          {article.video && (
            <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
              <span className="w-12 h-12 rounded-full bg-harvest-50/90 flex items-center justify-center text-forest">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current ml-0.5">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          )}
        </div>
      )}
      <div className="p-6">
        <p className="text-xs uppercase tracking-wide text-mavred font-semibold">{article.category}</p>
        <h3 className="mt-2 font-display text-lg text-ink">{article.title}</h3>
        <p className="mt-2 text-sm text-ink-400 leading-relaxed">{article.summary}</p>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-xs text-ink-400">{article.date}</p>
          <Link
            to="/news"
            className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-forest hover:text-mavred transition-colors"
          >
            Read More
            <span aria-hidden="true" className="transition-transform duration-200 group-hover/link:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
