import { ME } from "../data/portfolio";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} {ME.name} — Built with React + CSS</span>
      <span>Designed & developed by me.</span>
    </footer>
  );
}
