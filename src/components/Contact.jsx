import { ME } from "../data/portfolio";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-bg" />

      <div className="section-tag contact-tag">Let's Build</div>

      <h2 className="contact-title reveal">
        Got a<br />project?
      </h2>

      <p className="contact-sub reveal">
        Drop me a line and let's make something great.
      </p>

      <a href={`mailto:${ME.email}`} className="contact-email reveal">
        {ME.email}
      </a>

      <div className="contact-links reveal">
        <a href={ME.github} className="contact-link" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={ME.linkedin} className="contact-link" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="#" className="contact-link">
          Resume ↓
        </a>
      </div>
    </section>
  );
}
