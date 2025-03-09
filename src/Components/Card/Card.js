import React from 'react';
import './Card.css'
import { useState, useEffect, useRef } from 'react';
import ModalCarousel from '../ModalCarousel/ModalCarousel';

const Card = ({ title, image, description, images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Función para truncar el texto con una longitud adecuada
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };
  
  return (
    <div className="card" onClick={() => setIsModalOpen(true)}>
      <div className="card-content">
        <img 
          className='cardImg' 
          src={image} 
          alt={title} 
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className='descriptionContainer'>
            <p className="card-text">
              {truncateText(description, 80)}
            </p>
          </div>
        </div>
      </div>
      <ModalCarousel
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        images={images}
        title={title}
        description={description}
      />
    </div>
  )
}

export default Card;
