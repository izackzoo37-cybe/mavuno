import type { ReactElement } from "react";
import type { StageIcon } from "../data/manufacturingProcess";

// Small decorative line icons for the manufacturing process section.
// Icons are purely decorative — the step title and description carry the
// meaning — so each is rendered with aria-hidden="true" by the consumer.
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const icons: Record<StageIcon, ReactElement> = {
  sourcing: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M12 3c2.5 2 4 5 4 8.5A4 4 0 0 1 8 11.5C8 8 9.5 5 12 3Z" />
      <path d="M12 21v-9" />
      <path d="M8.5 13.5 12 12l3.5 1.5" />
    </svg>
  ),
  inspection: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <circle cx="10.5" cy="10.5" r="6" />
      <path d="m20 20-4.3-4.3" />
      <path d="m8 10.5 1.7 1.7L13.5 8" />
    </svg>
  ),
  cleaning: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M12 3v3" />
      <path d="m6.5 6.5 1.8 1.8" />
      <path d="m17.5 6.5-1.8 1.8" />
      <path d="M12 13c2.2 0 4 1.8 4 4 0 2-1.6 3.6-4 3.6S8 19 8 17c0-2.2 1.8-4 4-4Z" />
      <path d="M12 8v3" />
    </svg>
  ),
  milling: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 3.5v2.3M12 18.2v2.3M20.5 12h-2.3M5.8 12H3.5M17.8 6.2l-1.6 1.6M7.8 16.2l-1.6 1.6M17.8 17.8l-1.6-1.6M7.8 7.8 6.2 6.2" />
    </svg>
  ),
  sifting: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M5 5h14l-4.5 7v6l-5 2v-8L5 5Z" />
    </svg>
  ),
  fortification: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M12 4c1.8 1.6 3 3.9 3 6.5A3 3 0 0 1 9 10.5C9 7.9 10.2 5.6 12 4Z" />
      <path d="M12 21v-8.5" />
      <path d="M9 21h6" />
    </svg>
  ),
  qualityControl: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M12 3.5 19 6v6c0 4.5-2.9 7.6-7 8.5-4.1-.9-7-4-7-8.5V6l7-2.5Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  packaging: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M4 8.5 12 4l8 4.5v7L12 20l-8-4.5v-7Z" />
      <path d="M4 8.5 12 13l8-4.5" />
      <path d="M12 13v7" />
    </svg>
  ),
  storage: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M3.5 10 12 4l8.5 6" />
      <path d="M5 9.5V20h14V9.5" />
      <path d="M9.5 20v-5h5v5" />
    </svg>
  ),
  distribution: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M3 7h11v9H3z" />
      <path d="M14 10h4l3 3v3h-7z" />
      <circle cx="7.5" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </svg>
  ),
};

export default function ManufacturingIcon({ name }: { name: StageIcon }) {
  return (
    <span aria-hidden="true" className="block w-6 h-6">
      {icons[name]}
    </span>
  );
}
