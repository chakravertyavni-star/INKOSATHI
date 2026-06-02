import "../styles/KoreanHero.css";

export default function KoreanHero() {
  return (
    <section className="khero">

      <div className="khero-petals"></div>

      <div className="khero-wrap">

        {/* TOP HERO CONTENT */}
        <div className="khero-top">

          <div className="khero-left">

            <p className="khero-tag">
              LEARN KOREAN LANGUAGE
            </p>

            <h1 className="khero-title">
              LEARN KOREAN,
              <span className="gold-text">
                WITH INKOSATHI
                <br />
                GLOBAL
                <br />
                CONNECT PRIVATE
                <br />
                LIMITED
              </span>
            </h1>

            <h3 className="khero-sub">
              — Bridging Tongues, Building Trust.
            </h3>

          </div>

        </div>

        {/* CENTER BOTTOM CONTENT */}
        <div className="khero-bottom">

          <p className="khero-desc">
            <strong>
              Learn Foreign Language
              (A Unit of NEEV – Laying the Foundation)
            </strong>
            delivers structured Korean courses from beginner to advanced.
            Through our partnership with
            <strong>
              <p>
              Sunchon National University, South Korea,
              </p>
            </strong>
            students receive internationally recognized training.
          </p>

          <div className="khero-icons">

            <div className="khero-ico">
              <span>👩‍🏫</span>
              <p>Expert<br />Instructors</p>
            </div>

            <div className="khero-ico">
              <span>📖</span>
              <p>Structured<br />Curriculum</p>
            </div>

            <div className="khero-ico">
              <span>🏅</span>
              <p>Internationally<br />Recognized</p>
            </div>

            <div className="khero-ico">
              <span>🌏</span>
              <p>Cultural<br />Immersion</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}