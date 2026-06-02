import "../styles/TourFeatures.css";

export default function TourFeatures() {
  return (
    <section className="tour-features">

      <div className="tour-middle">

        <p>
          At <strong>Inkosathi Global Connect Private Limited</strong>,
          travel is not just about destinations —
          it's about meaningful experiences,
          seamless journeys, and unforgettable memories.
        </p>

      </div>

      {/* DESTINATIONS */}

    <div className="travel-showcase">

      <div className="travel-head">
        <h2>Top Trending Destinations</h2>
        <p>
          Explore premium travel experiences across Korea and India.
        </p>
      </div>

      <div className="travel-grid">

        <div className="travel-card">
          <img src="/seoul.jpg" alt="Seoul" />
          <h3>Seoul</h3>
        </div>

        <div className="travel-card">
          <img src="/hp.jpg" alt="Busan" />
          <h3>Himachal Pradesh</h3>
        </div>

        <div className="travel-card">
          <img src="/Busan.jpg" alt="Busan" />
          <h3>Busan</h3>
        </div>

        <div className="travel-card">
          <img src="/agra.jpg" alt="Agra" />
          <h3>Agra</h3>
        </div>

        <div className="travel-card">
          <img src="/kerala.jpg" alt="Kerala" />
          <h3>Kerala</h3>
        </div>

      </div>

    </div>

    {/* DESTINATION PLANNER */}

    <section className="trip-planner">

      <div className="planner-overlay"></div>

      <div className="planner-content">

        <span className="planner-mini">
          CUSTOM TRAVEL EXPERIENCE
        </span>

        <h2>
          Customize Your Perfect Journey
        </h2>

        <p>
          Select your destination and travel style.
          We'll craft a premium experience tailored for you.
        </p>

        <div className="planner-card">

          <select>
            <option>Select Destination</option>

            <option>Seoul, South Korea</option>
            <option>Busan, South Korea</option>
            <option>Jeju Island, South Korea</option>

            <option>Agra, India</option>
            <option>Kerala, India</option>
            <option>Goa, India</option>
            <option>Jaipur, India</option>
            <option>Himachal Pradesh, India</option>
          </select>

          <select>
            <option>Select Travel Type</option>

            <option>Family Tour</option>
            <option>Honeymoon Trip</option>
            <option>Solo Travel</option>
            <option>Corporate / Group Travel</option>
            <option>Student Educational Tour</option>
            <option>Cultural Exploration</option>
          </select>

          <div className="planner-btns">

            <button className="plan-btn">
              Request Plan
            </button>

            <button className="wa-btn">
              WhatsApp
            </button>

            <button className="view-btn">
              View Destination
            </button>

          </div>

        </div>

      </div>

    </section>


    {/* DEALS SECTION */}

  <section className="travel-deals">

    <div className="deals-head">

      <span>PREMIUM DESTINATIONS</span>

      <h2>
        Deals You Can't Miss
      </h2>

      <p>
        Travel beyond boundaries with incredible savings
      </p>

    </div>

    <div className="deals-grid">

      <div className="deal-card">
        <img src="/taj.jpg" alt="" />

        <div className="deal-overlay">
          <h3>TAJ MAHAL</h3>
          <p>● AGRA, IN</p>
        </div>
      </div>

      <div className="deal-card">
        <img src="/hawamahal.jpg" alt="" />

        <div className="deal-overlay">
          <h3>HAWA MAHAL</h3>
          <p>● JAIPUR, IN</p>
        </div>
      </div>

      <div className="deal-card">
        <img src="/redfort.jpg" alt="" />

        <div className="deal-overlay">
          <h3>RED FORT</h3>
          <p>● DELHI, IN</p>
        </div>
      </div>

      <div className="deal-card">
        <img src="/seon.jpg" alt="" />

        <div className="deal-overlay">
          <h3>SEONGSAN ILCHULBONG</h3>
          <p>● JEJU ISLAND, KR</p>
        </div>
      </div>

      <div className="deal-card">
        <img src="/tower.jpg" alt="" />

        <div className="deal-overlay">
          <h3>N SEOUL TOWER</h3>
          <p>● SEOUL, KR</p>
        </div>
      </div>

      <div className="deal-card">
        <img src="/baga.jpg" alt="" />

        <div className="deal-overlay">
          <h3>BAGA BEACH</h3>
          <p>● GOA, IN</p>
        </div>
      </div>

    </div>

  </section>

  {/* SERVICES */}

<section className="travel-services">

  <div className="service-head">

    <span>PREMIUM SUPPORT</span>

    <h2>
      Travel & Cultural Exchange Services
    </h2>

    <p>
      Whether you are traveling for education,
      tourism, business, or cultural exploration —
      we ensure your journey is smooth,
      comfortable, and meaningful.
    </p>

  </div>

  <div className="service-grid">

    <div className="service-box blue-box">
      <div className="service-glow"></div>
      <span>✈</span>
      <h3>Flight Booking & Travel Coordination</h3>

      <ul>
        <li>India ↔ Korea routes</li>
        <li>Best airfare options</li>
        <li>Student group support</li>
      </ul>
    </div>

    <div className="service-box gold-box">
      <div className="service-glow"></div>
      <span>🏨</span>
      <h3>Hotel Reservations & Accommodation</h3>

      <ul>
        <li>Hotels & apartments</li>
        <li>Corporate lodging</li>
        <li>Pickup included</li>
      </ul>
    </div>

    <div className="service-box purple-box">
      <div className="service-glow"></div>
      <span>🚘</span>
      <h3>Chauffeur & Ground Transport</h3>

      <ul>
        <li>Airport pickup</li>
        <li>City travel</li>
        <li>Executive transport</li>
      </ul>
    </div>

    <div className="service-box red-box">
      <div className="service-glow"></div>
      <span>🌏</span>
      <h3>Customized Tour Packages</h3>

      <ul>
        <li>Cultural tours</li>
        <li>Adventure retreats</li>
        <li>Educational trips</li>
      </ul>
    </div>

    <div className="service-box cyan-box">
      <div className="service-glow"></div>
      <span>🎓</span>
      <h3>Educational & Cultural Exchange</h3>

      <ul>
        <li>University exchange</li>
        <li>Cultural immersion</li>
        <li>Academic travel</li>
      </ul>
    </div>

    <div className="service-box silver-box">
      <div className="service-glow"></div>
      <span>🏢</span>
      <h3>Corporate & Delegation Travel</h3>

      <ul>
        <li>MICE events</li>
        <li>Visa support</li>
        <li>VIP logistics</li>
      </ul>
    </div>

    <div className="service-box pink-box">
      <div className="service-glow"></div>
      <span>🎎</span>
      <h3>Thematic & Cultural Tourism</h3>

      <ul>
        <li>Heritage trails</li>
        <li>K-Culture tours</li>
        <li>Festival tours</li>
      </ul>
    </div>

    <div className="service-box green-box">
      <div className="service-glow"></div>
      <span>📑</span>
      <h3>Visa & Documentation</h3>

      <ul>
        <li>Tourist visas</li>
        <li>Attestation</li>
        <li>Travel insurance</li>
      </ul>
    </div>

  </div>

  </section>

  {/* WHY CHOOSE */}

<section className="travel-why">

  <div className="why-head">

    <span>WHY US</span>

    <h2>
      Why Choose Inkosathi Global Connect
      Tours & Travels
    </h2>

    <p>
      Experience the perfect blend of comfort,
      culture, and connection — all backed by
      expertise and care.
    </p>

  </div>

  <div className="why-travel-grid">

    <div className="why-travel-card">
      <div className="why-icon">🌏</div>
      <h3>
        Deep Expertise in India–Korea
        Travel & Culture
      </h3>

      <p>
        Our strong cultural and logistical
        networks across both nations ensure
        a seamless travel experience.
      </p>
    </div>

    <div className="why-travel-card">
      <div className="why-icon">✈</div>
      <h3>
        End-to-End Service
      </h3>

      <p>
        From flight booking to
        accommodation, visa, and logistics —
        we handle every detail for you.
      </p>
    </div>

    <div className="why-travel-card">
      <div className="why-icon">🎓</div>
      <h3>
        Academic & Cultural
        Partnerships
      </h3>

      <p>
        We collaborate with universities
        and institutions to offer authentic
        intercultural experiences.
      </p>
    </div>

    <div className="why-travel-card">
      <div className="why-icon">🎧</div>
      <h3>
        24×7 Multilingual Support
      </h3>

      <p>
        Our global team provides
        round-the-clock assistance in
        English, Korean, and local languages.
      </p>
    </div>

    <div className="why-travel-card">
      <div className="why-icon">💎</div>
      <h3>
        Transparent Pricing
      </h3>

      <p>
        No hidden fees — just honest
        pricing and customized plans
        for every traveler.
      </p>
    </div>

    <div className="why-travel-card">
      <div className="why-icon">🏅</div>
      <h3>
        Curated by Certified Experts
      </h3>

      <p>
        Our certified travel planners
        and cultural experts ensure
        every journey is meaningful and safe.
      </p>
    </div>

  </div>

  </section>

    



  
  
  
  </section>



  );
}