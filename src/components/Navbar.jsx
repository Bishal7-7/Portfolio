import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ darkMode, onToggleDarkMode }) {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Bishal Regmi
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <button
            type="button"
            className="dark-mode-btn"
            onClick={onToggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
