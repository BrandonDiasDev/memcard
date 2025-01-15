import React, { useEffect, useState } from "react";
import axios from "../axiosConfig";
import { Link } from "react-router-dom";
import DeckCard from "./DeckCard";
import AddDeckCard from "./AddDeckCard";
//import "./Dashboard.css";

function Dashboard() {
  const [decks, setDecks] = useState([]);

 
  useEffect(() => {
    const fetchDecks = async () => {
        try {
            const { data } = await axios.get("/decks")
              setDecks(data);          
          }
      catch (error) {
        console.error("Erro ao carregar decks no Dashboard:", error);
      }
    };    
    fetchDecks();
  },[]);
  
  

    return (
      
        <div className="dashboard">
        <h1 className="dashboard-title">Meus Decks</h1>
        <div className="dashboard-grid">
          {decks.map((deck) => (
            <DeckCard key={deck.id} deck={deck} />
          ))}
        </div>
  
        <AddDeckCard />
  
      </div>    
    );
}

export default Dashboard;