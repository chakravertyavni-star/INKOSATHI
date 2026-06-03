import "../styles/Navbar.css";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-router-dom";

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
         <li>
          <Link
            to="/"
            className="nav-link"
          >
            Home
          </Link>
        </li>

        <li>
        <Link
          to="/korean-language"
          className="nav-link"
        >
          Korean Language
        </Link>
      </li>

      <li>
        <Link
          to="/consultancy"
          className="nav-link"
        >
          Consultancy
        </Link>
      </li>

      <li>
        <Link
          to="/TourTravel"
          className="nav-link"
        >
           Tour & Travel
        </Link>
      </li>


      <li>
        <Link
          to="/kproducts"
          className="nav-link"
        >
          Korean Products
        </Link>
      </li>

    
    


         <li>
        <Link
          to="/contact"
          className="nav-link"
        >
           Contact
        </Link>
      </li>


      <li>
        <Link
          to="/about"
          className="nav-link"
        >
           About Us
        </Link>
      </li>


       
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


        <li>
          <Link
            to="/"
            className="nav-link"
          >
            Home
          </Link>
        </li>

        
         <li>
          <Link
            to="/korean-language"
            className="nav-link"
          >
            Korean Language
          </Link>
        </li>

        <li>
          <Link
            to="/consultancy"
            className="nav-link"
          >
             Consultancy
          </Link>
        </li>

         <li>
        <Link
          to="/contact"
          className="nav-link"
        >
           Tour & Travel
        </Link>
      </li>

         <li>
        <Link
          to="/kproducts"
          className="nav-link"
        >
           <li>Korean Products</li>
        </Link>
      </li>



      <li>
        <Link
          to="/contact"
          className="nav-link"
        >
           Contact
        </Link>
      </li>

        

        <li>
        <Link
          to="/about"
          className="nav-link"
        >
           About Us
        </Link>
      </li>


       

        <button className="mobile-btn">
          Connect
        </button>

      </div>

    </nav>
  );
}