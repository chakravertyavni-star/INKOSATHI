import "../styles/Navbar.css";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { useState } from "react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* LOGO */}

      <div className="nav-logo">
        <img
          src="/logo.png"
          alt="logo"
        />

        <div className="logo-text">
          <h3>Inkosathi Global</h3>
          <p>Connect Private Limited</p>
        </div>
      </div>

      {/* DESKTOP */}

      <ul className="nav-links">
        <li>Home</li>
        <li>About Us</li>
        <li>Korean Language</li>
        <li>Consultancy</li>
        <li>Tour & Travel</li>
        <li>Korean Products</li>
        <li>Contact</li>
      </ul>

      <div className="nav-right">

        <button className="lang-btn">
          English
        </button>

        <button className="connect-btn">
          Connect
        </button>

      </div>

      {/* HAMBURGER */}

      <div
        className="menu-icon"
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
      >
        {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
      </div>

      {/* MOBILE MENU */}

      <div
        className={
          menuOpen
            ? "mobile-menu active"
            : "mobile-menu"
        }
      >

        <li>Home</li>
        <li>About Us</li>
        <li>Korean Language</li>
        <li>Consultancy</li>
        <li>Tour & Travel</li>
        <li>Korean Products</li>
        <li>Contact</li>

        <button className="mobile-btn">
          Connect
        </button>

      </div>

    </nav>
  );
}