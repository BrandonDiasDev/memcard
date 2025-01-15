const express = require("express");
const Deck = require("../models/Deck");
const Card = require("../models/Card");

const router = express.Router();

// Criar deck
const createDeck = require("../controllers/deckController");
router.post('/', createDeck);


// Rota para listar os cards de um deck específico

router.get("/:deck_id/cards", async (req, res) => {
  try {
    const { deck_id } = req.params;
    const deck = await Deck.findByPk(deck_id);

    if (!deck) {
      return res.status(404).json({ 
        message: "Deck não encontrado", 
        deck_id: `Deck_id procurado é ${deck_id}`, 
        req_params:`parametros de busca é ${req.params}` 
      });
    }    

    const cards = await Card.findAll({ where: { deck_id } }); // Certifique-se de que "deckId" é o campo correto
    if (!cards.length) {
      return res.status(404).json({ message: "Nenhum card encontrado para este deck" });
    }
    res.json(cards);
  } catch (error) {
    console.error("Erro ao recuperar cards: " + error.message);
    res.status(500).send("Erro no servidor ao recuperar cards");
  }
});

// Rota para contar os cards de um deck específico

router.get("/:deck_id/count_cards", async (req, res) => {
  try {
    const { deck_id } = req.params;
    const deck = await Deck.findByPk(deck_id);

    console.log("Deck_id: " + deck_id);
    console.log("req.params: " + req.params);


    if (!deck) {
      return res.status(404).json({ 
        message: "Deck não encontrado", 
        deck_id: `Deck_id procurado é ${deck_id}`, 
        req_params:`parametros de busca é ${req.params}` 
      });
    }    

    const cards = await Card.findAll({ where: { deck_id } }); // Certifique-se de que "deckId" é o campo correto
      return res.json ({count_cards: cards.length});
    
  } catch (error) {
    console.error("Erro ao recuperar cards: " + error.message);
    res.status(500).send("Erro no servidor ao recuperar cards");
  }
});


// Listar decks
router.get("/", async (req, res) => {
  try{
    const decks = await Deck.findAll();
    res.json(decks);
  }
  catch (error) {
    console.error("Erro ao recuperar decks: " + error.message);
  }
  
});

module.exports = router;