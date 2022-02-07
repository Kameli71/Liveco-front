import React from 'react';
import { Link } from 'react-router-dom';
import './CardsLvlFilter.css'

const CardsLvlFilter = ({ card }) => {
  return (
  <div className='CardsLvlFilter'>
      <Link to={{ pathname: `/rank/${card.level}` }}>
      <div className="CardsLvlFilter-container">
       <span>{card.level}</span>
      </div>
      </Link>
  </div>
    );
};

export default CardsLvlFilter;
