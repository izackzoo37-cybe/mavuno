import SEO from "../components/SEO";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you are looking for could not be found." path="/404" />
      <section className="container-page py-28 text-center">
        <p className="font-display text-6xl text-maize-600">404</p>
        <h1 className="mt-4 font-display text-3xl text-ink">Page not found</h1>
        <p className="mt-3 text-ink-400 max-w-md mx-auto">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <div className="mt-8">
          <Button to="/" variant="primary">
            Back to Home
          </Button>
        </div>
      </section>
    </>
  );
}
