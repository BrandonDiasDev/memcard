import React, { useEffect, useState } from "react";
import axios from "../axiosConfig";
import { Link } from "react-router-dom";
//import "./DeckCard.css";


function DeckCard({ deck }) {
    const [cardsCount, setCardsCount] = useState(null);
  
    useEffect(() => {
      const fetchCardsCount = async () => {
        try {
          const { data } = await axios.get(`/decks/${deck.id}/count_cards`);
          setCardsCount(data.count_cards); // Supondo que o endpoint retorna `{ count: <número de cartas> }`
        } catch (error) {
          console.error(`Erro ao contar cartas no deck ${deck.id}:`, error);
        }
      };
  
      fetchCardsCount();

    }, [deck.id]);
    
      return (
        <div className="deck-card">
        <h2 className="deck-card-title">{deck.name}</h2>
        <p className="deck-card-count">
            {cardsCount !== null ? `${cardsCount} cards` : "Carregando..."}
        </p>
        <Link to={`/review/${deck.id}`} className="deck-card-link">
            Estudar
        </Link>
        </div>
    );
}


export default DeckCard;