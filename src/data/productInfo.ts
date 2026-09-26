// Product data sourced from the supplied Mavuno packaging image only.
// Do not add claims that are not printed on the pack without client confirmation.
import mavuno1kg from "../assets/mavuno-1kg.webp";
import mavuno2kg from "../assets/mavuno-2kg.webp";

export const productInfo = {
  brand: "Mavuno",
  name: "Mavuno Maize Flour",
  positioning: "Premium Maize Flour",
  classification: "Grade 1 Sifted Maize Meal",
  localName: "Unga Safi wa Mahindi",
  fortificationStatement: "Fortified with Vitamins & Minerals",
  netWeight: "1 Kg & 2 Kg",
  origin: "A Product of Kenya",
  ingredients: "Maize grains, Vitamins and Minerals",
  storageInstructions:
    "Human food. Store in a cool, dry place away from contamination.",
  manufacturer: {
    name: "Mavach Investments Ltd.",
    poBox: "P.O. Box 1325-00606, Nairobi",
    tel: "0726995059",
    verificationNote:
      "Manufacturer and contact details shown on packaging — client verification required before this information is treated as the official public contact channel.",
  },
  barcode: "[CLIENT TO VERIFY]", // pack shows 0792382562640 but image resolution is not guaranteed
};

export interface ProductSize {
  size: "1kg" | "2kg";
  label: string;
  image: string;
  imageAlt: string;
  description: string;
  highlights: string[];
}

// The two real Mavuno pack sizes. No other sizes exist — do not add more
// without a genuine supplied product photo.
export const productSizes: ProductSize[] = [
  {
    size: "1kg",
    label: "1 KG",
    image: mavuno1kg,
    imageAlt: "Mavuno Maize Flour, 1kg pack, fortified sifted maize meal",
    description: "Quality sifted maize meal made for delicious everyday meals.",
    highlights: [
      "Sifted maize meal",
      "Fortified with vitamins & minerals",
      "A convenient size for smaller households",
    ],
  },
  {
    size: "2kg",
    label: "2 KG",
    image: mavuno2kg,
    imageAlt: "Mavuno Maize Flour, 2kg pack, fortified sifted maize meal",
    description: "Quality sifted maize meal made for delicious everyday meals.",
    highlights: [
      "Sifted maize meal",
      "Fortified with vitamins & minerals",
      "Made for everyday family meals",
    ],
  },
];

export const whyMavuno = [
  {
    title: "Premium Quality",
    description: "Grade 1 sifted maize meal.",
  },
  {
    title: "Fortified",
    description: "Fortified with vitamins and minerals.",
  },
  {
    title: "Kenyan Product",
    description: "Presented on the pack as a product of Kenya.",
  },
  {
    title: "Quality Focus",
    description: "Packaged with a professional, quality-focused presentation.",
  },
];

// Feature blocks for the Product page's "Why Mavuno?" section.
export const productFeatures = [
  {
    title: "Quality",
    description: "Carefully processed maize flour for consistent everyday meals.",
  },
  {
    title: "Fortified",
    description:
      "The product packaging identifies it as fortified with vitamins and minerals.",
  },
  {
    title: "Sifted",
    description: "Smooth sifted maize meal suitable for preparing delicious ugali.",
  },
  {
    title: "Everyday Meals",
    description: "Made to be enjoyed as part of everyday family meals.",
  },
];
