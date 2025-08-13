import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container mx-auto grid gap-8 px-4 py-10 md:grid-cols-3">
        <section>
          <h2 className="mb-2 font-medium">Contact Us</h2>
          <address className="not-italic text-sm text-foreground/80">
            123 Bean Street
            <br />
            Sioux Falls, SD 57104
          </address>
          <p className="mt-2 text-sm text-foreground/80">
            Phone: <a href="tel:+15551234567" className="underline-offset-4 hover:underline">(555) 123-4567</a>
          </p>
          <p className="text-sm text-foreground/80">
            Email: <a href="mailto:hello@dakotacoffee.com" className="underline-offset-4 hover:underline">hello@dakotacoffee.com</a>
          </p>
        </section>
        <section>
          <h2 className="mb-2 font-medium">About</h2>
          <p className="text-sm text-foreground/80">
            Dakota Coffee is a cozy, modern café focused on quality beans, careful craft, and a welcoming community.
          </p>
          <div className="mt-3">
            <Link to="/about" className="text-sm text-primary underline-offset-4 hover:underline">
              Our Story
            </Link>
          </div>
        </section>
        <section>
          <h2 className="mb-2 font-medium">Quick Links</h2>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li><Link to="/#stores" className="hover:text-foreground">Find a Store</Link></li>
            <li><Link to="/#gift-cards" className="hover:text-foreground">Gift Cards</Link></li>
            <li><Link to="/#rewards" className="hover:text-foreground">Rewards</Link></li>
            <li><Link to="/#menu" className="hover:text-foreground">Menu</Link></li>
          </ul>
        </section>
      </div>
      <div className="border-t py-4 text-center text-xs text-foreground/60">
        © {new Date().getFullYear()} Dakota Coffee. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
