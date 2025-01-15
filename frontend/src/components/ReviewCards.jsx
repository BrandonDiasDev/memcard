import React, { useEffect, useState } from "react";
import axios from "../axiosConfig";
import { useParams } from "react-router-dom";

function ReviewCards() {
  const { deckId } = useParams();
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(`/decks/${deckId}/cards`);
        console.log("Response Data", response.data);
        setCards(response.data);
      } catch (error) {
        console.error("Erro ao carregar cards:", error.message);
      }
    };
  
    fetchCards();
  }, [deckId]);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  return (
    <div>
      {cards.length > 0 ? (
        <div>
          <h1>{cards[currentIndex].question}</h1>
          <button onClick={nextCard}>Próximo</button>
        </div>
      ) : (
        <p>Não existem cards para serem exibidos.</p>
      )}
    </div>
  );
}

export default ReviewCards;