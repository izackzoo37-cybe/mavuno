import { Link } from "react-router-dom";
import type { ReactNode } from "react";

interface ButtonProps {
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

export default function Button({
  to,
  href,
  onClick,
  type = "button",
  variant = "primary",
  children,
  className = "",
  disabled,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-[0.95rem] font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  const variants: Record<string, string> = {
    primary: "bg-mavred text-harvest-50 hover:bg-mavred-700",
    secondary: "bg-forest text-harvest-50 hover:bg-forest-700",
    ghost: "border border-ink/20 text-ink hover:border-forest hover:text-forest",
  };
  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
