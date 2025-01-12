const bcrypt = require("bcrypt");
const { User } = require("../models");

// Função para criar um usuário
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Verifica se todos os campos estão preenchidos
    if (!name || !email || !password) {
      return res.status(400).json({ error: "Criando Usuários: Todos os campos são obrigatórios!" });
    }

    // Gera o hash da senha
    const passwordHash = await bcrypt.hash(password, 10);

    // Cria o usuário no banco de dados
    const newUser = await User.create({
      name,
      email,
      password_hash: passwordHash,
    });

    // Retorna o usuário criado
    res.status(201).json({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      message: "Usuário criado com sucesso!",
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Exporta a função createUser
module.exports = createUser;