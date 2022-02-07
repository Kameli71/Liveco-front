import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import './CardList.css'

const CardList = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios
        .get("http://localhost:8000/saints/")
        .then((res) => setCards(res.data))
        // .then((data) => setCards(data))
    }, []);

  return (
  <div className='CardList'>
      <h2 className="cardList-title">Chevaliers d'Athéna !</h2>
      <div className="cardList-container">
          { cards &&
          cards
          .map((card) =>
          <div key={card.id}>
              <Card card={card} />
          </div>
          )}
      </div>
  </div>
  );
};

export default CardList;
