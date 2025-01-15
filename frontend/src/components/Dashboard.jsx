import React, { useEffect, useState } from "react";
import axios from "../axiosConfig";
import { Link } from "react-router-dom";
import DeckCard from "./DeckCard";
import AddDeckCard from "./AddDeckCard";
import "./Dashboard.css";

function Dashboard() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    axios.get("/decks").then((response) => {
      setDecks(response.data);
    });
  }, []);

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Meus Decks</h1>
      <div className="dashboard-grid">
        {decks.map((deck) => (
          <div key={deck.id}>
            <h2>{deck.name}</h2>
            <Link to={`/review/${deck.id}`}>Revisar</Link>
          </div>
        ))}
      </div>

      <AddDeckCard />

    </div>
  );
}

export default Dashboard;