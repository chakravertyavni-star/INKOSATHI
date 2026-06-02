import "../styles/Contact.css";

import contactbg from "/contact.jpg";
import Footer from "../components/Footer";
import Navbar from "./Navbar";

import {
  Mail,
  Phone,
  MapPin,
  MessageCircle
} from "lucide-react";

export default function Contact() {

     

  return (


    

    <div className="contact-page">

      {/* HERO */}

      <section
        className="contact-hero"
        style={{
          backgroundImage:
          `url(${contactbg})`
        }}
      >

        <div className="contact-overlay" />

        <div className="contact-hero-content">

          <span>
            CONNECT WITH US
          </span>

          <h1>
            Contact Us
          </h1>

          <p>
            Reach our team anytime for consultancy,
            travel, Korean programs and global support.
          </p>

        </div>

      </section>

      {/* CONTACT OPTIONS */}

      <section className="contact-section">

        <div className="contact-head">

          <h2>
            Get In Touch
          </h2>

          <p>
            Fast response. Professional guidance.
            Premium support experience.
          </p>

        </div>

        <div className="contact-grid">

          {/* WHATSAPP */}

          <div className="contact-card whatsapp-card">

            <div className="contact-icon whatsapp">

              <MessageCircle />

            </div>

            <h3>
              Chat on WhatsApp
            </h3>

            <p>
              Instant replies and real-time assistance
              from our team.
            </p>

            <a
              href="https://wa.me/918409371446"
              target="_blank"
              rel="noreferrer"
              className="contact-btn whatsapp-btn"
            >
              Start Chat
            </a>

          </div>

          {/* EMAIL */}

          <div className="contact-card">

            <div className="contact-icon">

              <Mail />

            </div>

            <h3>
              Email Support
            </h3>

            <p>
              Drop your query anytime and receive
              detailed assistance.
            </p>

            <a
              href="mailto:connect@inkosathi.com"
              className="contact-btn"
            >
              Send Email
            </a>

          </div>

        </div>

      </section>

      {/* DETAILS */}

      <section className="details-section">

        <div className="details-box">

          <h2>
            Our Contact Details
          </h2>

          <div className="detail-item">

            <Mail size={18} />

            <p>
              <strong>Email:</strong>
              connect@inkosathi.com
            </p>

          </div>

          <div className="detail-item">

            <Phone size={18} />

            <p>
              <strong>Phone:</strong>
              +91 84093 71446
            </p>

          </div>

          <div className="detail-item">

            <MapPin size={18} />

            <p>
              <strong>Address:</strong>
              Built-up First Floor (1BHK),
              Property No. D-30,
              Opp. B-8 Gate No. 2,
              Masoodpur, Vasant Kunj,
              New Delhi – 110070
            </p>

          </div>

        </div>

      </section>

      {/* MAP */}

      <section className="map-section">

        <h2>
          Find Us
        </h2>

        <div className="map-box">

          <iframe
            title="location"
            src="https://www.google.com/maps?q=Masoodpur+Vasant+Kunj+Delhi&output=embed"
            loading="lazy"
          />

        </div>

      </section>

      <Navbar />

      <Footer />



    </div>
  );
}