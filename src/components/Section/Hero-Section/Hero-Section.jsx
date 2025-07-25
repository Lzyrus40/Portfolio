import React, { useState, useEffect, useRef } from 'react';
import './Hero-Section.css';

function HeroSection() {
  const [gradientAngle, setGradientAngle] = useState(0);
  const heroBackgroundRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    
    const updateGradient = () => {
      if (!heroBackgroundRef.current) return;
      
      heroBackgroundRef.current.style.background = `
        radial-gradient(
          circle at ${30 + Math.sin(gradientAngle * 0.01) * 10}% 
          ${50 + Math.cos(gradientAngle * 0.01) * 10}%, 
          rgba(0, 212, 255, 0.1) 0%, 
          transparent 50%
        ),
        radial-gradient(
          circle at ${70 + Math.sin(gradientAngle * 0.015) * 10}% 
          ${80 + Math.cos(gradientAngle * 0.015) * 10}%, 
          rgba(255, 107, 107, 0.1) 0%, 
          transparent 50%
        )`;
    };

    const animate = () => {
      setGradientAngle(prev => prev + 0.5);
      updateGradient();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [gradientAngle]);

  // Add parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (heroBackgroundRef.current) {
        const scrolled = window.pageYOffset;
        heroBackgroundRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero" id="home">
      <div 
        className="hero-background"
        ref={heroBackgroundRef}
      />
      <div className="hero-content">
        <h1 className="hero-title">Love Khandelwal</h1>
        <h2 className="hero-subtitle">MERN Stack Developer</h2>
        <p className="hero-description">
          Highly skilled developer specializing in secure and scalable web applications with expertise in cybersecurity best practices and full-stack solutions.
        </p>
        <div className="cta-buttons">
          <a href="#projects" className="btn btn-primary">
            <i className="fas fa-code"></i> View Projects
          </a>
          <a href="/src/assets/resume_love_khandelwal.pdf" className="btn btn-secondary">
            <i className="fas fa-envelope"></i> Get Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;