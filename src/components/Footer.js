import React from "react";
import "../assests/Footer.css";

const Footer = () => {
  return (
    <div className="footer-outer-container">
      <div className="footer-upper-container">
        <div className="footer-made-with-care">
          <p>
            With <span className="care">care</span> and{" "}
            <span className="care">commitment</span> 2024 Edition
          </p>
        </div>
        <div className="footer-outer-links">
          <a
            href="https://www.linkedin.com/in/aron-berhane-0485b820b/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="footer-links linkedin-link"></div>
          </a>
          <a
            href="https://github.com/wildheat"
            target="_blank"
            rel="noreferrer"
          >
            <div className="footer-links git-link"></div>
          </a>
        </div>
      </div>
      <hr />
      <h5 className="copyright">© Aron Berhane 2024</h5>
    </div>
  );
};

export default Footer;
