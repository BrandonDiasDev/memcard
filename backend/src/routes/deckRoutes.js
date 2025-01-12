const express = require("express");
const Deck = require("../models/Deck");

const router = express.Router();

// Criar deck
const createDeck = require("../controllers/deckController");
router.post('/', createDeck);

// Listar decks
router.get("/", async (req, res) => {
  const decks = await Deck.findAll();
  res.json(decks);
});

module.exports = router;