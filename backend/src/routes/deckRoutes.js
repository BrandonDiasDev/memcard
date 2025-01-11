const express = require("express");
const Deck = require("../models/Deck");

const router = express.Router();

// Criar deck
router.post("/", async (req, res) => {
  try {
    const deck = await Deck.create(req.body);
    res.status(201).json(deck);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Listar decks
router.get("/", async (req, res) => {
  const decks = await Deck.findAll();
  res.json(decks);
});

module.exports = router;