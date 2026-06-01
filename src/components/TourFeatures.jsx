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

    </section>



  );
}