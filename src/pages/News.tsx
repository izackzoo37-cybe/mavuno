import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import SectionHeading from "../components/SectionHeading";
import FeatureArticle from "../components/FeatureArticle";
import FeaturedVideoCard from "../components/FeaturedVideoCard";
import NewsCard from "../components/NewsCard";
import EmptyState from "../components/EmptyState";
import CTASection from "../components/CTASection";
import { newsArticles, openingWeekFollowUp } from "../data/news";
import { contactInfo } from "../data/contactInfo";

export default function News() {
  const feature = newsArticles.find((a) => a.body);
  const videoArticles = newsArticles.filter((a) => a.video);
  const others = newsArticles.filter((a) => !a.body && !a.video);

  return (
    <>
      <SEO
        title="News & Events"
        description="Mavuno Maize Flour officially opens — news, updates and events from our opening week and beyond."
        path="/news"
        image={feature?.image}
      />
      <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "News & Events" }]} />

      <section className="container-page py-14">
        <SectionHeading title="News & Events" intro="Latest from Mavuno." />
      </section>

      <section className="container-page pb-20 space-y-12">
        {feature && (
          <div className="max-w-4xl">
            <FeatureArticle article={feature} followUp={openingWeekFollowUp} />
          </div>
        )}

        {videoArticles.length > 0 && (
          <div className="grid gap-8 max-w-3xl">
            {videoArticles.map((article) => (
              <FeaturedVideoCard key={article.id} article={article} />
            ))}
          </div>
        )}

        {others.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        )}

        {newsArticles.length === 0 && <EmptyState message="News and events coming soon." />}
      </section>

      <section className="py-14 bg-forest-50 border-y border-forest-100">
        <div className="container-page max-w-2xl">
          <h2 className="font-display text-2xl text-ink">Visit or Contact Mavuno</h2>
          <ul className="mt-4 space-y-2 text-ink-600">
            <li>Visit us: {contactInfo.physicalAddress}</li>
            <li>
              Call:{" "}
              <a href={`tel:${contactInfo.phoneTel}`} className="text-forest hover:underline">
                {contactInfo.phone}
              </a>
            </li>
            <li>
              WhatsApp:{" "}
              <a
                href={contactInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="text-forest hover:underline"
              >
                {contactInfo.whatsapp}
              </a>
            </li>
            <li>
              Email:{" "}
              <a
                href={`mailto:${contactInfo.email.general}`}
                className="text-forest hover:underline"
              >
                {contactInfo.email.general}
              </a>
            </li>
          </ul>
        </div>
      </section>

      <CTASection />
    </>
  );
}
