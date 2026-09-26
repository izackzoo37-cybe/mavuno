// Official Mavuno recipes, confirmed by the client. No nutrition facts,
// calories, certifications or health claims are included since none have
// been supplied.
import ugaliFish from "../assets/ugali-fish.jpg";
import ugaliBeef from "../assets/ugali-beef.jpg";
import ugaliChicken from "../assets/ugali-chicken.jpg";
import ugaliKales from "../assets/ugali-kales.jpg";
import ugaliEggs from "../assets/ugali-eggs.jpg";
import ugaliOmena from "../assets/ugali-omena.jpg";

export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  category: string;
  ingredients: string[];
  /** Short, concise steps — rendered as brief prose, not a long numbered list. */
  instructions: string[];
  prepTime?: string;
  cookTime?: string;
  totalTime: string;
  servings: string;
}

export const recipes: Recipe[] = [
  {
    id: "ugali-fish",
    title: "Ugali & Fish",
    description: "A classic Kenyan meal pairing firm ugali with flavorful fish.",
    image: ugaliFish,
    imageAlt: "Mavuno ugali served with whole fried fish in tomato sauce",
    category: "Ugali Meal",
    ingredients: [
      "Mavuno Maize Flour",
      "fish",
      "tomatoes",
      "onions",
      "garlic",
      "ginger",
      "green pepper",
      "oil",
      "salt and spices",
    ],
    instructions: [
      "Prepare firm ugali.",
      "Fry/season the fish, then cook with a tomato-onion sauce.",
      "Serve hot.",
    ],
    totalTime: "40 min",
    servings: "4",
  },
  {
    id: "ugali-beef",
    title: "Ugali & Beef Stew",
    description: "A hearty combination of firm ugali and tender beef stew.",
    image: ugaliBeef,
    imageAlt: "Mavuno ugali served with beef stew",
    category: "Ugali Meal",
    ingredients: [
      "Mavuno Maize Flour",
      "beef",
      "tomatoes",
      "onions",
      "garlic",
      "ginger",
      "carrots",
      "green pepper",
      "oil and spices",
    ],
    instructions: [
      "Cook beef until tender.",
      "Prepare a tomato-based stew.",
      "Serve with hot ugali.",
    ],
    totalTime: "45 min",
    servings: "4",
  },
  {
    id: "ugali-chicken",
    title: "Ugali & Chicken",
    description: "Tender, flavorful chicken served with freshly prepared ugali.",
    image: ugaliChicken,
    imageAlt: "Mavuno ugali served with chicken pieces in sauce",
    category: "Ugali Meal",
    ingredients: [
      "Mavuno Maize Flour",
      "chicken",
      "tomatoes",
      "onions",
      "garlic",
      "ginger",
      "green pepper",
      "oil and spices",
    ],
    instructions: [
      "Brown chicken.",
      "Simmer with tomato sauce.",
      "Serve with freshly prepared ugali.",
    ],
    totalTime: "40 min",
    servings: "4",
  },
  {
    id: "ugali-kales",
    title: "Ugali & Kales",
    description: "A simple and delicious combination of ugali and flavorful kale greens.",
    image: ugaliKales,
    imageAlt: "Mavuno ugali served with sukuma wiki kales and avocado",
    category: "Ugali Meal",
    ingredients: ["Mavuno Maize Flour", "kales", "tomatoes", "onions", "garlic", "oil", "salt and pepper"],
    instructions: [
      "Sauté onions and tomatoes.",
      "Add kales and cook until tender.",
      "Serve with hot ugali.",
    ],
    totalTime: "30 min",
    servings: "4",
  },
  {
    id: "ugali-eggs",
    title: "Ugali & Eggs",
    description: "A quick everyday meal combining freshly prepared ugali with flavorful eggs.",
    image: ugaliEggs,
    imageAlt: "Mavuno ugali served with scrambled eggs, tomatoes and onions",
    category: "Ugali Meal",
    ingredients: ["Mavuno Maize Flour", "eggs", "tomatoes", "onions", "green pepper", "oil", "salt and pepper"],
    instructions: [
      "Prepare scrambled eggs with tomatoes and onions.",
      "Serve with freshly made ugali.",
    ],
    totalTime: "25 min",
    servings: "3–4",
  },
  {
    id: "ugali-omena",
    title: "Ugali & Omena",
    description: "A beloved East African combination of ugali and flavorful omena.",
    image: ugaliOmena,
    imageAlt: "Mavuno ugali served with omena in tomato-onion sauce",
    category: "Ugali Meal",
    ingredients: [
      "Mavuno Maize Flour",
      "omena",
      "tomatoes",
      "onions",
      "garlic",
      "ginger",
      "green pepper",
      "oil and spices",
    ],
    instructions: [
      "Fry omena.",
      "Simmer with tomato-onion sauce.",
      "Serve with hot ugali.",
    ],
    totalTime: "40 min",
    servings: "4",
  },
];
