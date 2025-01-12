const express = require("express");
const Card = require("../models/Card");

const router = express.Router();

// Criar cards
const createCard = require("../controllers/cardController");
router.post('/', createCard);

// Listar cards
router.get("/", async (req, res) => {
  const cards = await Card.findAll();
  res.json(cards);
});

module.exports = router;