const { removeTicks } = require("sequelize/lib/utils");
const { Card } = require("../models");

// Função para criar um card

const createCard = async (req, res) => {
    try {
      const { question, answer, deck_id, review_date } = req.body;
  
      // Verifica se todos os campos estão preenchidos
      if (!question || !answer || !deck_id || !review_date ) {
        return res.status(400).json({ error: "Card creation: Todos os campos são obrigatórios" });
      }
  
      // Cria o card no banco de dados
      const newCard = await Card.create({
        question,
        answer,
        deck_id,
        review_date
      });
  
      // Retorna o card criado
      res.status(201).json({
        id: newCard.id,
        question: newCard.question,
        answer: newCard.answer,
        deck: newCard.deck_id,
        review_date: newCard.review_date,
        message: "Card criado com sucesso!"

      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

// Exporta a função createCard
module.exports = createCard;