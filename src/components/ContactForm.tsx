import { useState, type FormEvent } from "react";

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

const initialState: FormState = {
  fullName: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

type Errors = Partial<Record<keyof FormState, string>>;
type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  function validate(values: FormState): Errors {
    const next: Errors = {};
    if (!values.fullName.trim()) next.fullName = "Please enter your full name.";
    if (!values.phone.trim()) next.phone = "Please enter a phone number.";
    if (!values.email.trim()) {
      next.email = "Please enter an email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!values.subject.trim()) next.subject = "Please enter a subject.";
    if (!values.message.trim()) next.message = "Please enter your message.";
    return next;
  }

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    try {
      // NOTE: No email/backend service is connected yet. This is a client-side
      // stub only. Wire this up to a real form service or API before launch —
      // do not present this as a working submission until it is.
      await new Promise((resolve) => setTimeout(resolve, 900));
      throw new Error("no-service-configured");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-forest/30 bg-forest-50 p-8 text-center">
        <p className="font-display text-xl text-forest">Message sent</p>
        <p className="mt-2 text-sm text-ink-600">Thank you — our team will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-5">
      {status === "error" && (
        <div role="alert" className="border border-mavred/40 bg-mavred/5 text-mavred-700 text-sm p-4">
          This form is not yet connected to an email or backend service, so your message could not be
          sent. Please use the phone, WhatsApp, or email details provided instead.
        </div>
      )}

      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-ink-600 mb-1.5">
          Full Name
        </label>
        <input
          id="fullName"
          type="text"
          value={form.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
          aria-invalid={!!errors.fullName}
          aria-describedby={errors.fullName ? "fullName-error" : undefined}
          className="w-full border border-ink/20 px-4 py-3 bg-white focus:border-forest outline-none"
        />
        {errors.fullName && (
          <p id="fullName-error" className="mt-1 text-sm text-mavred">
            {errors.fullName}
          </p>
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-ink-600 mb-1.5">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className="w-full border border-ink/20 px-4 py-3 bg-white focus:border-forest outline-none"
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-sm text-mavred">
              {errors.phone}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-ink-600 mb-1.5">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="w-full border border-ink/20 px-4 py-3 bg-white focus:border-forest outline-none"
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-mavred">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-ink-600 mb-1.5">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          value={form.subject}
          onChange={(e) => handleChange("subject", e.target.value)}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          className="w-full border border-ink/20 px-4 py-3 bg-white focus:border-forest outline-none"
        />
        {errors.subject && (
          <p id="subject-error" className="mt-1 text-sm text-mavred">
            {errors.subject}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink-600 mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(e) => handleChange("message", e.target.value)}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="w-full border border-ink/20 px-4 py-3 bg-white focus:border-forest outline-none"
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-mavred">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center px-7 py-3.5 bg-mavred text-harvest-50 font-semibold disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
