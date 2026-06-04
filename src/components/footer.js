import "../style/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-column company">
          <h2>
            <span className="logo-placeholder"></span>
            Zone<span>Tech</span>
          </h2>

          <p>
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s.
          </p>

          <div className="social-links">
            <div className="icon-placeholder"></div>
            <div className="icon-placeholder"></div>
            <div className="icon-placeholder"></div>
            <div className="icon-placeholder"></div>
          </div>
        </div>

        {/* About */}
        <div className="footer-column">
          <h4>About Us</h4>

          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>How We Work</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Location */}
        <div className="footer-column">
          <h4>Location</h4>

          <p>
            230, 381 Rainchview Dr.
            <br />
            Richarson, California 62639
          </p>

          <p>
            230, 381 Rainchview Dr.
            <br />
            Richarson, California 62639
          </p>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h4>Contact Us</h4>

          <p>+91 85224 85225</p>
          <p>+91 85224 85225</p>
          <p>zonetech@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;