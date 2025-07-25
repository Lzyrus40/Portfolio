import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FaLinkedinIn, FaGithub, FaCode ,FaHeart} from "react-icons/fa";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faPhone, faHeart } from '@fortawesome/free-solid-svg-icons';
// import { faLinkedinIn, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons';
import "./Contact.css";

const Contact = () => {
  return (
    <section className="Contact-section" id="contact">
      <h2 className="section-title">Let's Contact</h2>
      <div className="Contact-content">
        <p className="Contact-description">
          I'm always open to discussing new opportunities, collaborations, or
          just having a chat about technology. Feel free to reach out!
        </p>

        <div className="contact-options">
          <div className="contact-methods">
            <a
              href="mailto:lovekhandelwal784@gmail.com"
              className="contact-item"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <span>lovekhandelwal784@gmail.com</span>
            </a>
            <a href="tel:6376133689" className="contact-item">
              <FontAwesomeIcon icon={faPhone} />
              <span>6376133689</span>
            </a>
          </div>

          <div className="cta-buttons">
            <a
              href="mailto:lovekhandelwal784@gmail.com"
              className="btn btn-primary"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              Send Email
            </a>
            <a href="tel:6376133689" className="btn btn-secondary">
              <FontAwesomeIcon icon={faPhone} />
              Call Now
            </a>
          </div>
        </div>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/love-khandelwal/" className="social-link" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/Lzyrus40" className="social-link" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://leetcode.com/u/lzyrus40/" className="social-link" aria-label="LeetCode">
           <FaCode/>
          </a>
          <a
            href="mailto:lovekhandelwal784@gmail.com"
            className="social-link"
            aria-label="Email"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>

        <p className="footer-text">
          © 2024 Love Khandelwal. Crafted with
          <FaHeart/>
          and passion for code.
        </p>
      </div>
    </section>
  );
};

export default Contact;
