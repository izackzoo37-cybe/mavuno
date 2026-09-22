import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import SectionHeading from "../components/SectionHeading";
import LocationCard from "../components/LocationCard";
import EmptyState from "../components/EmptyState";
import CTASection from "../components/CTASection";
import { locations } from "../data/locations";

export default function WhereToBuy() {
  return (
    <>
      <SEO
        title="Where to Buy"
        description="Find retailers, supermarkets, wholesalers, and distributors that stock Mavuno Maize Flour — coming soon."
        path="/where-to-buy"
      />
      <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "Where to Buy" }]} />

      <section className="container-page py-14">
        <SectionHeading title="Where to Buy Mavuno" intro="Retailer and distributor information coming soon." />
      </section>

      <section className="container-page pb-20">
        {locations.length === 0 ? (
          <EmptyState message="Retailer and distributor information coming soon." />
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <LocationCard key={loc.name} location={loc} />
            ))}
          </div>
        )}
      </section>

      <CTASection />
    </>
  );
}
