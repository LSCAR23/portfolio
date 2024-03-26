import React from 'react';
import './Card.css'
const Card = ({ title, image, description }) => (
  <div className="card">
    <img src={image} alt={title} />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
    </div>
  </div>
);

export default Card;
