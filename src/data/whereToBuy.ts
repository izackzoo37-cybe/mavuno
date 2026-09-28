// Retail and wholesale enquiry content for the Where to Buy page.
export interface BuyChannel {
  id: string;
  icon: "packaging" | "distribution";
  eyebrow: string;
  title: string;
  description: string;
  forList: string[];
  ctaLabel: string;
}

export const buyChannels: BuyChannel[] = [
  {
    id: "retail",
    icon: "packaging",
    eyebrow: "Retail",
    title: "Buy Mavuno for Your Everyday Meals",
    description:
      "Find Mavuno Maize Flour at retail outlets and shops near you. Available in convenient 1kg and 2kg packs, Mavuno is made for the everyday meals you enjoy at home.",
    forList: ["Supermarkets", "Shops", "Retail stores", "Local food outlets"],
    ctaLabel: "Find a Retailer",
  },
  {
    id: "wholesale",
    icon: "distribution",
    eyebrow: "Wholesale",
    title: "Stock Mavuno in Your Business",
    description:
      "Are you a wholesaler, distributor, retailer, hotel, school, institution or other business looking to purchase Mavuno Maize Flour in larger quantities? Get in touch with our team for wholesale enquiries.",
    forList: [
      "Wholesalers",
      "Distributors",
      "Retailers",
      "Hotels & restaurants",
      "Schools & institutions",
      "Bulk buyers",
    ],
    ctaLabel: "Wholesale Enquiry",
  },
];
