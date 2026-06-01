import "../styles/CTASection.css";

export default function CTASection() {
  return (
    <section className="cta">

      {/* DARK OVERLAY */}
      <div className="cta-overlay"></div>

      <div className="cta-content">

        <p className="cta-tag">
          START YOUR KOREAN JOURNEY
        </p>

        <h2>
          Start Your Korean Journey
        </h2>

        <p className="cta-text">
          Select a level from the cards above,
          then choose how you want to join.
        </p>

        <div className="cta-buttons">

          <button className="cta-btn email">
            Enroll via Email
          </button>

          <button className="cta-btn whatsapp">
            Join via WhatsApp
          </button>

          <button className="cta-btn team">
            👥 Meet Our Team
          </button>

        </div>

      </div>
    </section>
  );
}