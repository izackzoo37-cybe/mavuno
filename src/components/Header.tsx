import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../data/siteConfig";
import logo from "../assets/mavuno-logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

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

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-[0.95rem] font-medium transition-colors hover:text-forest ${
      isActive ? "text-forest" : "text-ink-600"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-harvest-50/95 backdrop-blur border-b border-ink/10">
      <div className="container-page flex items-center justify-between h-20">
        <NavLink to="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
          <img src={logo} alt="Mavuno Maize Flour" className="h-12 w-auto object-contain" />
        </NavLink>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClass} end={link.path === "/"}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <NavLink
            to="/contact"
            className="inline-flex items-center px-5 py-2.5 bg-mavred text-harvest-50 font-semibold text-sm hover:bg-mavred-700 transition-colors"
          >
            Contact Us
          </NavLink>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="lg:hidden inline-flex flex-col justify-center gap-1.5 w-11 h-11 items-center"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span
            className={`block h-0.5 w-6 bg-ink transition-transform duration-200 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span className={`block h-0.5 w-6 bg-ink transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-0.5 w-6 bg-ink transition-transform duration-200 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        id="mobile-menu"
        ref={menuRef}
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out border-t border-ink/10 ${
          open ? "max-h-[32rem]" : "max-h-0 border-t-0"
        }`}
      >
        <nav aria-label="Mobile primary" className="container-page py-4 flex flex-col gap-1 bg-harvest-50">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `py-3 text-base font-medium border-b border-ink/5 ${isActive ? "text-forest" : "text-ink-600"}`
              }
              onClick={() => setOpen(false)}
              end={link.path === "/"}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center px-5 py-3 bg-mavred text-harvest-50 font-semibold"
          >
            Contact Us
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
