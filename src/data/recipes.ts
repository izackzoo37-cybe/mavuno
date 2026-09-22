// Official Mavuno recipes, confirmed by the client.
//
// Full ingredient lists, preparation steps, cooking times and serving sizes
// have not been supplied yet, so those fields are optional and intentionally
// left unset rather than invented. Fill them in and the recipe detail view
// will render them automatically — no component changes needed.
import ugaliFish from "../assets/ugali-fish.jpg";
import ugaliBeef from "../assets/ugali-beef.jpg";
import ugaliChicken from "../assets/ugali-chicken.jpg";

export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  ingredients?: string[];
  instructions?: string[];
  cookingTime?: string;
  servings?: string;
}

export const recipes: Recipe[] = [
  {
    id: "ugali-fish",
    title: "Ugali & Fish",
    description:
      "Soft, hearty Mavuno ugali served with tender fish in a rich, flavorful tomato and herb sauce.",
    image: ugaliFish,
    imageAlt: "Mavuno ugali served with whole fried fish in tomato sauce",
  },
  {
    id: "ugali-beef",
    title: "Ugali & Beef Stew",
    description:
      "Freshly prepared Mavuno ugali paired with tender beef cooked in a rich, savory stew with tomatoes, spices and herbs.",
    image: ugaliBeef,
    imageAlt: "Mavuno ugali served with beef stew",
  },
  {
    id: "ugali-chicken",
    title: "Ugali & Chicken",
    description:
      "Soft Mavuno ugali served with succulent chicken simmered in a flavorful, savory sauce for a satisfying Kenyan-style meal.",
    image: ugaliChicken,
    imageAlt: "Mavuno ugali served with chicken pieces in sauce",
  },
];
