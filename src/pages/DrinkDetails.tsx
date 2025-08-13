import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getDrinkBySlug } from "@/data/drinks";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";

const milkTypes = [
  "Whole Milk",
  "2% Milk",
  "Oat Milk",
  "Almond Milk",
  "Soy Milk",
];

const addonsList = ["Extra Shot", "Vanilla Syrup", "Caramel Drizzle", "Whipped Cream"];

const sizeMultipliers: Record<string, number> = { small: 1, medium: 1.25, large: 1.5 };

const DrinkDetails = () => {
  const { slug } = useParams();
  const drink = slug ? getDrinkBySlug(slug) : undefined;

  const [size, setSize] = useState("medium");
  const [milk, setMilk] = useState(milkTypes[0]);
  const [sweetness, setSweetness] = useState(50);
  const [addons, setAddons] = useState<string[]>([]);

  const price = useMemo(() => {
    if (!drink) return 0;
    const base = drink.basePrice * sizeMultipliers[size];
    const extras = addons.length * 0.5;
    return (base + extras).toFixed(2);
  }, [drink, size, addons]);

  if (!drink) {
    return (
      <main className="container mx-auto px-4 py-10">
        <h1 className="font-display text-3xl">Drink not found</h1>
        <p className="mt-2 text-foreground/80">
          We couldn't find that drink. Return to the <Link to="/" className="text-primary underline">menu</Link>.
        </p>
      </main>
    );
  }

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: drink.name,
    description: drink.description,
    image: [drink.image],
    brand: { '@type': 'Brand', name: 'Dakota Coffee' },
  };

  return (
    <main className="container mx-auto px-4 py-10">
      <Helmet>
        <title>{`${drink.name} | Dakota Coffee`}</title>
        <meta name="description" content={drink.description} />
        <link rel="canonical" href={`/drink/${drink.slug}`} />
        <script type="application/ld+json">{JSON.stringify(productJsonLd)}</script>
      </Helmet>

      <article className="grid gap-8 md:grid-cols-2">
        <div>
          <img
            src={drink.image}
            alt={`${drink.name} at Dakota Coffee`}
            className="w-full rounded-lg"
            loading="lazy"
          />
        </div>
        <div>
          <h1 className="font-display text-4xl leading-tight">{drink.name}</h1>
          <p className="mt-3 text-foreground/80">{drink.description}</p>

          <section className="mt-6 space-y-5">
            <div>
              <Label className="mb-2 block">Size</Label>
              <RadioGroup value={size} onValueChange={setSize} className="grid grid-cols-3 gap-2 md:max-w-md">
                {Object.keys(sizeMultipliers).map((s) => (
                  <div key={s} className="flex items-center gap-2 rounded-md border p-3">
                    <RadioGroupItem id={`size-${s}`} value={s} />
                    <Label htmlFor={`size-${s}`} className="capitalize">
                      {s}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <Label className="mb-2 block">Milk</Label>
              <Select value={milk} onValueChange={setMilk}>
                <SelectTrigger className="w-full md:max-w-md">
                  <SelectValue placeholder="Select a milk" />
                </SelectTrigger>
                <SelectContent>
                  {milkTypes.map((m) => (
                    <SelectItem key={m} value={m}>
                      {m}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="md:max-w-md">
              <Label className="mb-2 block">Sweetness ({sweetness}%)</Label>
              <Slider value={[sweetness]} onValueChange={(v) => setSweetness(v[0])} step={5} min={0} max={100} />
            </div>

            <div>
              <Label className="mb-2 block">Add-ons (+$0.50 each)</Label>
              <div className="grid grid-cols-1 gap-2 md:max-w-md">
                {addonsList.map((a) => {
                  const checked = addons.includes(a);
                  return (
                    <label key={a} className="flex cursor-pointer items-center gap-2 rounded-md border p-3">
                      <Checkbox
                        checked={checked}
                        onCheckedChange={(v) => {
                          if (v) setAddons((prev) => [...prev, a]);
                          else setAddons((prev) => prev.filter((x) => x !== a));
                        }}
                      />
                      <span>{a}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          </section>

          <div className="mt-6 flex items-center gap-4">
            <div className="text-lg font-medium">${price}</div>
            <Button
              variant="hero"
              onClick={() =>
                toast({ title: "Added to order", description: `${drink.name} • ${size} • ${milk}` })
              }
            >
              Add to Order
            </Button>
          </div>
        </div>
      </article>
    </main>
  );
};

export default DrinkDetails;
