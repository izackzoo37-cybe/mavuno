import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import { privacyPolicy, termsConditions, type LegalDocument } from "../data/legal";

function LegalPage({ doc }: { doc: LegalDocument }) {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: doc.title }]} />
      <article className="container-page py-14 max-w-prose">
        <h1 className="font-display text-3xl sm:text-4xl text-ink">{doc.title}</h1>
        <p className="mt-2 text-sm text-ink-400">Last updated: {doc.lastUpdated}</p>

        <div className="mt-6 space-y-4">
          {doc.intro.map((p) => (
            <p key={p} className="text-ink-600 leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        {doc.sections.map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="font-display text-xl text-forest">{section.heading}</h2>
            {section.listIntro && (
              <p className="mt-3 text-ink-600 leading-relaxed">{section.listIntro}</p>
            )}
            {section.list && (
              <ul className="mt-3 space-y-2">
                {section.list.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-ink-600 leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 bg-maize shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {section.paragraphs?.map((p) => (
              <p key={p} className="mt-3 text-ink-600 leading-relaxed">
                {p}
              </p>
            ))}
          </section>
        ))}
      </article>
    </>
  );
}

export function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="How Mavuno Maize Flour collects, uses, stores and protects your personal information, in line with Kenya's Data Protection Act, 2019."
        path="/privacy-policy"
      />
      <LegalPage doc={privacyPolicy} />
    </>
  );
}

export function TermsConditions() {
  return (
    <>
      <SEO
        title="Terms & Conditions"
        description="The terms governing your use of the Mavuno Maize Flour website, products and services."
        path="/terms"
      />
      <LegalPage doc={termsConditions} />
    </>
  );
}
