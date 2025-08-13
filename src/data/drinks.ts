import coffeeImg from "@/assets/hero-coffee.jpg";
import decafImg from "@/assets/hero-decaf.jpg";
import matchaHero from "@/assets/hero-matcha.jpg";
import refresherHero from "@/assets/hero-refresher.jpg";

// Seasonal images
import honeyLavenderLatte from "@/assets/seasonal/honey-lavender-latte.jpg";
import strawberryMatchaLatte from "@/assets/seasonal/strawberry-matcha-latte.jpg";
import blueberryIcedTea from "@/assets/seasonal/blueberry-iced-tea.jpg";
import coconutColdBrew from "@/assets/seasonal/coconut-cold-brew.jpg";
import mangoPassionRefresher from "@/assets/seasonal/mango-passion-refresher.jpg";
import spicedCaramelMocha from "@/assets/seasonal/spiced-caramel-mocha.jpg";
import raspberryWhiteChocolateFrappe from "@/assets/seasonal/raspberry-white-chocolate-frappe.jpg";
import toastedMarshmallowCappuccino from "@/assets/seasonal/toasted-marshmallow-cappuccino.jpg";
import pistachioLatte from "@/assets/seasonal/pistachio-latte.jpg";
import watermelonMintRefresher from "@/assets/seasonal/watermelon-mint-refresher.jpg";
import hazelnutMochaFrappe from "@/assets/seasonal/hazelnut-mocha-frappe.jpg";
import lemonGingerIcedTea from "@/assets/seasonal/lemon-ginger-iced-tea.jpg";

// Category images
import catEspresso from "@/assets/categories/espresso.jpg";
import catColdBrew from "@/assets/categories/cold-brew.jpg";
import catTea from "@/assets/categories/tea.jpg";
import catBlended from "@/assets/categories/blended.jpg";
import catSeasonal from "@/assets/categories/seasonal.jpg";

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
  // Hero drinks
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
    image: matchaHero,
    tags: ["matcha", "tea"],
    basePrice: 4.25,
    seasonal: true,
  },
  {
    slug: "strawberry-refresher",
    name: "Strawberry Refresher",
    description:
      "Bright strawberries and citrus over ice for a crisp, juicy cool-down.",
    image: refresherHero,
    tags: ["refresher", "fruit"],
    basePrice: 4.0,
    seasonal: true,
  },

  // Newly In seasonal list
  { slug: "honey-lavender-latte", name: "Honey Lavender Latte", description: "Floral lavender and honey folded into velvety milk and espresso.", image: honeyLavenderLatte, tags: ["seasonal", "latte"], basePrice: 4.75, seasonal: true },
  { slug: "strawberry-matcha-latte", name: "Strawberry Matcha Latte", description: "Vibrant matcha layered with a sweet strawberry puree swirl.", image: strawberryMatchaLatte, tags: ["seasonal", "matcha"], basePrice: 4.95, seasonal: true },
  { slug: "blueberry-iced-tea", name: "Blueberry Iced Tea", description: "Refreshing black tea infused with ripe blueberries and ice.", image: blueberryIcedTea, tags: ["seasonal", "tea"], basePrice: 3.95, seasonal: true },
  { slug: "coconut-cold-brew", name: "Coconut Cold Brew", description: "Silky cold brew with coconut notes and a hint of cold foam.", image: coconutColdBrew, tags: ["seasonal", "cold-brew"], basePrice: 4.5, seasonal: true },
  { slug: "mango-passion-refresher", name: "Mango Passion Refresher", description: "Juicy mango and passionfruit sparkle over ice.", image: mangoPassionRefresher, tags: ["seasonal", "refresher"], basePrice: 4.25, seasonal: true },
  { slug: "spiced-caramel-mocha", name: "Spiced Caramel Mocha", description: "Rich mocha with caramel and a cozy spice finish.", image: spicedCaramelMocha, tags: ["seasonal", "mocha"], basePrice: 4.95, seasonal: true },
  { slug: "raspberry-white-chocolate-frappe", name: "Raspberry White Chocolate Frappe", description: "Creamy white chocolate blended with raspberry drizzle.", image: raspberryWhiteChocolateFrappe, tags: ["seasonal", "frappe"], basePrice: 5.25, seasonal: true },
  { slug: "toasted-marshmallow-cappuccino", name: "Toasted Marshmallow Cappuccino", description: "A toasty marshmallow twist on a classic cappuccino.", image: toastedMarshmallowCappuccino, tags: ["seasonal", "cappuccino"], basePrice: 4.65, seasonal: true },
  { slug: "pistachio-latte", name: "Pistachio Latte", description: "Nutty pistachio sweetness balanced with espresso.", image: pistachioLatte, tags: ["seasonal", "latte"], basePrice: 4.95, seasonal: true },
  { slug: "watermelon-mint-refresher", name: "Watermelon Mint Refresher", description: "Bright watermelon with cooling mint over ice.", image: watermelonMintRefresher, tags: ["seasonal", "refresher"], basePrice: 4.25, seasonal: true },
  { slug: "hazelnut-mocha-frappe", name: "Hazelnut Mocha Frappe", description: "Blended mocha with chocolate-hazelnut drizzle.", image: hazelnutMochaFrappe, tags: ["seasonal", "frappe"], basePrice: 5.25, seasonal: true },
  { slug: "lemon-ginger-iced-tea", name: "Lemon Ginger Iced Tea", description: "Zesty lemon and ginger over iced tea.", image: lemonGingerIcedTea, tags: ["seasonal", "tea"], basePrice: 3.95, seasonal: true },

  // Coffee
  { slug: "espresso", name: "Espresso", description: "Concentrated, rich espresso shot.", image: catEspresso, tags: ["coffee", "espresso"], basePrice: 2.5 },
  { slug: "americano", name: "Americano", description: "Espresso topped with hot water for a smooth cup.", image: catEspresso, tags: ["coffee"], basePrice: 3.0 },
  { slug: "latte", name: "Latte", description: "Creamy steamed milk with espresso.", image: catEspresso, tags: ["coffee"], basePrice: 4.0 },
  { slug: "cappuccino", name: "Cappuccino", description: "Equal parts espresso, steamed milk, and foam.", image: catEspresso, tags: ["coffee"], basePrice: 4.0 },
  { slug: "mocha", name: "Mocha", description: "Chocolate and espresso with steamed milk.", image: catEspresso, tags: ["coffee"], basePrice: 4.5 },
  { slug: "macchiato", name: "Macchiato", description: "Espresso marked with foam.", image: catEspresso, tags: ["coffee"], basePrice: 3.5 },
  { slug: "cortado", name: "Cortado", description: "Equal parts espresso and warm milk.", image: catEspresso, tags: ["coffee"], basePrice: 3.5 },
  { slug: "affogato", name: "Affogato", description: "Espresso poured over vanilla ice cream.", image: catEspresso, tags: ["coffee"], basePrice: 5.0 },

  // Cold Brew & Iced
  { slug: "iced-americano", name: "Iced Americano", description: "Chilled americano over ice.", image: catColdBrew, tags: ["iced"], basePrice: 3.5 },
  { slug: "nitro-cold-brew", name: "Nitro Cold Brew", description: "Nitrogen-infused, silky smooth cold brew.", image: catColdBrew, tags: ["cold-brew"], basePrice: 4.75 },
  { slug: "iced-latte", name: "Iced Latte", description: "Espresso with cold milk over ice.", image: catColdBrew, tags: ["iced"], basePrice: 4.25 },
  { slug: "iced-mocha", name: "Iced Mocha", description: "Chocolate and espresso over ice.", image: catColdBrew, tags: ["iced"], basePrice: 4.75 },
  { slug: "cold-foam-cold-brew", name: "Cold Foam Cold Brew", description: "Cold brew topped with silky cold foam.", image: catColdBrew, tags: ["cold-brew"], basePrice: 4.75 },
  { slug: "iced-espresso-tonic", name: "Iced Espresso Tonic", description: "Bright espresso with tonic and ice.", image: catColdBrew, tags: ["iced"], basePrice: 4.5 },

  // Tea & Refreshers
  { slug: "chai-latte", name: "Chai Latte", description: "Spiced black tea with steamed milk.", image: catTea, tags: ["tea"], basePrice: 4.25 },
  { slug: "matcha-latte", name: "Matcha Latte", description: "Whisked matcha with steamed milk.", image: catTea, tags: ["tea"], basePrice: 4.5 },
  { slug: "herbal-tea", name: "Herbal Tea", description: "Caffeine-free botanical infusion.", image: catTea, tags: ["tea"], basePrice: 2.75 },
  { slug: "green-tea", name: "Green Tea", description: "Clean, delicate green tea.", image: catTea, tags: ["tea"], basePrice: 2.75 },
  { slug: "iced-tea", name: "Iced Tea", description: "Classic iced tea, brisk and refreshing.", image: catTea, tags: ["tea", "iced"], basePrice: 2.95 },
  { slug: "berry-hibiscus-refresher", name: "Berry Hibiscus Refresher", description: "Mixed berries and hibiscus over ice.", image: catTea, tags: ["refresher"], basePrice: 4.0 },
  { slug: "tropical-mango-refresher", name: "Tropical Mango Refresher", description: "Sunny mango refresher over ice.", image: catTea, tags: ["refresher"], basePrice: 4.0 },
  { slug: "lemon-mint-tea", name: "Lemon Mint Tea", description: "Zesty lemon with fresh mint.", image: catTea, tags: ["tea"], basePrice: 3.25 },

  // Blended Drinks
  { slug: "caramel-frappe", name: "Caramel Frappe", description: "Blended caramel coffee with whipped cream.", image: catBlended, tags: ["frappe"], basePrice: 5.0 },
  { slug: "mocha-frappe", name: "Mocha Frappe", description: "Chocolatey blended coffee treat.", image: catBlended, tags: ["frappe"], basePrice: 5.0 },
  { slug: "vanilla-bean-frappe", name: "Vanilla Bean Frappe", description: "Creamy vanilla blended delight.", image: catBlended, tags: ["frappe"], basePrice: 5.0 },
  { slug: "strawberry-smoothie", name: "Strawberry Smoothie", description: "Blended strawberries, cool and fresh.", image: catBlended, tags: ["smoothie"], basePrice: 4.75 },
  { slug: "mango-smoothie", name: "Mango Smoothie", description: "Tropical mango smoothie.", image: catBlended, tags: ["smoothie"], basePrice: 4.75 },
  { slug: "chocolate-milkshake", name: "Chocolate Milkshake", description: "Classic chocolate shake.", image: catBlended, tags: ["milkshake"], basePrice: 4.95 },
  { slug: "cookies-and-cream-milkshake", name: "Cookies & Cream Milkshake", description: "Crushed cookies in a creamy shake.", image: catBlended, tags: ["milkshake"], basePrice: 5.25 },

  // Seasonal Specials
  { slug: "pumpkin-spice-latte", name: "Pumpkin Spice Latte", description: "Pumpkin and warm spice latte.", image: catSeasonal, tags: ["seasonal"], basePrice: 4.95, seasonal: true },
  { slug: "peppermint-mocha", name: "Peppermint Mocha", description: "Minty chocolate and espresso.", image: catSeasonal, tags: ["seasonal"], basePrice: 4.95, seasonal: true },
  { slug: "eggnog-latte", name: "Eggnog Latte", description: "Holiday eggnog with espresso.", image: catSeasonal, tags: ["seasonal"], basePrice: 4.95, seasonal: true },
  { slug: "summer-berry-refresher", name: "Summer Berry Refresher", description: "Mixed berries over ice.", image: catSeasonal, tags: ["seasonal", "refresher"], basePrice: 4.25, seasonal: true },
  { slug: "gingerbread-latte", name: "Gingerbread Latte", description: "Gingerbread spices with steamed milk.", image: catSeasonal, tags: ["seasonal"], basePrice: 4.95, seasonal: true },
];

export function getDrinkBySlug(slug: string) {
  return drinks.find((d) => d.slug === slug);
}
