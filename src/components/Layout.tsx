import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { overlayHeaderRoutes } from "../data/siteConfig";

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const isOverlayPage = overlayHeaderRoutes.includes(pathname);

  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:z-[70] focus:top-2 focus:left-2 focus:bg-maize focus:text-ink focus:px-4 focus:py-2"
      >
        Skip to main content
      </a>
      <Header />
      {/* The header is fixed/overlaid, so most pages need top clearance.
          Pages listed in overlayHeaderRoutes start with a full-bleed section
          that intentionally runs under the transparent header instead. */}
      <main id="main-content" className={`flex-1 ${isOverlayPage ? "" : "pt-20 sm:pt-24"}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
