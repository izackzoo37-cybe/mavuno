import Button from "./Button";

interface CTASectionProps {
  heading?: string;
  text?: string;
  ctaLabel?: string;
  ctaTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}

export default function CTASection({
  heading = "Want to know more about Mavuno?",
  text = "Reach out to our team for enquiries, orders, or partnership opportunities.",
  ctaLabel = "Contact Us",
  ctaTo = "/contact",
  secondaryLabel,
  secondaryTo,
}: CTASectionProps) {
  return (
    <section className="bg-forest text-harvest-50">
      <div className="container-page py-16 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl">{heading}</h2>
          <p className="mt-2 text-harvest-100/90 max-w-md">{text}</p>
        </div>
        <div className="flex flex-wrap gap-4 shrink-0">
          <Button to={ctaTo} variant="primary">
            {ctaLabel}
          </Button>
          {secondaryLabel && secondaryTo && (
            <Button
              to={secondaryTo}
              variant="ghost"
              className="!border-harvest-50/40 !text-harvest-50 hover:!border-maize-400 hover:!text-maize-400"
            >
              {secondaryLabel}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
