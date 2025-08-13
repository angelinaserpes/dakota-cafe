import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { drinks } from "@/data/drinks";

const categories: Record<string, string[]> = {
  Coffee: [
    "espresso",
    "americano",
    "latte",
    "cappuccino",
    "mocha",
    "macchiato",
    "flat-white",
    "cortado",
    "affogato",
  ],
  "Cold Brew & Iced": [
    "iced-americano",
    "nitro-cold-brew",
    "iced-latte",
    "iced-mocha",
    "cold-foam-cold-brew",
    "iced-espresso-tonic",
  ],
  "Tea & Refreshers": [
    "chai-latte",
    "matcha-latte",
    "herbal-tea",
    "green-tea",
    "iced-tea",
    "berry-hibiscus-refresher",
    "tropical-mango-refresher",
    "lemon-mint-tea",
  ],
  "Blended Drinks": [
    "caramel-frappe",
    "mocha-frappe",
    "vanilla-bean-frappe",
    "strawberry-smoothie",
    "mango-smoothie",
    "chocolate-milkshake",
    "cookies-and-cream-milkshake",
  ],
  "Seasonal Specials": [
    "pumpkin-spice-latte",
    "peppermint-mocha",
    "eggnog-latte",
    "summer-berry-refresher",
    "gingerbread-latte",
  ],
};

const Menu = () => {
  return (
    <main className="container mx-auto px-4 py-10">
      <Helmet>
        <title>Menu | Dakota Coffee</title>
        <meta name="description" content="Explore our full menu: coffee, cold brew & iced, tea & refreshers, blended drinks, and seasonal specials." />
        <link rel="canonical" href="/menu" />
      </Helmet>

      <h1 className="font-display text-4xl leading-tight">Menu</h1>
      <p className="mt-2 text-foreground/80">Click an item to view details and customize.</p>

      <div className="mt-8 space-y-10">
        {Object.entries(categories).map(([category, slugs]) => (
          <section key={category} id={category.replace(/\s+/g, "-").toLowerCase()}>
            <h2 className="text-2xl font-semibold">{category}</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {slugs.map((slug) => {
                const drink = drinks.find((d) => d.slug === slug);
                if (!drink) return null;
                return (
                  <Link key={slug} to={`/drink/${slug}`} className="rounded-lg border p-4 hover:bg-accent">
                    <div className="font-medium">{drink.name}</div>
                    <div className="text-sm text-foreground/70">{drink.description}</div>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default Menu;
