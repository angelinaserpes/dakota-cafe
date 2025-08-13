import { Helmet } from "react-helmet-async";
import cafeImg from "@/assets/cafe-interior.jpg";

const About = () => {
  return (
    <main>
      <Helmet>
        <title>About Dakota Coffee | Our Story & Values</title>
        <meta name="description" content="Discover the story behind Dakota Coffee — our passion for quality beans, cozy spaces, and a welcoming community." />
        <link rel="canonical" href="/about" />
      </Helmet>

      <section className="container mx-auto grid items-center gap-8 px-4 py-12 md:grid-cols-2">
        <div>
          <h1 className="font-display text-4xl leading-tight">Our Story</h1>
          <p className="mt-4 text-foreground/80">
            Dakota Coffee began with a simple idea: create a cozy, modern café where
            every cup is crafted with care. We source quality beans, brew with intention,
            and design welcoming spaces that invite you to pause and savor.
          </p>
          <p className="mt-4 text-foreground/80">
            From the first pour in the morning to the last conversation at dusk, we believe
            coffee is about connection — to people, to place, and to the moment in your hands.
          </p>
        </div>
        <div>
          <img src={cafeImg} alt="Cozy modern Dakota Coffee interior" className="rounded-lg" loading="lazy" />
        </div>
      </section>
    </main>
  );
};

export default About;
