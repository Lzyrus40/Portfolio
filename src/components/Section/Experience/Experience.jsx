import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faCertificate } from '@fortawesome/free-solid-svg-icons';
import './Experience.css';

const Experience = () => {
  const experience = [
    {
      title: "Full Stack Web Developer",
      company: "Learn And Build",
      date: "Jul 2023 — Aug 2023",
      description: "Developed full-stack web applications using modern technologies and frameworks. Collaborated with cross-functional teams to deliver high-quality solutions."
    },
    {
      title: "Node.js Developer",
      company: "Orbiter",
      date: "Mar 2023 — Jun 2023",
      description: "Specialized in backend development using Node.js, building scalable server-side applications and RESTful APIs with focus on performance optimization."
    }
  ];

  const education = [
    {
      title: "B.Tech in Computer Science",
      company: "Arya College of Engineering, Kukas, Jaipur",
      date: "Sep 2021 — Present",
      description: "Currently pursuing Bachelor of Technology in Computer Science with a GPA of 8.0. Focusing on software development, algorithms, and cybersecurity fundamentals."
    }
  ];

  const certifications = [
    {
      title:" MongoDB ",
      company: "MongoDB University",
      date: "2023-24"
    },
    {
      title: "CISCO Networking Academy",
      company: "Cybersecurity Job Simulation",
      date: "Sep 2023"
    },
    {
      title: "Mastercard Cybersecurity",
      company: "Virtual Experience Program on Forage",
      date: "Aug 2023"
    },
    {
      title: "Introduction to Programming in C",
      company: "NPTEL",
      date: "Mar 2023"
    },
    {
      title: "Complete 2023 Web Development Bootcamp",
      company: "Udemy",
      date: "Oct 2023"
    }
  ];

  return (
    <section className="experience-section" id="experience">
      <h2 className="section-title">Experience & Education</h2>

      <h3 className="subsection-title">
        <FontAwesomeIcon icon={faBriefcase} /> Professional Experience
      </h3>
      <div className="experience-timeline">
        {experience.map((exp, index) => (
          <div className="experience-item" key={`exp-${index}`}>
            <h4 className="experience-title">{exp.title}</h4>
            <p className="experience-company">{exp.company}</p>
            <span className="experience-date">{exp.date}</span>
            <p className="experience-description">{exp.description}</p>
          </div>
        ))}
      </div>

      <h3 className="subsection-title">
        <FontAwesomeIcon icon={faGraduationCap} /> Education
      </h3>
      <div className="experience-timeline">
        {education.map((edu, index) => (
          <div className="experience-item" key={`edu-${index}`}>
            <h4 className="experience-title">{edu.title}</h4>
            <p className="experience-company">{edu.company}</p>
            <span className="experience-date">{edu.date}</span>
            <p className="experience-description">{edu.description}</p>
          </div>
        ))}
      </div>

      <h3 className="subsection-title">
        <FontAwesomeIcon icon={faCertificate} /> Certifications
      </h3>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div className="cert-card" key={`cert-${index}`}>
            <h4 className="cert-title">{cert.title}</h4>
            <p className="cert-company">{cert.company}</p>
            <span className="cert-date">{cert.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;