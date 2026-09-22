import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import { companyInfo } from "../data/companyInfo";
import teamPhoto from "../assets/opening-week-1.jpg";
import millPhoto from "../assets/opening-week-4.jpg";

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Mavuno Maize Flour is a Kenyan maize flour brand committed to providing quality maize meal for everyday family meals."
        path="/about"
      />
      <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "About Us" }]} />

      <section className="container-page py-14">
        <SectionHeading title="About the Company" intro={companyInfo.aboutCompany} />
        <p className="mt-4 max-w-2xl text-ink-600 leading-relaxed">
          {companyInfo.aboutCompanySecondary}
        </p>
      </section>

      <section className="py-16 bg-white border-y border-ink/10">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-2xl text-ink">Our Story</h2>
            {companyInfo.ourStory.map((paragraph) => (
              <p key={paragraph} className="mt-3 text-ink-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <img
            src={teamPhoto}
            alt="Mavuno team members in branded coats and hairnets at the production facility"
            loading="lazy"
            className="w-full aspect-[4/3] object-cover"
          />
        </div>
      </section>

      <section className="container-page py-16 grid sm:grid-cols-2 gap-10">
        <div>
          <h2 className="font-display text-2xl text-ink">Mission</h2>
          <p className="mt-3 text-ink-600 leading-relaxed">{companyInfo.mission}</p>
        </div>
        <div>
          <h2 className="font-display text-2xl text-ink">Vision</h2>
          <p className="mt-3 text-ink-600 leading-relaxed">{companyInfo.vision}</p>
        </div>
      </section>

      <section className="py-16 bg-forest-50 border-y border-forest-100">
        <div className="container-page">
          <h2 className="font-display text-2xl text-ink">Core Values</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyInfo.coreValues.map((value) => (
              <div key={value.title} className="border-l-4 border-forest pl-5 py-1">
                <h3 className="font-display text-lg">{value.title}</h3>
                <p className="mt-1.5 text-sm text-ink-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <h2 className="font-display text-2xl text-ink">Commitment to Quality</h2>
        <p className="mt-3 max-w-2xl text-ink-600 leading-relaxed">{companyInfo.qualityCommitment}</p>
      </section>

      <section className="py-16 bg-white border-y border-ink/10">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <img
            src={millPhoto}
            alt="Mavuno staff weighing and filling flour packs at the milling facility"
            loading="lazy"
            className="w-full aspect-[4/3] object-cover"
          />
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-2xl text-ink">Our People</h2>
              <p className="mt-3 text-ink-600 leading-relaxed">{companyInfo.ourPeople}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-ink">Our Facility</h2>
              <p className="mt-3 text-ink-600 leading-relaxed">{companyInfo.facility}</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
