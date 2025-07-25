import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faShieldAlt, faLaptopCode, faHeart } from '@fortawesome/free-solid-svg-icons';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3><FontAwesomeIcon icon={faCode} /> Web Development</h3>
          <div className="skill-tags">
            {['HTML', 'CSS', 'JavaScript', 'Node.js', 'React.js', 'Redux', 
              'MongoDB', 'Express', 'WebSockets', 'WebRTC', 'Next.js', 'TypeScript']
              .map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
          </div>
        </div>

        <div className="skill-category">
          <h3><FontAwesomeIcon icon={faShieldAlt} /> Cyber Security</h3>
          <div className="skill-tags">
            {['Networking', 'Threat Analysis', 'Information Gathering', 
              'Cryptography', 'Steganography', 'System Security']
              .map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
          </div>
        </div>

        <div className="skill-category">
          <h3><FontAwesomeIcon icon={faLaptopCode} /> Programming Languages</h3>
          <div className="skill-tags">
            {['C', 'C++', 'JavaScript']
              .map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
          </div>
        </div>

        <div className="skill-category">
          <h3><FontAwesomeIcon icon={faHeart} /> Interests</h3>
          <div className="skill-tags">
            {['GraphQL', 'Redis', 'Apache Kafka']
              .map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;