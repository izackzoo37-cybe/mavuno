import type { ReactElement } from "react";

export type ValueIconName = "quality" | "trust" | "integrity" | "community";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const icons: Record<ValueIconName, ReactElement> = {
  quality: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M12 3.5 19 6v6c0 4.5-2.9 7.6-7 8.5-4.1-.9-7-4-7-8.5V6l7-2.5Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  trust: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8" />
      <path d="m8 12 3 3 5-6" />
    </svg>
  ),
  integrity: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M12 3v3.5M12 17.5V21M4.5 12H8M16 12h3.5" />
      <circle cx="12" cy="12" r="5.5" />
    </svg>
  ),
  community: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <circle cx="8.5" cy="9" r="2.5" />
      <circle cx="16" cy="9.5" r="2" />
      <path d="M3.5 19c.6-3 2.4-4.8 5-4.8s4.4 1.8 5 4.8" />
      <path d="M14.5 14.6c2 .2 3.4 1.8 4 4.4" />
    </svg>
  ),
};

export default function ValueIcon({ name }: { name: ValueIconName }) {
  return (
    <span aria-hidden="true" className="block w-6 h-6">
      {icons[name]}
    </span>
  );
}
