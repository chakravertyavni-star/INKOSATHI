import "../styles/CourseCards.css";

export default function CourseCards() {
  return (
    <section className="course-section">

      <div className="course-head">
        <p>Structured Learning Journey</p>
        <h2>Korean Language Course Structure</h2>
      </div>

      <div className="course-grid">

        {/* BEGINNER */}

        <div className="course-card beginner">

          <div className="card-pattern"></div>

          <div className="card-top">
            <span>01</span>
            <h3>Beginner</h3>
            <p>Foundation for new learners</p>
          </div>

          <div className="course-levels">

            <label className="level-box">
              <input type="checkbox" />
              <div>
                <h4>Level 1</h4>
                <p>Duration: 3 months</p>
              </div>
            </label>

            <label className="level-box">
              <input type="checkbox" />
              <div>
                <h4>Level 2</h4>
                <p>Duration: 3 months</p>
              </div>
            </label>

          </div>
        </div>

        {/* INTERMEDIATE */}

        <div className="course-card intermediate">

          <div className="card-pattern"></div>

          <div className="card-top">
            <span>02</span>
            <h3>Intermediate</h3>
            <p>Conversational & applied grammar</p>
          </div>

          <div className="course-levels">

            <label className="level-box">
              <input type="checkbox" />
              <div>
                <h4>Level 1</h4>
                <p>Duration: 3 months</p>
              </div>
            </label>

            <label className="level-box">
              <input type="checkbox" />
              <div>
                <h4>Level 2</h4>
                <p>Duration: 3 months</p>
              </div>
            </label>

          </div>
        </div>

        {/* ADVANCED */}

        <div className="course-card advanced">

          <div className="card-pattern"></div>

          <div className="card-top">
            <span>03</span>
            <h3>Advanced</h3>
            <p>Academic & professional fluency</p>
          </div>

          <div className="course-levels">

            <label className="level-box">
              <input type="checkbox" />
              <div>
                <h4>Level 1</h4>
                <p>Duration: 3 months</p>
              </div>
            </label>

            <label className="level-box">
              <input type="checkbox" />
              <div>
                <h4>Level 2</h4>
                <p>Duration: 3 months</p>
              </div>
            </label>

            <label className="level-box">
              <input type="checkbox" />
              <div>
                <h4>Level 3</h4>
                <p>Duration: 3 months</p>
              </div>
            </label>

            <label className="level-box">
              <input type="checkbox" />
              <div>
                <h4>Level 4</h4>
                <p>Duration: 3 months</p>
              </div>
            </label>

          </div>
        </div>

      </div>
    </section>
  );
}