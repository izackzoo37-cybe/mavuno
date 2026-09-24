import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:z-[70] focus:top-2 focus:left-2 focus:bg-maize focus:text-ink focus:px-4 focus:py-2"
      >
        Skip to main content
      </a>
      <Header />
      {/* The header is fixed/overlaid, so non-home pages need top clearance.
          The homepage hero intentionally starts at the very top, under the
          transparent header. */}
      <main id="main-content" className={`flex-1 ${isHome ? "" : "pt-20 sm:pt-24"}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
