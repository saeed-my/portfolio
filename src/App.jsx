import { useState, useEffect } from "react";

import "./styles/global.css";

import Cursor   from "./components/Cursor";
import Nav      from "./components/Nav";
import Hero     from "./components/Hero";
import Projects from "./components/Projects";
import Skills   from "./components/Skills";
import About    from "./components/About";
import Contact  from "./components/Contact";
import Footer   from "./components/Footer";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Nav frost-on-scroll
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);

    // Scroll-triggered reveal for .reveal elements
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.15 }
    );

    // Small delay so all components have mounted
    const timeout = setTimeout(() => {
      document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <Cursor />
      <Nav scrolled={scrolled} />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
