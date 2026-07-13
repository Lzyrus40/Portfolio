import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Video Calling App (WebRTC)",
      location: "Jaipur",
      link: "https://github.com/Lzyrus40/WebRTC",
      deployLink: "https://webrtc-dqxz.onrender.com/",
      description:
        "Developed a real-time video calling application utilizing WebRTC technology. Implemented media streaming, signaling using a Node.js server, SDP negotiation, and ICE candidate exchange for seamless communication.",
    },
    {
      title: "Express.js Clone (Nodester)",
      location: "Jaipur",
      link: "https://www.npmjs.com/package/@lzyrus_/nodester",
      description:
        "Designed and built a clone of the Express.js framework using the Node.js HTTP server. Integrated core routing and middleware functionality. Successfully published the project on npm.",
    },
    {
      title: "AI-Based-Job-Recommendation",
      location: "Jaipur",
      deployLink: "https://ai-job-recommendation-ten.vercel.app/",
      link: "https://github.com/Lzyrus40/AI-Job-Recommendation",
      description:
        "This is a full-stack job recommendation app that uses OpenAI's API to suggest jobs based on user profiles. It features a user-friendly interface for profile creation and job recommendations, leveraging AI to enhance the job search experience.",
    },
    {
      title: "Employee Management System",
      location: "Jaipur",
      deployLink: "https://ems-snowy-theta.vercel.app/",
      link: "https://github.com/Lzyrus40/EMS",
      description:
        "Created a comprehensive Employee Management System using React.js and local storage. Integrated features for task assignment, status updates, and real-time tracking.",
    },
    {
      title: "iSecure Note-Taking WebApp",
      location: "Jaipur",
      deployLink: "https://i-note-book-black.vercel.app/",
      link: "https://github.com/Lzyrus40/iSecure-Note-Taking-WebApp",
      description:
        "Engineered a secure note-taking web application with JWT-based authentication, robust login system, and protection against password cracking attacks using salted password hashing.",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-location">{project.location}</p>
            </div>
            <div className="project-content">
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a
                  href={project.link}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                  View Code
                </a>
                {project.deployLink && (
                  <a
                    href={project.deployLink}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                    Deploy Link
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
