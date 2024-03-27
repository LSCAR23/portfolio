import React from 'react';
import './Card.css'
import { useState, useEffect, useRef } from 'react';
import ModalCarousel from '../ModalCarousel/ModalCarousel';
const Card = ({ title, image, description, images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="card" >
      <div onClick={() => setIsModalOpen(true)}>
        <img className='cardImg' src={image} alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description}
          </p>
        </div>
      </div>
      <ModalCarousel
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        images={images}
        title={title}
        description={description}
      ></ModalCarousel>
    </div>
  )
}

export default Card;
