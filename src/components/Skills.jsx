import { useState, useEffect, useRef } from "react";
import { SKILLS } from "../data/portfolio";
import "./Skills.css";

function SkillBar({ skill, animate }) {
  return (
    <div className="skill-row reveal">
      <div className="skill-meta">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-pct">{skill.level}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{ width: animate ? `${skill.level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [animate, setAnimate] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.3 }
    );
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="skills">
      <div className="section-tag">Expertise</div>
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid" ref={gridRef}>
        {SKILLS.map((skill) => (
          <SkillBar key={skill.name} skill={skill} animate={animate} />
        ))}
      </div>
    </section>
  );
}
