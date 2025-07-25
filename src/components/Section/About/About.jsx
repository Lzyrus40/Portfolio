import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <img 
            src="Love.png" 
            alt="Love Khandelwal" 
            className="profile-img" 
          />
        </div>
        <div className="about-text">
          <h3>Professional Summary</h3>
          <p>
            I'm a highly skilled MERN Stack Developer with extensive experience in developing secure and scalable web applications. 
            My expertise spans across MongoDB, Express.js, React.js, and Node.js, with a proven track record in delivering 
            high-performance full-stack solutions.
          </p>
          <p>
            I specialize in implementing cybersecurity best practices, including secure coding standards, authentication protocols, 
            and vulnerability mitigation techniques, ensuring compliance and application security. My strong problem-solving abilities 
            and collaborative approach help me deliver high-quality software solutions tailored to client needs.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <FontAwesomeIcon icon={faPhone} />
              <span>6376133689</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>lovekhandelwal784@gmail.com</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>Jaipur, Rajasthan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;