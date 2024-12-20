import React, { useEffect } from "react";
import "./Hero.css";

function Hero() {
  useEffect(() => {
    // JavaScript for floating icon animation
    const icons = document.querySelectorAll(".floating-icon");
    icons.forEach((icon) => {
      const direction = Math.random() < 0.5 ? 1 : -1;
      const speed = Math.random() * 2 + 1; // Random speed between 1s and 3s
      let angle = 0;

      function moveIcon() {
        angle += direction * speed;
        icon.style.transform = `translate(${Math.sin(angle) * 30}px, ${
          Math.cos(angle) * 30
        }px)`;
      }

      const interval = setInterval(moveIcon, 30); // Adjust movement speed

      // Clear the interval when the component is unmounted
      return () => clearInterval(interval);
    });
  }, []);

  const handleBrowseCatalog = () => {
    // Navigate to catalog (for example, by changing location or opening a modal)
    window.location.href = "/catalog";
  };

  const handleLearnMore = () => {
    // Show more info about the library or display a modal
    alert("Learn more about LibrarySpace!");
  };

  return (
    <section className="hero" id="heroSection">
      <div className="hero-background"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          <img
            src="https://img.icons8.com/?size=80&id=etrl0QLJDest&format=png"
            alt="Book Icon"
            className="floating-icon icon-1"
          />
          Welcome to LibrarySpace
          <img
            src="https://img.icons8.com/?size=80&id=GHSh1jCeMfBz&format=png"
            alt="Lightbulb Icon"
            className="floating-icon icon-2"
          />
        </h1>
        <p className="hero-description">
          Your perfect study spot with all the resources you need.
          <br /> Explore an endless world of books, learning resources, and
          study spaces.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={handleBrowseCatalog}>
            Browse the Catalog
          </button>
          <button className="btn-secondary" onClick={handleLearnMore}>
            Learn More
          </button>
        </div>
      </div>
      <div className="floating-images"></div>
    </section>
  );
}

export default Hero;
