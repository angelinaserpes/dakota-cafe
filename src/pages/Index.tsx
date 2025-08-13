import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Coffee, Building2 } from "lucide-react";
import { drinks } from "@/data/drinks";

const Index = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!api) return;
    const id = setInterval(() => api?.scrollNext(), 5000);
    return () => clearInterval(id);
  }, [api]);

  const seasonal = drinks.filter((d) => d.seasonal);

  return (
    <main>
      <h1 className="sr-only">Dakota Coffee — Cozy Modern Coffee Shop</h1>
      <Helmet>
        <title>Dakota Coffee | Cozy Modern Coffee Shop</title>
        <meta
          name="description"
          content="Cozy, modern coffee shop serving coffee, decaf, matcha and refreshers. Order pickup, delivery or enjoy in-store."
        />
        <link rel="canonical" href="/" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Dakota Coffee',
          url: '/',
          contactPoint: [{ '@type': 'ContactPoint', telephone: '+1-555-123-4567', contactType: 'customer service' }],
        })}</script>
      </Helmet>

      {/* Hero Carousel */}
      <section className="relative">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {drinks.map((d) => (
              <CarouselItem key={d.slug}>
                <Link to={`/drink/${d.slug}`} className="group block">
                  <div className="relative">
                    <img
                      src={d.image}
                      alt={`${d.name} drink at Dakota Coffee`}
                      className="h-[50vh] w-full object-cover md:h-[70vh]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <h2 className="font-display text-3xl md:text-5xl">{d.name}</h2>
                      <Button variant="hero" className="mt-3" aria-label={`Explore ${d.name}`}>
                        Explore Drink
                      </Button>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Newly In */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="font-display text-3xl">Newly In</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {seasonal.map((d) => (
            <Card key={d.slug} className="overflow-hidden">
              <Link to={`/drink/${d.slug}`}>
                <img src={d.image} alt={`${d.name} seasonal drink`} className="h-48 w-full object-cover" loading="lazy" />
                <CardContent className="p-4">
                  <h3 className="text-lg font-medium">{d.name}</h3>
                  <p className="text-sm text-foreground/80 truncate">{d.description}</p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* Ways to Order & Pickup */}
      <section className="bg-secondary/50">
        <div className="container mx-auto grid gap-6 px-4 py-12 md:grid-cols-3">
          <article className="rounded-lg border p-6">
            <Truck className="text-primary" />
            <h3 className="mt-3 text-lg font-medium">Delivery</h3>
            <p className="mt-1 text-sm text-foreground/80">Get your favorites delivered to your door with our local partners.</p>
          </article>
          <article className="rounded-lg border p-6">
            <Coffee className="text-primary" />
            <h3 className="mt-3 text-lg font-medium">Takeaway</h3>
            <p className="mt-1 text-sm text-foreground/80">Order ahead and pick up at the counter when it fits your schedule.</p>
          </article>
          <article className="rounded-lg border p-6">
            <Building2 className="text-primary" />
            <h3 className="mt-3 text-lg font-medium">In-store Pickup</h3>
            <p className="mt-1 text-sm text-foreground/80">Come on in — your drink will be ready with a smile.</p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Index;
