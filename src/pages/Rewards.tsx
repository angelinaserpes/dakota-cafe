import { Helmet } from "react-helmet-async";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { getPoints, getProgress, redeemPoints } from "@/lib/rewards";
import { toast } from "@/hooks/use-toast";

const rewards = [
  { name: "Free Espresso", cost: 50 },
  { name: "Free Drink", cost: 200 },
  { name: "Seasonal Special", cost: 300 },
  { name: "Merch 10% Off", cost: 150 },
];

const Rewards = () => {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    setPoints(getPoints());
  }, []);

  const { tier, progress, nextTier, nextThreshold } = getProgress(points);

  const handleRedeem = (cost: number, name: string) => {
    const res = redeemPoints(cost);
    if (res.success) {
      setPoints(res.remaining);
      toast({ title: `Redeemed: ${name}`, description: `${cost} points deducted. Balance: ${res.remaining}` });
    } else {
      toast({ title: "Not enough points", description: `You need ${cost} points.` });
    }
  };

  return (
    <main className="container mx-auto px-4 py-10">
      <Helmet>
        <title>Rewards | Dakota Coffee</title>
        <meta name="description" content="Earn 1 point per $1. Unlock Bronze, Silver, and Gold tiers. Redeem points for free drinks, merch, and seasonal specials." />
        <link rel="canonical" href="/rewards" />
      </Helmet>

      <h1 className="font-display text-4xl leading-tight">Rewards</h1>
      <p className="mt-2 text-foreground/80">Earn 1 point for every $1 spent. Move up tiers to unlock more perks.</p>

      <section className="mt-8 grid gap-8 md:grid-cols-2">
        <div className="rounded-lg border p-6">
          <div className="text-sm text-foreground/80">Current tier</div>
          <div className="mt-1 text-2xl font-semibold">{tier}</div>
          <div className="mt-4 text-sm font-medium">Points: {points}</div>
          <div className="mt-2">
            <Progress value={progress} />
            <div className="mt-2 text-xs text-foreground/70">
              {tier === "Gold" ? "You've reached the top tier!" : `${progress}% to ${nextTier} (${nextThreshold} pts)`}
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-medium">Benefits</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground/80">
              <li>Bronze: Birthday reward + exclusive offers</li>
              <li>Silver (200 pts): Faster rewards + early access drops</li>
              <li>Gold (500 pts): Free monthly drink + VIP seasonal tastings</li>
            </ul>
          </div>
        </div>

        <div className="rounded-lg border p-6">
          <h2 className="text-lg font-medium">Redeem</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {rewards.map((r) => (
              <div key={r.name} className="flex items-center justify-between rounded-md border p-4">
                <div>
                  <div className="font-medium">{r.name}</div>
                  <div className="text-sm text-foreground/70">{r.cost} pts</div>
                </div>
                <Button variant="hero" disabled={points < r.cost} onClick={() => handleRedeem(r.cost, r.name)}>
                  Redeem
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Rewards;
