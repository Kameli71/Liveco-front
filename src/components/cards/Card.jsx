import React from 'react';
import './Card.css'

const Card = ({ card }) => {
  return (
  <div className='Card'>
      <div className="card-saint">
        <img src={card.image} alt={card.name} />
        <div className="card-desc">
            <h3>{card.name}</h3>
            <span>{card.level}</span>
        </div>
      </div>
  </div>
    );
};

export default Card;

