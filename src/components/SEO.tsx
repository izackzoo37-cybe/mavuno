import { Helmet } from "react-helmet-async";
import { siteConfig } from "../data/siteConfig";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "product" | "article";
  structuredData?: Record<string, unknown>;
}

export default function SEO({
  title,
  description,
  path,
  image,
  type = "website",
  structuredData,
}: SEOProps) {
  const fullTitle = `${title} | Mavuno Maize Flour`;
  const url = `${siteConfig.siteUrl}${path}`;
  const ogImage = image ?? `${siteConfig.siteUrl}/og-image.jpg`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Mavuno Maize Flour" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
