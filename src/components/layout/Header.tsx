import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bean } from "lucide-react";

const navItems = [
  { label: "Find a Store", to: "/#stores" },
  { label: "Gift Cards", to: "/gift-cards" },
  { label: "Rewards", to: "/rewards" },
  { label: "Menu", to: "/menu" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2" aria-label="Dakota Coffee home">
            <Bean className="text-primary" />
            <span className="font-display text-lg tracking-wide">Dakota Coffee</span>
          </Link>
          <ul className="ml-6 hidden gap-6 md:flex">
            {navItems.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `text-sm ${isActive ? "text-primary" : "text-foreground/80 hover:text-foreground"}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink to="/about" className="text-sm text-foreground/80 hover:text-foreground">
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" aria-label="Log in">
            Log In
          </Button>
          <Button variant="hero" size="sm" aria-label="Sign up">
            Sign Up
          </Button>
        </div>
      </nav>
      {/* Mobile quick links */}
      <div className="md:hidden border-t">
        <ul className="flex items-center gap-4 overflow-auto px-4 py-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link to={item.to} className="text-sm text-foreground/80 hover:text-foreground">
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/about" className="text-sm text-foreground/80 hover:text-foreground">
              About
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
