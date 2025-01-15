import React from "react";
//import "./DeckCard.css";

function AddDeckCard() {
    return (
      <div className="deck-card add-deck-card">
        <button className="add-deck-button">
          <span>+</span>
          <p>Adicionar Novo Deck</p>
        </button>
      </div>
    );
  }

export default AddDeckCard;