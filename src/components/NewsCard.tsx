import type { NewsArticle } from "../data/news";

export default function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <article className="border border-ink/10 bg-white">
      {article.image && (
        <img src={article.image} alt={article.title} className="w-full h-48 object-cover" loading="lazy" />
      )}
      <div className="p-6">
        <p className="text-xs uppercase tracking-wide text-mavred font-semibold">{article.category}</p>
        <h3 className="mt-2 font-display text-lg text-ink">{article.title}</h3>
        <p className="mt-2 text-sm text-ink-400">{article.summary}</p>
        <p className="mt-3 text-xs text-ink-400">{article.date}</p>
      </div>
    </article>
  );
}
