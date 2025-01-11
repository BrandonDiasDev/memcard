const express = require("express");
const Card = require("../models/Card");

const router = express.Router();

// Criar cards
router.post("/", async (req, res) => {
  try {
    const card = await Card.create(req.body);
    res.status(201).json(card);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Listar cards
router.get("/", async (req, res) => {
  const cards = await Card.findAll();
  res.json(cards);
});

module.exports = router;