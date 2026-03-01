import { ME } from "../data/portfolio";
import "./About.css";

const DETAILS = [
  ["Based in", ME.location],
  ["Email",    ME.email],
  ["Stack",    "React · CSS · JS"],
  ["Status",   "Open to roles"],
];

export default function About() {
  const sentences = ME.about.split(". ");

  return (
    <section className="section" id="about" style={{ background: "var(--dark2)" }}>
      <div className="section-tag">Who I Am</div>

      <div className="about-grid">
        {/* Left col */}
        <div>
          <p className="about-text reveal">
            {sentences.map((sentence, i) =>
              i === 0
                ? <strong key={i}>{sentence}.</strong>
                : <span key={i}> {sentence}{i < sentences.length - 1 ? "." : ""}</span>
            )}
          </p>

          <div className="about-details reveal">
            {DETAILS.map(([label, value]) => (
              <div className="about-detail-row" key={label}>
                <span className="about-detail-label">{label}</span>
                <span className="about-detail-value">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right col */}
        <div className="about-right reveal">
          <p className="about-manifesto">
            "Good code is<br /><em>invisible.</em><br />
            Great design is<br /><em>unforgettable.</em>"
          </p>
        </div>
      </div>
    </section>
  );
}
