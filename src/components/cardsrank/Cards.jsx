import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css'

const Cards = ({ card }) => {
  return (
  <div className='Cards'>
      <Link to={{ pathname: `/rank/${card.level}` }}>
      <div className="cards-container">
       <span>{card.level}</span>
      </div>
      </Link>
  </div>
    );
};

export default Cards;
