import { ME } from "../data/portfolio";
import "./Hero.css";

export default function Hero() {
  const [firstName, lastName] = ME.name.split(" ");

  return (
    <section className="hero" id="hero">
      <div className="hero-ghost">FRONTEND</div>

      <p className="hero-tag">// Available for work · {ME.location}</p>

      <h1 className="hero-name">
        {firstName}
        <em>{lastName}</em>
      </h1>

      <p className="hero-tagline">{ME.tagline}</p>

      <div className="hero-cta">
        <a href="#projects" className="btn">See My Work</a>
        <a href={`mailto:${ME.email}`} className="btn-ghost">Get in touch →</a>
      </div>

      <div className="hero-scroll-hint">
        <span>scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
