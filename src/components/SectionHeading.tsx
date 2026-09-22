interface SectionHeadingProps {
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  eyebrow?: string;
  as?: "h1" | "h2";
}

export default function SectionHeading({
  title,
  intro,
  align = "left",
  tone = "dark",
  eyebrow,
  as = "h2",
}: SectionHeadingProps) {
  const Heading = as;
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`text-sm font-semibold tracking-wide mb-3 ${
            tone === "light" ? "text-maize-400" : "text-mavred"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <Heading
        className={`font-display text-3xl sm:text-4xl leading-tight ${
          tone === "light" ? "text-harvest-50" : "text-ink"
        }`}
      >
        {title}
      </Heading>
      {intro && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            tone === "light" ? "text-harvest-100" : "text-ink-600"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
