import type { NewsArticle, ArticleBlock } from "../data/news";

export default function FeatureArticle({
  article,
  followUp,
}: {
  article: NewsArticle;
  followUp?: ArticleBlock[];
}) {
  return (
    <article className="bg-white border border-ink/10">
      {article.image && (
        <img
          src={article.image}
          alt={article.imageAlt ?? ""}
          className="w-full aspect-[16/9] object-cover"
        />
      )}

      <div className="p-6 sm:p-10">
        <p className="text-xs uppercase tracking-wide text-mavred font-semibold">
          {article.category}
        </p>
        <h3 className="mt-2 font-display text-2xl sm:text-3xl text-ink leading-tight">
          {article.title}
        </h3>
        <p className="mt-2 text-sm text-ink-400">{article.date}</p>

        <div className="mt-6 max-w-prose">
          {article.body?.map((block) => (
            <section key={block.heading ?? block.paragraphs[0]} className="mb-6">
              {block.heading && (
                <h4 className="font-display text-xl text-forest mb-3">{block.heading}</h4>
              )}
              {block.paragraphs.map((p) => (
                <p key={p} className="mt-3 first:mt-0 text-ink-600 leading-relaxed">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>

        {article.gallery && article.gallery.length > 0 && (
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {article.gallery.map((image) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full aspect-[4/3] object-cover"
              />
            ))}
          </div>
        )}

        {article.closing && (
          <div className="mt-8 max-w-prose">
            {article.closing.map((p) => (
              <p key={p} className="text-ink-600 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        )}

        {followUp && (
          <div className="mt-8 max-w-prose">
            {followUp.map((block) => (
              <section key={block.heading ?? block.paragraphs[0]} className="mb-6">
                {block.heading && (
                  <h4 className="font-display text-xl text-forest mb-3">{block.heading}</h4>
                )}
                {block.paragraphs.map((p) => (
                  <p key={p} className="mt-3 first:mt-0 text-ink-600 leading-relaxed">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>
        )}

        <p className="mt-8 pt-6 border-t border-ink/10 font-display text-lg text-forest">
          Mavuno Maize Flour — Growing Together, Nourishing Communities.
        </p>
      </div>
    </article>
  );
}
