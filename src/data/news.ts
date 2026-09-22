import advertisementPoster from "../assets/mavuno-advertisement-poster.jpg";
import openingWeek1 from "../assets/opening-week-1.jpg";
import openingWeek2 from "../assets/opening-week-2.jpg";
import openingWeek3 from "../assets/opening-week-3.jpg";
import openingWeek4 from "../assets/opening-week-4.jpg";

export interface ArticleBlock {
  heading?: string;
  paragraphs: string[];
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  image?: string;
  imageAlt?: string;
  video?: string;
  videoPoster?: string;
  learnMoreLink?: string;
  category:
    | "Company News"
    | "Events"
    | "Product Updates"
    | "Community"
    | "Promotions"
    | "Advertisement";
  summary: string;
  body?: ArticleBlock[];
  gallery?: GalleryImage[];
  closing?: string[];
}

export const newsArticles: NewsArticle[] = [
  {
    id: "mavuno-opening-week",
    title: "Mavuno Maize Flour Officially Opens: A New Chapter in Quality and Nutrition",
    date: "September 2026",
    category: "Company News",
    image: openingWeek1,
    imageAlt:
      "Mavuno team members in branded coats and hairnets gathered around the packing table during opening week",
    summary:
      "Mavuno Maize Flour has marked an important milestone with its opening week, officially introducing the brand and its products to customers, partners and the wider community.",
    body: [
      {
        paragraphs: [
          "We are excited to celebrate an important milestone in the journey of Mavuno Maize Flour — our official opening and the beginning of a new chapter dedicated to providing quality maize flour products to Kenyan families and communities.",
          "Our opening week brought together members of our team, partners, customers, friends and members of the community as we officially began this exciting journey.",
        ],
      },
      {
        heading: "A New Beginning for Mavuno",
        paragraphs: [
          "The opening marks more than the beginning of a business. It represents our commitment to building a food brand focused on quality, consistency, reliability and customer satisfaction.",
          "At Mavuno, we believe that good food begins with quality ingredients and careful processing. Our goal is to provide maize flour that families can confidently use in preparing everyday meals.",
        ],
      },
      {
        heading: "Celebrating With Our Community",
        paragraphs: [
          "Our opening week was an opportunity to meet and interact with the people who will be part of the Mavuno journey.",
          "From conversations with customers and partners to moments of celebration with our team, the week gave us an opportunity to introduce our brand and share our vision.",
        ],
      },
    ],
    gallery: [
      {
        src: openingWeek1,
        alt: "Mavuno team members in branded coats and hairnets gathered around the packing table during opening week",
      },
      {
        src: openingWeek2,
        alt: "Staff in Mavuno branded coats standing beside the weighing scale at the milling plant",
      },
      {
        src: openingWeek3,
        alt: "A team member presenting a pack of flour to colleagues while the moment is recorded on a tablet",
      },
      {
        src: openingWeek4,
        alt: "Staff weighing and filling flour packs at the production line during opening week",
      },
    ],
    closing: [
      "We are grateful to everyone who visited, supported us, shared our story and contributed to making the opening week memorable.",
    ],
  },
  {
    id: "mavuno-advertisement",
    title: "Discover Mavuno Maize Flour",
    date: "September 2026",
    category: "Advertisement",
    video: "/videos/mavuno-advertisement.mp4",
    videoPoster: advertisementPoster,
    learnMoreLink: "/manufacturing",
    summary:
      "Take a closer look at the journey from carefully selected maize to quality flour.",
  },
];

// Additional narrative sections for the opening-week feature, shown after the
// photo gallery on the News page.
export const openingWeekFollowUp: ArticleBlock[] = [
  {
    heading: "Our Commitment to Quality",
    paragraphs: [
      "Quality is at the heart of what we do.",
      "Mavuno Maize Flour is committed to maintaining appropriate standards throughout the production process, from sourcing and handling raw materials to milling, packaging and distribution.",
      "We understand that maize flour is an important part of everyday meals for many Kenyan households. That is why we are committed to continually improving our processes and delivering products that meet the expectations of our customers.",
    ],
  },
  {
    heading: "Looking Ahead",
    paragraphs: [
      "Opening week is only the beginning.",
      "As Mavuno grows, we look forward to reaching more households, retailers, institutions and business partners across our market.",
      "We also look forward to introducing more products, strengthening our distribution network and creating lasting relationships with our customers and partners.",
      "Our journey is built around a simple idea: Quality food. Strong communities. A better tomorrow.",
    ],
  },
  {
    heading: "Thank You for Being Part of Our Journey",
    paragraphs: [
      "To everyone who joined us during our opening week — thank you.",
      "Your support, encouragement and trust mean a great deal to us. We invite you to continue following Mavuno as we grow, innovate and serve our customers.",
      "Follow us for updates, product information, recipes, company news and upcoming events.",
    ],
  },
];
