import coffeeImg from "@/assets/hero-coffee.jpg";
import decafImg from "@/assets/hero-decaf.jpg";
import matchaImg from "@/assets/hero-matcha.jpg";
import refresherImg from "@/assets/hero-refresher.jpg";

export type Drink = {
  slug: string;
  name: string;
  description: string;
  image: string;
  tags: string[];
  basePrice: number;
  seasonal?: boolean;
};

export const drinks: Drink[] = [
  {
    slug: "flat-white",
    name: "Flat White",
    description:
      "Velvety microfoam poured over rich espresso for a balanced, silky cup.",
    image: coffeeImg,
    tags: ["coffee", "espresso"],
    basePrice: 3.75,
  },
  {
    slug: "decaf-pour-over",
    name: "Decaf Pour-Over",
    description:
      "A clean, aromatic decaf brewed to highlight sweetness without the buzz.",
    image: decafImg,
    tags: ["decaf", "filter"],
    basePrice: 3.5,
  },
  {
    slug: "iced-matcha-latte",
    name: "Iced Matcha Latte",
    description:
      "Ceremonial-grade matcha shaken with milk and ice for a creamy, refreshing lift.",
    image: matchaImg,
    tags: ["matcha", "tea"],
    basePrice: 4.25,
    seasonal: true,
  },
  {
    slug: "strawberry-refresher",
    name: "Strawberry Refresher",
    description:
      "Bright strawberries and citrus over ice for a crisp, juicy cool-down.",
    image: refresherImg,
    tags: ["refresher", "fruit"],
    basePrice: 4.0,
    seasonal: true,
  },
];

export function getDrinkBySlug(slug: string) {
  return drinks.find((d) => d.slug === slug);
}
