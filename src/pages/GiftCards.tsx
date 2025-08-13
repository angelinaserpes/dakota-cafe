import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const designs = [
  { id: "birthday", name: "Birthday Bash" },
  { id: "holiday", name: "Holiday Cheer" },
  { id: "thanks", name: "Thank You" },
  { id: "classic", name: "Classic Dakota" },
];

const preset = [10, 25, 50, 100];

type Mode = "digital" | "physical";

const GiftCards = () => {
  const [mode, setMode] = useState<Mode>("digital");
  const [amount, setAmount] = useState<number | "">(25);
  const [design, setDesign] = useState("classic");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);

  const submit = () => {
    const val = typeof amount === "number" ? amount : 0;
    if (val <= 0) {
      toast({ title: "Enter a valid amount" });
      return;
    }
    toast({
      title: "Gift Card added",
      description: `${mode === "digital" ? "Digital" : "Physical"} • $${val} • Design: ${design} ${date ? "• Delivers: " + format(date, "PPP") : ""}`,
    });
  };

  return (
    <main className="container mx-auto px-4 py-10">
      <Helmet>
        <title>Gift Cards | Dakota Coffee</title>
        <meta name="description" content="Send Dakota Coffee gift cards — digital or physical. Choose presets or custom amount, add a message, and schedule delivery." />
        <link rel="canonical" href="/gift-cards" />
      </Helmet>

      <h1 className="font-display text-4xl leading-tight">Gift Cards</h1>
      <p className="mt-2 text-foreground/80">Choose a style, amount, and delivery to brighten someone’s day.</p>

      <section className="mt-8 grid gap-8 md:grid-cols-2">
        <Card>
          <CardContent className="space-y-6 p-6">
            <div>
              <Label className="mb-2 block">Type</Label>
              <RadioGroup value={mode} onValueChange={(v) => setMode(v as Mode)} className="grid grid-cols-2 gap-2">
                {["digital", "physical"].map((m) => (
                  <label key={m} className="flex items-center gap-2 rounded-md border p-3 capitalize">
                    <RadioGroupItem value={m} id={`mode-${m}`} />
                    <span>{m}</span>
                  </label>
                ))}
              </RadioGroup>
            </div>

            <div>
              <Label className="mb-2 block">Amount</Label>
              <div className="flex flex-wrap gap-2">
                {preset.map((p) => (
                  <Button key={p} variant={amount === p ? "hero" : "outline"} onClick={() => setAmount(p)}>
                    ${p}
                  </Button>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-3">
                <Label htmlFor="custom" className="text-sm">Custom</Label>
                <Input
                  id="custom"
                  type="number"
                  min={1}
                  step={1}
                  value={amount === "" ? "" : amount}
                  onChange={(e) => setAmount(e.target.value === "" ? "" : Number(e.target.value))}
                  className="max-w-[160px]"
                  placeholder="Enter amount"
                />
              </div>
            </div>

            <div>
              <Label className="mb-2 block">Design</Label>
              <RadioGroup value={design} onValueChange={setDesign} className="grid grid-cols-2 gap-3">
                {designs.map((d) => (
                  <label key={d.id} className="rounded-md border p-4">
                    <div className="mb-2 font-medium">{d.name}</div>
                    <RadioGroupItem value={d.id} id={`design-${d.id}`} />
                  </label>
                ))}
              </RadioGroup>
            </div>

            {mode === "digital" && (
              <div>
                <Label className="mb-2 block">Schedule Email Delivery (optional)</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">{date ? format(date, "PPP") : "Pick a date"}</Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
            )}

            <div>
              <Label className="mb-2 block">Personal Message (optional)</Label>
              <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write something nice…" />
            </div>

            <div>
              <Button variant="hero" onClick={submit}>Add to Cart</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-medium">What’s included</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-foreground/80">
              <li>Digital gift cards deliver instantly or on a scheduled date.</li>
              <li>Physical gift cards ship in 3–5 business days.</li>
              <li>Available designs for birthdays, holidays, and more.</li>
              <li>No fees. Never expires.</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default GiftCards;
