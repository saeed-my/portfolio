import { useEffect, useRef } from "react";
import "./Cursor.css";

export default function Cursor() {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const trailPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
    };

    let rafId;
    const raf = () => {
      if (trailRef.current) {
        trailPos.current.x += (pos.current.x - trailPos.current.x) * 0.15;
        trailPos.current.y += (pos.current.y - trailPos.current.y) * 0.15;
        trailRef.current.style.left = trailPos.current.x + "px";
        trailRef.current.style.top = trailPos.current.y + "px";
      }
      rafId = requestAnimationFrame(raf);
    };

    window.addEventListener("mousemove", move);
    rafId = requestAnimationFrame(raf);

    const grow = () => cursorRef.current?.classList.add("big");
    const shrink = () => cursorRef.current?.classList.remove("big");

    const interactables = document.querySelectorAll("a, button, [data-hover]");
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(rafId);
      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-trail" ref={trailRef} />
    </>
  );
}
