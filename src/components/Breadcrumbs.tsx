import { Link } from "react-router-dom";

interface Crumb {
  label: string;
  path?: string;
}

export default function Breadcrumbs({
  items,
  tone = "dark",
}: {
  items: Crumb[];
  tone?: "dark" | "light";
}) {
  const isLight = tone === "light";
  return (
    <nav
      aria-label="Breadcrumb"
      className={`container-page pt-6 text-sm ${isLight ? "text-harvest-100/80" : "text-ink-400"}`}
    >
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {item.path ? (
              <Link to={item.path} className={isLight ? "hover:text-maize-400" : "hover:text-forest"}>
                {item.label}
              </Link>
            ) : (
              <span className={isLight ? "text-harvest-50" : "text-ink-600"} aria-current="page">
                {item.label}
              </span>
            )}
            {i < items.length - 1 && <span aria-hidden="true">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
