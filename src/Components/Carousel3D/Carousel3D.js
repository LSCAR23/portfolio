// Carousel3D.js
import React, { useState, useEffect } from 'react';
import './Carousel3D.css'; // El CSS que creamos anteriormente
import Card from '../Card/Card'; // Importar el componente Card existente

const Carousel3D = ({ cards, autoPlay = true, autoPlayInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [cards.length, isAutoPlaying, autoPlayInterval]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const getSlideClass = (index) => {
    const diff = index - currentIndex;
    const length = cards.length;
    
    // Normalize the difference to handle circular array
    let normalizedDiff = diff;
    if (Math.abs(diff) > length / 2) {
      normalizedDiff = diff > 0 ? diff - length : diff + length;
    }

    if (normalizedDiff === 0) return 'active';
    if (normalizedDiff === 1 || normalizedDiff === -(length - 1)) return 'next';
    if (normalizedDiff === -1 || normalizedDiff === (length - 1)) return 'prev';
    if (normalizedDiff === 2 || normalizedDiff === -(length - 2)) return 'far-next';
    if (normalizedDiff === -2 || normalizedDiff === (length - 2)) return 'far-prev';
    
    return 'hidden';
  };

  const handleCardClick = (index) => {
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  };

  return (
    <div className="projects-carousel-container">
      <h2 className="projects-title">Projects</h2>
      
      <div 
        className="carousel-3d-container"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(autoPlay)}
      >
        <div className="carousel-3d-wrapper">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`carousel-slide-3d ${getSlideClass(index)}`}
              onClick={() => handleCardClick(index)}
            >
              <Card
                title={card.title}
                image={card.image}
                description={card.description}
                images={card.images}
              />
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="carousel-controls-3d">
          <button
            className="carousel-btn-3d"
            onClick={goToPrev}
            aria-label="Previous slide"
          >
            ◀
          </button>
          <button
            className="carousel-btn-3d"
            onClick={goToNext}
            aria-label="Next slide"
          >
            ▶
          </button>
        </div>


      </div>
    </div>
  );
};

export default Carousel3D;