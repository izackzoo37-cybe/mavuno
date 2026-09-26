import Button from "./Button";

interface CTASectionProps {
  heading?: string;
  text?: string;
  ctaLabel?: string;
  ctaTo?: string;
}

export default function CTASection({
  heading = "Want to know more about Mavuno?",
  text = "Reach out to our team for enquiries, orders, or partnership opportunities.",
  ctaLabel = "Contact Us",
  ctaTo = "/contact",
}: CTASectionProps) {
  return (
    <section className="bg-forest text-harvest-50">
      <div className="container-page py-16 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl">{heading}</h2>
          <p className="mt-2 text-harvest-100/90 max-w-md">{text}</p>
        </div>
        <Button to={ctaTo} variant="primary" className="shrink-0">
          {ctaLabel}
        </Button>
      </div>
    </section>
  );
}
