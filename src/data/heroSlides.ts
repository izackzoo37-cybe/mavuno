// Hero slider content. Each slide's background comes from a real, supplied
// Mavuno photograph — nothing here is generated or invented.
import heroWelcome from "../assets/hero-welcome.jpg";
import heroProducts from "../assets/hero-products.jpg";
import heroManufacturing from "../assets/hero-manufacturing.jpg";
import heroRecipes from "../assets/hero-recipes.jpg";
import heroAvailability from "../assets/hero-availability.jpg";
import heroNews from "../assets/hero-news.jpg";

export interface HeroCTA {
  label: string;
  to: string;
}

export interface HeroSlide {
  id: string;
  badge: string;
  heading: string;
  description: string;
  primaryCta: HeroCTA;
  secondaryCta: HeroCTA;
  image: string;
  imageAlt: string;
  /** Focal point kept visible across breakpoints (CSS object-position). */
  focalPoint?: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: "welcome",
    badge: "Welcome to Mavuno",
    heading: "Quality Maize Flour for Every Home",
    description:
      "At Mavuno, we are committed to bringing you quality maize flour made for delicious, wholesome and satisfying meals every day.",
    primaryCta: { label: "Explore Our Products", to: "/product" },
    secondaryCta: { label: "Learn More", to: "/about" },
    image: heroWelcome,
    imageAlt: "Mavuno Maize Flour packs beside fresh corn cobs in a maize field",
    focalPoint: "80% 55%",
  },
  {
    id: "products",
    badge: "Our Products",
    heading: "Wholesome. Nutritious. Delicious.",
    description:
      "Discover Mavuno Maize Flour, carefully produced to deliver the taste, texture and quality your family can enjoy in every meal.",
    primaryCta: { label: "View Our Products", to: "/product" },
    secondaryCta: { label: "Why Choose Mavuno?", to: "/about" },
    image: heroProducts,
    imageAlt: "A Mavuno staff member holding a pack of Mavuno Maize Flour in the warehouse",
    focalPoint: "70% 40%",
  },
  {
    id: "manufacturing",
    badge: "Our Manufacturing Process",
    heading: "From Quality Maize to Quality Flour",
    description:
      "Every pack of Mavuno goes through a carefully managed production process designed to maintain quality, consistency and freshness from maize selection to the finished product.",
    primaryCta: { label: "Explore Our Process", to: "/manufacturing" },
    secondaryCta: { label: "Our Commitment to Quality", to: "/about" },
    image: heroManufacturing,
    imageAlt: "A technician operating the maize milling machine as flour is produced",
    focalPoint: "50% 35%",
  },
  {
    id: "recipes",
    badge: "Mavuno Recipes",
    heading: "Delicious Meals Start with Mavuno",
    description:
      "Get inspired with delicious recipes and meal ideas you can prepare with Mavuno Maize Flour. Discover simple ways to bring great taste to your table.",
    primaryCta: { label: "Explore Recipes", to: "/recipes" },
    secondaryCta: { label: "Get Inspired", to: "/recipes" },
    image: heroRecipes,
    imageAlt: "A family sharing a meal of ugali and stew together at the dining table",
    focalPoint: "50% 60%",
  },
  {
    id: "availability",
    badge: "Available Near You",
    heading: "Quality You Can Trust, Wherever You Are",
    description:
      "Mavuno Maize Flour is made to serve families, retailers, businesses and communities. Find out where you can get Mavuno products and stay connected with us.",
    primaryCta: { label: "Find Mavuno", to: "/where-to-buy" },
    secondaryCta: { label: "Contact Us", to: "/contact" },
    image: heroAvailability,
    imageAlt: "Stacked Mavuno Maize Flour stock ready for distribution in the warehouse",
    focalPoint: "50% 45%",
  },
  {
    id: "news",
    badge: "News & Events",
    heading: "What's Happening at Mavuno?",
    description:
      "Stay connected with the latest Mavuno news, events, activities, community moments, product updates and important announcements.",
    primaryCta: { label: "View News & Events", to: "/news" },
    secondaryCta: { label: "Latest Updates", to: "/news" },
    image: heroNews,
    imageAlt: "The Mavuno team celebrating together holding packs of Mavuno Maize Flour",
    focalPoint: "50% 30%",
  },
];
