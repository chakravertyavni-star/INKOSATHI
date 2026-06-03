import "../styles/About.css";
import Footer from "../components/Footer";
import Navbar from "./Navbar";

export default function About() {
  return (
    <div className="about-page">

      {/* HERO */}

      <section
        className="about-hero"
        style={{
          backgroundImage:"url('/about.jpg')",
        }}
      >
        <div className="about-overlay"></div>

        <div className="about-hero-content">
          <span>ABOUT INKOSATHI</span>

          <h1>
            Building Bridges
            <br />
            Between India & Korea
          </h1>

          <p>
            Language. Culture. Education.
            Consultancy. Global growth.
          </p>
        </div>
      </section>

      {/* MEANING */}

      <section className="about-section meaning-section">

        <div className="meaning-text">

          <span>OUR IDENTITY</span>

          <h2>
            What Does “InKosathi” Mean?
          </h2>

          <p>
            The name <strong>InKosathi</strong>
            reflects our identity and purpose:
          </p>

          <div className="meaning-list">
            <p>• <b>In</b> → India</p>
            <p>• <b>Ko</b> → Korea</p>
            <p>
              • <b>Sathi</b> → साथी
              (companion/friend in Hindi)
            </p>
          </div>

          <p>
            Together,
            <strong> InKosathi </strong>
            means:
          </p>

          <i>
            “India and Korea as companions,
            working together and growing
            together.”
          </i>

        </div>

        <div className="meaning-image">
          <img
            src="/img5.jpg"
            alt=""
          />
        </div>

      </section>

      {/* WHO WE ARE */}

      <section className="about-section who-section">

        <div className="who-image">
          <img
            src="/we.jpg"
            alt=""
          />
        </div>

        <div className="who-content">

          <span>WHO WE ARE</span>

          <h2>
            Who We Are
          </h2>

          <div className="vertical-line"></div>

          <p>
            Inkosathi Global Connect Private
            Limited is more than an
            organization — it is a bridge
            between India and Korea, built on
            trust, expertise, and
            collaboration.
          </p>

          <p>
            We are a team of scholars,
            language professionals,
            educators, and cultural
            facilitators committed to
            creating meaningful connections
            through language education,
            consultancy, travel, cultural
            programs, and authentic
            K-products.
          </p>

          <p>
            We believe in our motto:
          </p>

          <strong>
            “Work Together, Grow Together –
            Bridging India and Korea through
            Knowledge, Culture, and
            Opportunity.”
          </strong>

        </div>

      </section>

      {/* MISSION */}

      <section className="about-section mission-section">

        <div className="mission-content">

          <span>MISSION</span>

          <h2>Our Mission</h2>

          <p>
            At
            <strong>
              {" "}
              Inkosathi Global Connect
              Private Limited
            </strong>,
            we envision a world where India
            and Korea walk together as true
            companions (साथी / 사티) —
            connected through language,
            culture, education, and
            collaboration.
          </p>

          <br />

          <p>
            Our vision is to become the most
            trusted Indo–Korean platform
            that:
          </p>

          <div className="mission-list">

            <p>
              • Empowers learners with
              practical, role-play-driven
              language education.
            </p>

            <p>
              • Connects professionals and
              institutions through
              consultancy and cultural
              expertise.
            </p>

            <p>
              • Enriches lives with cultural
              experiences, student exchanges,
              and travel programs.
            </p>

            <p>
              • Brings Korea closer to India
              through genuine K-products and
              lifestyle offerings.
            </p>

          </div>

          <br />

          <p>
            We believe that when people
            learn together and grow
            together, they create
            opportunities without borders —
            and that is the future
            <strong>
              {" "}
              Inkosathi Global Connect
              Private Limited
            </strong>{" "}
            is building.
          </p>

        </div>

        <div className="mission-image">
          <img
            src="/mission.jpg"
            alt=""
          />
        </div>

      </section>

      {/* VISION */}

      <section className="about-section vision-section">

        <div className="vision-image">
          <img
            src="/vision.jpg"
            alt=""
          />
        </div>

        <div className="vision-content">

          <span>VISION</span>

          <h2>Our Vision</h2>

          <strong>
            “Learn. Connect. Grow.”
          </strong>

          <p>
            Inkosathi Global Connect
            Private Limited envisions a
            future where India and Korea
            unite through language, culture,
            and collaboration.
          </p>

          <p>
            By blending education,
            consultancy, cultural programs,
            and authentic products, we aim
            to create a platform that
            empowers people to speak with
            confidence, work with trust,
            and grow without borders.
          </p>

        </div>

      </section>

      <Navbar />
      <Footer />

    </div>
  );
}