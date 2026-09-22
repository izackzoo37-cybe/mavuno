import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import SectionHeading from "../components/SectionHeading";
import ContactForm from "../components/ContactForm";
import { contactInfo, socialLinks } from "../data/contactInfo";
import { siteConfig } from "../data/siteConfig";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Mavuno Maize Flour — visit us on Makama Road, Njiru, off Kagundo Road, Nairobi, or reach us by phone, WhatsApp or email."
        path="/contact"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Mavuno Maize Flour",
          url: siteConfig.siteUrl,
          email: contactInfo.email.general,
          telephone: contactInfo.phoneTel,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Makama Road, Njiru, off Kagundo Road",
            addressLocality: "Nairobi",
            addressCountry: "KE",
          },
          sameAs: socialLinks.map((s) => s.url),
        }}
      />
      <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "Contact" }]} />

      <section className="container-page py-14">
        <SectionHeading
          title="Contact Us"
          intro="We'd love to hear from you. Reach out using any of the channels below, or send us a message."
        />
      </section>

      <section className="container-page pb-20 grid lg:grid-cols-[1fr,1.2fr] gap-14">
        <div className="space-y-6">
          <div className="border-l-4 border-forest pl-5 py-1">
            <h2 className="font-display text-lg text-ink">Call Us</h2>
            <p className="mt-1 text-sm">
              <a href={`tel:${contactInfo.phoneTel}`} className="text-forest hover:underline">
                {contactInfo.phone}
              </a>
            </p>
          </div>

          <div className="border-l-4 border-forest pl-5 py-1">
            <h2 className="font-display text-lg text-ink">WhatsApp Us</h2>
            <p className="mt-1 text-sm">
              <a
                href={contactInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="text-forest hover:underline"
              >
                {contactInfo.whatsapp}
              </a>
            </p>
          </div>

          <div className="border-l-4 border-forest pl-5 py-1">
            <h2 className="font-display text-lg text-ink">Email Us</h2>
            <p className="mt-1 text-sm text-ink-600">
              General enquiries:{" "}
              <a href={`mailto:${contactInfo.email.general}`} className="text-forest hover:underline">
                {contactInfo.email.general}
              </a>
            </p>
            <p className="mt-1 text-sm text-ink-600">
              Sales enquiries:{" "}
              <a href={`mailto:${contactInfo.email.sales}`} className="text-forest hover:underline">
                {contactInfo.email.sales}
              </a>
            </p>
          </div>

          <div className="border-l-4 border-forest pl-5 py-1">
            <h2 className="font-display text-lg text-ink">Visit Us</h2>
            <p className="mt-1 text-sm text-ink-600">{contactInfo.physicalAddress}</p>
          </div>

          <div className="border-l-4 border-maize pl-5 py-1">
            <h2 className="font-display text-lg text-ink">Postal Address</h2>
            <p className="mt-1 text-sm text-ink-600">{contactInfo.postalAddress}</p>
          </div>

          <div className="border-l-4 border-maize pl-5 py-1">
            <h2 className="font-display text-lg text-ink">Follow Us</h2>
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
              {socialLinks.map((s) => (
                <li key={s.platform}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-forest hover:underline"
                  >
                    {s.platform}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-xs text-ink-400">@mavunomaizeflour on all platforms</p>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
