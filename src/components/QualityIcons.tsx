import type { ReactElement } from "react";

export type QualityIconName = "maize" | "sifted" | "consistent" | "everyday";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const icons: Record<QualityIconName, ReactElement> = {
  maize: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M12 3c2.5 2 4 5 4 8.5A4 4 0 0 1 8 11.5C8 8 9.5 5 12 3Z" />
      <path d="M12 21v-9" />
      <path d="M8.5 13.5 12 12l3.5 1.5" />
    </svg>
  ),
  sifted: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M5 5h14l-4.5 7v6l-5 2v-8L5 5Z" />
    </svg>
  ),
  consistent: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M12 3.5 19 6v6c0 4.5-2.9 7.6-7 8.5-4.1-.9-7-4-7-8.5V6l7-2.5Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  everyday: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M4 12a8 8 0 0 0 16 0Z" />
      <path d="M4 12a8 8 0 0 1 16 0" strokeDasharray="1 3" />
      <path d="M9 12v-1.5M12 12V9M15 12v-1.5" />
    </svg>
  ),
};

export default function QualityIcon({ name }: { name: QualityIconName }) {
  return (
    <span aria-hidden="true" className="block w-6 h-6">
      {icons[name]}
    </span>
  );
}
