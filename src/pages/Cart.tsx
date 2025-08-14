import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

type CartItem = {
  id: string;
  name: string;
  size: string;
  price: number;
  quantity: number;
  customizations: string[];
};

const Cart = () => {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Honey Lavender Latte",
      size: "Medium",
      price: 4.75,
      quantity: 2,
      customizations: ["Almond Milk", "Extra Shot"]
    },
    {
      id: "2", 
      name: "Iced Americano",
      size: "Large",
      price: 3.75,
      quantity: 1,
      customizations: []
    }
  ]);

  const updateQuantity = (id: string, delta: number) => {
    setItems(prev => prev.map(item => 
      item.id === id 
        ? { ...item, quantity: Math.max(0, item.quantity + delta) }
        : item
    ).filter(item => item.quantity > 0));
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const handleCheckout = () => {
    toast({
      title: "Order placed!",
      description: `Total: $${total.toFixed(2)} • Items will be ready for pickup in 10-15 minutes.`
    });
    setItems([]);
  };

  return (
    <main className="container mx-auto px-4 py-10">
      <Helmet>
        <title>Cart | Dakota Coffee</title>
        <meta name="description" content="Review your Dakota Coffee order and proceed to checkout." />
        <link rel="canonical" href="/cart" />
      </Helmet>

      <h1 className="font-display text-4xl leading-tight">Your Cart</h1>
      
      {items.length === 0 ? (
        <div className="mt-8 text-center">
          <p className="text-foreground/60">Your cart is empty</p>
          <Button variant="hero" className="mt-4" onClick={() => window.history.back()}>
            Continue Shopping
          </Button>
        </div>
      ) : (
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-foreground/60">{item.size}</p>
                      {item.customizations.length > 0 && (
                        <p className="text-sm text-foreground/60">
                          {item.customizations.join(", ")}
                        </p>
                      )}
                      <p className="font-medium">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <Button variant="hero" className="w-full" onClick={handleCheckout}>
                Checkout
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </main>
  );
};

export default Cart;