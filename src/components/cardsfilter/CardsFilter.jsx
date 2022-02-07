import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import Card from '../cards/Card';
import './CardsFilter.css'

const CardsFilter = () => {
    const [cards, setCards] = useState([]);
    const params = useParams();

    useEffect(() => {
        axios
        .get(`http://localhost:8000/saints/rank/${params.level}`)
        .then((res) => setCards(res.data))
    }, [params.level]);

  return (
  <div className='CardsFilter'>
      <div className="cardsFilter-container">
          {cards &&
          cards
          .map((card) =>
          <div key={card.id}>
            <Card card={card} />
          </div>
          )
          }
      </div>
  </div>
  );
};

export default CardsFilter;
