import React, { useState, useEffect } from 'react';
import Cards from './Cards'
import axios from 'axios';
import './CardsRank'

const CardsRank = () => {
    const [cards, setCards] = useState([]);

    
    useEffect(() => {
      axios
      .get("http://localhost:8000/saints/")
      .then((res) => res.data)
      .then((data) => setCards(data))
  }, []);

  return (
  <div className='CardsRank'>
      <div className="cardsRank-container">
        {cards &&
        cards
        .filter((card, id, self) =>
        id === self.findIndex((t) => (
        t.level === card.level 
        ))
        )
        .map((card) =>
      <div key={card.id}>
        <Cards card={card} />
      </div>
      )}
      </div>
  </div>
    );
};

export default CardsRank;
