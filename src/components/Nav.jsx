import "./Nav.css";

export default function Nav({ scrolled }) {
  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="nav-logo">SY.</div>
      <ul className="nav-links">
        {["projects", "skills", "about", "contact"].map((s) => (
          <li key={s}>
            <a href={`#${s}`}>{s}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
