const { Deck } = require("../models");

// Função para criar um deck

const createDeck = async (req, res) => {
    try {
      const { name, user_id } = req.body;
  
      // Verifica se todos os campos estão preenchidos
      if (!name || !user_id) {
        return res.status(400).json({ error: "Deck creation: Todos os campos são obrigatórios" });
      }
  
      // Cria o usuário no banco de dados
      const newDeck = await Deck.create({
        name,
        user_id,
      });
  
      // Retorna o deck criado
      res.status(201).json({
        id: newDeck.id,
        name: newDeck.name,
        user_id: newDeck.user_id,
        message: "Deck criado com sucesso!",
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

// Exporta a função createDeck
module.exports = createDeck;