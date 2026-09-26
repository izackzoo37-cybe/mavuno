import type { ReactElement } from "react";

// Simple, brand-neutral line icons for each social platform. Decorative only
// — the accessible label comes from the surrounding link's aria-label.
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const icons: Record<string, ReactElement> = {
  Facebook: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M14 9.5V7.2c0-.9.6-1.2 1.2-1.2H17V3h-2.6C12 3 11 4.6 11 6.9v2.6H9V12h2v9h3v-9h2.3l.4-2.5H14Z" fill="currentColor" stroke="none" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  ),
  TikTok: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M14 3v10.8a3.2 3.2 0 1 1-2.6-3.15" />
      <path d="M14 3c.5 2.4 2.2 4 4.6 4.3" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <path d="M8 10.5v6M8 7.9v.1M12 16.5v-3.6c0-1.3.9-2.2 2.1-2.2 1.2 0 1.9.9 1.9 2.2v3.6" />
    </svg>
  ),
  YouTube: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <rect x="3" y="6" width="18" height="12" rx="3.5" />
      <path d="m10.5 9.7 4.2 2.3-4.2 2.3V9.7Z" fill="currentColor" stroke="none" />
    </svg>
  ),
  X: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M5 5 19 19M19 5 5 19" />
    </svg>
  ),
};

export default function SocialIcon({ platform }: { platform: string }) {
  const icon = icons[platform];
  if (!icon) return null;
  return (
    <span aria-hidden="true" className="block w-[18px] h-[18px]">
      {icon}
    </span>
  );
}
