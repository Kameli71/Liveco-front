import React, { useState, useEffect } from 'react';
import CardsLvlFilter from './CardsLvlFilter'
import axios from 'axios';
import './CardsFilter'

const CardsLvl = () => {
    const [cards, setCards] = useState([]);

    
    useEffect(() => {
      axios
      .get("http://localhost:8000/saints/")
      .then((res) => res.data)
      .then((data) => setCards(data))
  }, []);

  return (
  <div className='CardsLvl'>
      <div className="cardsLvl-container">
        {cards &&
        cards
        .filter((card, id, self) =>
        id === self.findIndex((t) => (
        t.level === card.level 
        ))
        )
        .map((card) =>
      <div key={card.id}>
        <CardsLvlFilter card={card} />
      </div>
      )}
      </div>
  </div>
    );
};

export default CardsLvl;
