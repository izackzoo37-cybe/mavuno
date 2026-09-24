import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { primaryNavLinks } from "../data/siteConfig";
import logo from "../assets/mavuno-logo.png";

const SCROLL_THRESHOLD = 24;

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.2 0-2.34-.26-3.36-.73L4 20l1.02-4.53A8.44 8.44 0 0 1 3.5 11.5 8.5 8.5 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5Z" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const { pathname } = useLocation();

  const isHome = pathname === "/";
  const overlay = isHome && !scrolled;

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    }
    // Close the mobile menu and recompute the scrolled state whenever the
    // route changes (e.g. after client-side navigation resets scroll).
    function closeMenu() {
      setOpen(false);
    }
    closeMenu();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function linkClasses({ isActive }: { isActive: boolean }) {
    const base =
      "group relative inline-flex items-center gap-1.5 py-2 text-[0.9rem] tracking-wide transition-colors duration-200";
    const color = overlay
      ? isActive
        ? "text-harvest-50 font-semibold"
        : "text-harvest-50/85 font-medium hover:text-harvest-50"
      : isActive
        ? "text-forest font-semibold"
        : "text-ink-600 font-medium hover:text-forest";
    return `${base} ${color}`;
  }

  function underlineClasses(isActive: boolean) {
    const activeColor = overlay ? "bg-maize-400" : "bg-forest";
    return `pointer-events-none absolute left-0 -bottom-0.5 h-0.5 rounded-full transition-all duration-250 ${
      isActive ? `w-full ${activeColor}` : `w-0 ${activeColor} group-hover:w-full`
    }`;
  }

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
          overlay
            ? "bg-transparent"
            : "bg-harvest-50/95 backdrop-blur border-b border-ink/10 shadow-sm"
        }`}
      >
        {overlay && (
          <div
            className="absolute inset-0 bg-gradient-to-b from-ink/45 via-ink/10 to-transparent pointer-events-none"
            aria-hidden="true"
          />
        )}

        <div
          className={`relative container-page flex items-center justify-between transition-[padding] duration-300 ${
            scrolled ? "py-3" : "py-4 sm:py-5"
          }`}
        >
          <NavLink to="/" className="flex items-center gap-2 shrink-0" aria-label="Mavuno home">
            <img
              src={logo}
              alt="Mavuno Maize Flour"
              className={`w-auto object-contain transition-[height] duration-300 ${
                scrolled ? "h-10" : "h-12"
              }`}
            />
          </NavLink>

          <nav aria-label="Primary" className="hidden xl:flex items-center gap-5 2xl:gap-7">
            {primaryNavLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={linkClasses}
                end={link.path === "/"}
              >
                {({ isActive }) => (
                  <>
                    {link.path === "/where-to-buy" && <PinIcon />}
                    {link.label}
                    <span className={underlineClasses(isActive)} aria-hidden="true" />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden xl:block">
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-mavred text-harvest-50 font-semibold text-sm hover:bg-mavred-700 transition-colors"
            >
              <MessageIcon />
              Contact Us
            </NavLink>
          </div>

          <button
            ref={toggleRef}
            type="button"
            className="xl:hidden inline-flex flex-col justify-center gap-1.5 w-11 h-11 items-center"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <span
              className={`block h-0.5 w-6 transition-transform duration-200 ${
                overlay ? "bg-harvest-50" : "bg-ink"
              } ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 transition-opacity duration-200 ${
                overlay ? "bg-harvest-50" : "bg-ink"
              } ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 transition-transform duration-200 ${
                overlay ? "bg-harvest-50" : "bg-ink"
              } ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`xl:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          type="button"
          aria-hidden="true"
          tabIndex={-1}
          className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={`absolute top-0 right-0 h-full w-[85vw] max-w-sm bg-harvest-50 shadow-xl flex flex-col transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-5 h-20 border-b border-ink/10">
            <NavLink to="/" className="flex items-center" onClick={() => setOpen(false)}>
              <img src={logo} alt="Mavuno Maize Flour" className="h-10 w-auto object-contain" />
            </NavLink>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="w-11 h-11 inline-flex items-center justify-center text-ink hover:text-mavred"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>

          <nav aria-label="Mobile primary" className="flex-1 overflow-y-auto px-5 py-4">
            {primaryNavLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `flex items-center gap-2 py-4 text-base border-b border-ink/5 transition-colors ${
                    isActive ? "text-forest font-semibold" : "text-ink-600 font-medium"
                  }`
                }
              >
                {link.path === "/where-to-buy" && <PinIcon />}
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="p-5 border-t border-ink/10">
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-full bg-mavred text-harvest-50 font-semibold"
            >
              <MessageIcon />
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
