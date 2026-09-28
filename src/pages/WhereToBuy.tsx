import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import SectionHeading from "../components/SectionHeading";
import ManufacturingIcon from "../components/ManufacturingIcons";
import EmptyState from "../components/EmptyState";
import LocationCard from "../components/LocationCard";
import Button from "../components/Button";
import CTASection from "../components/CTASection";
import { buyChannels } from "../data/whereToBuy";
import { locations } from "../data/locations";
import { contactInfo } from "../data/contactInfo";

export default function WhereToBuy() {
  return (
    <>
      <SEO
        title="Where to Buy"
        description="Find Mavuno Maize Flour at retail outlets near you, or get in touch for wholesale enquiries."
        path="/where-to-buy"
      />
      <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "Where to Buy" }]} />

      <section className="container-page py-14">
        <SectionHeading
          title="Where to Buy Mavuno"
          intro="Mavuno Maize Flour is made for families, retailers and businesses alike. Find the option that fits you below."
        />
      </section>

      <section className="container-page pb-20">
        <div className="grid lg:grid-cols-2 gap-8">
          {buyChannels.map((channel) => (
            <div
              key={channel.id}
              className="bg-white border border-ink/10 rounded-2xl p-8 flex flex-col"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-forest-50 text-forest">
                <ManufacturingIcon name={channel.icon} />
              </div>
              <p className="mt-5 text-mavred font-semibold tracking-wide text-sm uppercase">
                {channel.eyebrow}
              </p>
              <h2 className="mt-2 font-display text-2xl text-ink">{channel.title}</h2>
              <p className="mt-3 text-ink-600 leading-relaxed">{channel.description}</p>

              <p className="mt-6 text-xs font-semibold tracking-wide text-ink-400 uppercase">
                For
              </p>
              <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
                {channel.forList.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink-600">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-maize shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                {channel.id === "wholesale" ? (
                  <Button href={`mailto:${contactInfo.email.sales}`} variant="primary">
                    {channel.ctaLabel}
                  </Button>
                ) : (
                  <Button to="/contact" variant="secondary">
                    {channel.ctaLabel}
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {locations.length > 0 ? (
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <LocationCard key={loc.name} location={loc} />
            ))}
          </div>
        ) : (
          <div className="mt-10">
            <EmptyState message="Specific retail locations will be listed here once confirmed." />
          </div>
        )}
      </section>

      <CTASection />
    </>
  );
}
