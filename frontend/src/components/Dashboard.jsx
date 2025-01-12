import React, { useEffect, useState } from "react";
import axios from "../axiosConfig";
import { Link } from "react-router-dom";

function Dashboard() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    axios.get("/decks").then((response) => {
      setDecks(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Seus Decks</h1>
      {decks.map((deck) => (
        <div key={deck.id}>
          <h2>{deck.name}</h2>
          <Link to={`/review/${deck.id}`}>Revisar</Link>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;