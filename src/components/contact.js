import "../style/contact.css";

function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-header">
        <h2>
          Contacts <span>us</span>
        </h2>

        <p>
          Please get in touch and our expert support team will answer all
          your questions.
        </p>
      </div>

      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-visual">
          {/* Background Mockup */}
          <div className="bg-card"></div>

          {/* Circle Icon Placeholder */}
          <div className="circle-icon"></div>

          {/* Main Contact Card */}
          <div className="contact-card">
            <div className="card-images">
              <div className="image-placeholder"></div>
              <div className="image-placeholder"></div>
            </div>

            <div className="card-content">
              <div>
                <h4>Contact us</h4>
                <p>Get in touch with us</p>
              </div>

              <button>Message</button>
            </div>
          </div>

          {/* Triangle Placeholder */}
          <div className="triangle"></div>
        </div>

        {/* Right Side */}
        <form className="contact-form">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message"></textarea>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;