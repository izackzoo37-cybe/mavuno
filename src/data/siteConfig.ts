// Central site configuration. Edit here to update site-wide values.
export const siteConfig = {
  brandName: "Mavuno",
  productName: "Mavuno Maize Flour",
  slogan: "Unga Bora, Maisha Bora!",
  sloganTranslation: "Good Flour, Good Life!",
  siteUrl: "https://www.mavunomaizeflour.co.ke",
  defaultDescription:
    "Mavuno Maize Flour is a premium Grade 1 sifted maize meal, fortified with vitamins and minerals. A product of Kenya.",
  keywords: [
    "Mavuno Maize Flour",
    "Mavuno maize flour Kenya",
    "Mavuno flour",
    "maize flour Kenya",
    "premium maize flour Kenya",
    "Grade 1 sifted maize meal",
    "fortified maize flour",
    "Kenyan maize flour",
  ],
  currentYear: new Date().getFullYear(),
};

// Full site link list — used by the footer sitemap, which lists every page
// including Contact.
export const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Our Product", path: "/product" },
  { label: "Quality & Nutrition", path: "/quality-nutrition" },
  { label: "Manufacturing", path: "/manufacturing" },
  { label: "Recipes", path: "/recipes" },
  { label: "News & Events", path: "/news" },
  { label: "Where to Buy", path: "/where-to-buy" },
  { label: "Contact", path: "/contact" },
];

// Header primary navigation — excludes "Contact" since the header already
// carries a dedicated "Contact Us" CTA button that links to the same route.
// Routes whose top section is a full-bleed image, so the header should start
// transparent/overlaid and switch solid on scroll (same treatment as Home).
export const overlayHeaderRoutes = ["/", "/recipes", "/manufacturing", "/quality-nutrition", "/about"];

export const primaryNavLinks = navLinks.filter((link) => link.path !== "/contact");
