import "../style/section.css";

function TeamSection() {
  return (
    <section className="team-section">
      {/* Top Section */}
      <div className="culture-container">
        <div className="culture-images">
          <div className="img-box img-1"></div>
          <div className="img-box img-2"></div>
          <div className="img-box img-3"></div>
          <div className="img-box img-4"></div>
        </div>

        <div className="culture-content">
          <h2>
            Culture of <span>Our Company</span>
          </h2>

          <p>
            Lorem ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>

          <p>
            Lorem ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-header">
        <h2>Our Master Brains</h2>
        <p>
          Lorem ipsum is simply dummy text of the printing and
          typesetting industry.
        </p>
      </div>

      <div className="team-grid">
        {[1, 2, 3].map((member) => (
          <div className="team-card" key={member}>
            <div className="profile-placeholder"></div>

            <h3>John Martinus</h3>
            <span>CTO</span>

            <p>
              Lorem ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
          </div>
        ))}
      </div>

      {/* Slider Dots */}
      <div className="slider-controls">
        <button>‹</button>

        <div className="dots">
          <span></span>
          <span></span>
          <span className="active"></span>
          <span></span>
        </div>

        <button>›</button>
      </div>
    </section>
  );
}

export default TeamSection;