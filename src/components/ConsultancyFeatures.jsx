import "../styles/ConsultancyFeatures.css";

export default function ConsultancyFeatures() {
  return (
    <div className="cf">

      {/* WHY CHOOSE */}

      <section className="cf-section">

        <p className="cf-mini">WHY CHOOSE US</p>

        <h2 className="cf-title">
          Why Choose Inkosathi Global Connect Private Limited?
        </h2>

        <p className="cf-sub">
          Bridging Tongues, Building Trust — your reliable partner in
          translation and interpretation.
        </p>

        <div className="why-grid">

          <div className="cf-card">
            <span>🌍</span>
            <h3>Global Reach, Local Insight</h3>
            <p>
              Native linguists ensure your message feels natural to every audience.
            </p>
          </div>

          <div className="cf-card">
            <span>🛡️</span>
            <h3>Quality You Can Trust</h3>
            <p>
              Certified translators and multi-layer proofreading ensure clarity.
            </p>
          </div>

          <div className="cf-card">
            <span>⚡</span>
            <h3>Fast & Flexible Delivery</h3>
            <p>
              From urgent tasks to long-term projects — always on time.
            </p>
          </div>

          <div className="cf-card">
            <span>📘</span>
            <h3>Subject-Matter Expertise</h3>
            <p>
              Legal, medical, technical, academic, and creative specialization.
            </p>
          </div>

          <div className="cf-card gold-card">
            <span>🔒</span>
            <h3>Confidential & Secure</h3>
            <p>
              NDA-backed workflows and encrypted data protection.
            </p>
          </div>

        </div>
      </section>


      {/* CORE SERVICES */}

      <section className="cf-section">

        <p className="cf-mini">SERVICES</p>

        <h2 className="cf-title">
          Our Core Services
        </h2>

        <p className="cf-sub">
          Comprehensive language support designed for individuals,
          businesses, and global organizations.
        </p>

        <div className="service-row">

          <div className="service-panel">
            <span>📄</span>
            <h3>Translation & Certified Documentation</h3>
            <p>
              Accurate translations handled by native professionals and domain experts.
            </p>
          </div>

          <div className="service-panel">
            <span>🎧</span>
            <h3>Interpretation</h3>
            <p>
              Deliver your message clearly and confidently with live interpretation.
            </p>
          </div>

          <div className="service-panel">
            <span>🎙️</span>
            <h3>Voiceover, Subtitling & Dubbing</h3>
            <p>
              Adapt audio-visual content across cultures with precision and creativity.
            </p>
          </div>

        </div>
      </section>


      {/* INDUSTRIES */}

      <section className="cf-section">

        <p className="cf-mini">INDUSTRIES</p>

        <h2 className="cf-title">
          Industries We Serve
        </h2>

        <div className="industry-grid">

          <div className="industry-box">Legal & Corporate</div>
          <div className="industry-box">Healthcare & Life Sciences</div>
          <div className="industry-box">IT & Software</div>
          <div className="industry-box">Education & E-Learning</div>
          <div className="industry-box">Media & Marketing</div>
          <div className="industry-box">Manufacturing & Engineering</div>

        </div>
      </section>


      {/* PROCESS */}

      <section className="cf-section">

        <p className="cf-mini">WORKFLOW</p>

        <h2 className="cf-title">
          Quality & Process
        </h2>

        <div className="process-line">

          <div className="process-step">
            <b>01</b>
            <h4>Briefing</h4>
          </div>

          <div className="process-step">
            <b>02</b>
            <h4>Assignment</h4>
          </div>

          <div className="process-step">
            <b>03</b>
            <h4>Proofreading</h4>
          </div>

          <div className="process-step">
            <b>04</b>
            <h4>Quality</h4>
          </div>

          <div className="process-step">
            <b>05</b>
            <h4>Delivery</h4>
          </div>

        </div>
      </section>


      {/* CTA */}

      <section className="cf-cta">

        <h2>
          Start Your Journey With Inkosathi Global Connect Private Limited
        </h2>

        <p>
          Bridging Tongues, Building Trust —
          Your reliable partner in translation
          and interpretation.
        </p>

        <div className="cf-cta-btns">

          <a
            href="mailto:info@inkosathi.com"
            className="cta-email"
          >
            Request Consultancy via Email
          </a>

          <a
            href="https://wa.me/91XXXXXXXXXX"
            className="cta-whatsapp"
          >
            💬 Let's Talk on WhatsApp
          </a>

        </div>

      </section>


      {/* FAQ */}

      <section className="cf-faq">

        <h2 className="faq-title">
          Frequently Asked Questions
        </h2>

        <div className="faq-list">

          <div className="faq-card">
            <h3>❓ How do you ensure translation quality?</h3>
            <p>
              Every project undergoes Translation,
              Editing and Proofreading by native
              experts with domain knowledge.
            </p>
          </div>

          <div className="faq-card">
            <h3>⏱ Can you manage urgent or large-volume projects?</h3>
            <p>
              Yes. Our scalable team structure allows
              us to handle urgent and long-term
              multilingual assignments.
            </p>
          </div>

          <div className="faq-card">
            <h3>📄 Are translations certified and legally valid?</h3>
            <p>
              Yes. We provide certified translations
              accepted by institutions, embassies,
              and government offices.
            </p>
          </div>

          <div className="faq-card">
            <h3>💸 Do you offer volume discounts?</h3>
            <p>
              We offer customized packages and
              flexible pricing for bulk and
              recurring clients.
            </p>
          </div>

          <div className="faq-card">
            <h3>📑 Which file formats do you support?</h3>
            <p>
              Word, PDF, PowerPoint, Excel,
              InDesign and many more depending
              on project workflow.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}