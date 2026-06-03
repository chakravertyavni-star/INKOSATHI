import "../styles/Footer.css";
import { Link } from "react-router-dom";

import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiYoutube
} from "react-icons/fi";

export default function Footer() {

  return (

    <footer className="footer">

      <div className="footer-top">

        {/* BRAND */}

        <div className="footer-brand">

          <div className="footer-logo-wrap">

            <img
              src="/logo.png"
              alt="logo"
            />

            <h3>
              Inkosathi Global Connect
              <br />
              Private Limited
            </h3>

          </div>

          <p>
            "We bring languages to life,
            helping you connect with
            people, cultures, and endless
            opportunities. Your dreams
            start here!"
          </p>

          <h4 className="touch-title">
            GET IN TOUCH
          </h4>

          {/* CONTACT */}

          <div className="footer-contact">

            <p className="contact-label">
              Call Us:
            </p>

            <a href="tel:+918409371446">
              +91 84093 71446
            </a>

            <a href="tel:+917042611845">
              +91 70426 11845
            </a>

            <p className="contact-mail">
              Mail Us:
              <a href="mailto:connect@inkosathi.com">
                connect@inkosathi.com
              </a>
            </p>

          </div>

          {/* SOCIALS */}

          <div className="socials">

            <a href="#">
              <FiFacebook />
            </a>

            <a href="#">
              <FiLinkedin />
            </a>

            <a href="#">
              <FiInstagram />
            </a>

            <a href="#">
              <FiYoutube />
            </a>

          </div>

        </div>

        {/* QUICK LINKS */}

        <div className="footer-column">

          <h4>Quick Links</h4>

          <Link to="/about">
            About Us
          </Link>

          <a>
            Meet Our Team
          </a>

          <a>
            FAQ
          </a>

          <a>
            Privacy Policy
          </a>

          <a>
            Terms & Conditions
          </a>

        </div>

        {/* COURSES */}

        <div className="footer-column">

          <h4>Courses</h4>

          <Link to="/korean-language">
            Korean Language
          </Link>

          <a>
            Japanese Language
          </a>

          <a>
            French Language
          </a>

          <a>
            German Language
          </a>

          <a>
            Chinese Language
          </a>

        </div>

        {/* TRAVEL */}

        <div className="footer-column">

          <h4>Travel Programs</h4>

          <a>South Korea Tours</a>
          <a>India–Korea Exchange</a>
          <a>Study Abroad Packages</a>
          <a>Cultural Immersion Trips</a>
          <a>Corporate Travel</a>
          <a>Custom Travel Planning</a>
          <a>Visa Assistance</a>
          <a>Travel Blog</a>

        </div>

      </div>

      <div className="footer-line"></div>

      <div className="footer-bottom">

        <p>
          © 2026 Inkosathi Global Connect
          Private Limited.
          All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}