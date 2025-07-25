import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './Navbar.css';

function Navbar() {
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const navLinksRef = useRef(null);
  const menuToggleRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const navbar = navbarRef.current;
    const logo = logoRef.current;
    const navLinks = navLinksRef.current;
    const menuToggle = menuToggleRef.current;

    // Initial animation on component mount
    const tl = gsap.timeline();

    // Animate navbar sliding down
    tl.fromTo(navbar, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    )
    // Animate logo
    .fromTo(logo,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    )
    // Animate navigation links
    .fromTo(navLinks.children,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
      "-=0.3"
    )
    // Animate menu toggle
    .fromTo(menuToggle,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.5"
    );

    // Navbar scroll animation
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      if (scrollY > 50) {
        gsap.to(navbar, {
          scale: 0.9,
          backdropFilter: "blur(10px)",
          duration: 0.3,
          ease: "power2.out"
        });
      } else {
        gsap.to(navbar, {
          backgroundColor: "transparent",
          backdropFilter: "none",
          boxShadow: "none",
          duration: 0.3,
          ease: "power2.out"
        });
      }
    };

    // Handle window resize
    const handleResize = () => {
      if (window.innerWidth > 720) {
        // Reset mobile menu state when switching to desktop
        setIsMenuOpen(false);
        
        // Reset hamburger menu animation
        gsap.set(menuToggle.children[0], { rotation: 0, y: 0 });
        gsap.set(menuToggle.children[1], { opacity: 1 });
        gsap.set(menuToggle.children[2], { rotation: 0, y: 0 });
        
        // Ensure nav-links are visible on desktop (CSS will handle this with !important)
        gsap.set(navLinks, { clearProps: "all" });
      } else {
        // On mobile, ensure menu is closed if it was open
        if (isMenuOpen) {
          gsap.set(navLinks, { display: 'none' });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Add hover animations for nav links
    const navLinkItems = navLinks.querySelectorAll('li a');
    navLinkItems.forEach(link => {
      link.addEventListener('mouseenter', () => {
        gsap.to(link, {
          scale: 1.05,
          color: "#007bff",
          duration: 0.3,
          ease: "power2.out"
        });
      });

      link.addEventListener('mouseleave', () => {
        gsap.to(link, {
          scale: 1,
          color: "inherit",
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });

    // Logo hover animation
    logo.addEventListener('mouseenter', () => {
      gsap.to(logo, {
        scale: 1.1,
        rotation: 5,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    logo.addEventListener('mouseleave', () => {
      gsap.to(logo, {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  // Mobile menu toggle animation
  const toggleMobileMenu = () => {
    const navLinks = navLinksRef.current;
    const menuToggle = menuToggleRef.current;
    
    setIsMenuOpen(!isMenuOpen);

    if (!isMenuOpen) {
      // Open menu animation
      gsap.set(navLinks, { display: 'flex' });
      gsap.fromTo(navLinks,
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.5, ease: "power2.out" }
      );
      
      gsap.fromTo(navLinks.children,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, stagger: 0.1, delay: 0.2 }
      );

      // Animate hamburger to X
      gsap.to(menuToggle.children[0], {
        rotation: 45,
        y: 6,
        duration: 0.3
      });
      gsap.to(menuToggle.children[1], {
        opacity: 0,
        duration: 0.3
      });
      gsap.to(menuToggle.children[2], {
        rotation: -45,
        y: -6,
        duration: 0.3
      });
    } else {
      // Close menu animation
      gsap.to(navLinks.children,
        { y: -20, opacity: 0, duration: 0.2, stagger: 0.05 }
      );
      
      gsap.to(navLinks,
        { 
          height: 0, 
          opacity: 0, 
          duration: 0.4, 
          ease: "power2.in",
          delay: 0.2,
          onComplete: () => gsap.set(navLinks, { display: 'none' })
        }
      );

      // Animate X back to hamburger
      gsap.to(menuToggle.children[0], {
        rotation: 0,
        y: 0,
        duration: 0.3
      });
      gsap.to(menuToggle.children[1], {
        opacity: 1,
        duration: 0.3
      });
      gsap.to(menuToggle.children[2], {
        rotation: 0,
        y: 0,
        duration: 0.3
      });
    }
  };

  return (
    <nav className="navbar" id="navbar" ref={navbarRef}>
      <div className="nav-container">
        <div className="logo" ref={logoRef}>Love Khandelwal</div>
        <ul className="nav-links" id="nav-links" ref={navLinksRef}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div 
          className="menu-toggle" 
          id="menu-toggle" 
          ref={menuToggleRef}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;