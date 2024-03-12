import React from "react";

const ContactSection = () => {
  return (
    <div className="contact-section-container">
      <h1 className="contact-title">Contact Me</h1>
      <p className="contact-description">
        Here are the ways you can get in touch with me.
      </p>
      <div className="contact-content-container">
        <div className="contact-option">
          <a href="mailto:aronberhane@hotmail.com?subject=Website Mail!&body=Hey Aron,">
            <h3>Email: aronberhane@hotmail.com</h3>
          </a>
        </div>
        <div className="contact-option">
          <a
            href="https://www.linkedin.com/in/aron-berhane-0485b820b/"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Message me on LinkedIn!</h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
