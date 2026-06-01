import "../styles/ConsultancyHero.css";

export default function ConsultancyHero() {
  return (
    <>
      {/* HERO */}

      <section className="consult-hero">

        <div className="consult-overlay"></div>

        <div className="consult-content">

          <p className="consult-tag">
            PROFESSIONAL LANGUAGE CONSULTANCY
          </p>

          <h1 className="consult-title">
            GET CONSULTANCY,
            <br />
            WITH INKOSATHI
            <br />
            GLOBAL CONNECT
            <br />
            PRIVATE LIMITED
          </h1>

          <h3 className="consult-sub">
            — Bridging Tongues, Building Trust.
          </h3>

        </div>

      </section>

      {/* CENTERED TEXT SECTION */}

      <section className="consult-info">

        <p className="consult-para">
          <strong>
            Inkosathi Global Connect Private Limited Consultancy
          </strong>{" "}
          delivers reliable, precise, and timely language solutions.
          We empower businesses and institutions to communicate
          seamlessly across cultures with confidence.
        </p>

      </section>
    </>
  );
}