const express = require("express");
const router = express.Router();

const User = require("../models/User.js");
const createUser = require("../controllers/userController");

// Criar usuário
router.post('/', createUser);

// Listar usuários
router.get("/", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

module.exports = router;