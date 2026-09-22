import Button from "./Button";

export default function CTASection() {
  return (
    <section className="bg-forest text-harvest-50">
      <div className="container-page py-16 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl">Want to know more about Mavuno?</h2>
          <p className="mt-2 text-harvest-100/90 max-w-md">
            Reach out to our team for enquiries, orders, or partnership opportunities.
          </p>
        </div>
        <Button to="/contact" variant="primary" className="shrink-0">
          Contact Us
        </Button>
      </div>
    </section>
  );
}
