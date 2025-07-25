import { useEffect, useRef } from 'react';
import './ParticleEffect.css'; 

const ParticleEffect = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    const container = particlesRef.current; 
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + 'vw';
      particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
      particle.style.opacity = Math.random();

      if (container) {
        container.appendChild(particle);
      }

      setTimeout(() => {
        particle.remove();
      }, 5000);
    };

    const interval = setInterval(createParticle, 300);

    return () => {
      clearInterval(interval);
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return <div className="particles" ref={particlesRef} />;
};

export default ParticleEffect;
