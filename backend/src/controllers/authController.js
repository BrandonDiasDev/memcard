const User = require("../models/User");
const bcrypt = require("bcrypt");

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
        return res.status(401).json({ error: "Usuário: Credenciais inválidas" }); // Retorna erro se o usuário não existe
      }
    
    // Compara a senha fornecida com a hash armazenada
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Senha: Credenciais inválidas" }); // Retorna erro se a senha está incorreta
    }

    res.status(200).json({ message: "Login bem-sucedido", user });


  } catch (error) {
    res.status(500).json({ texto: "Erro no servidor", error: error.message});
  }
};

module.exports = { loginUser };