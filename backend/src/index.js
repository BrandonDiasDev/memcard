const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Rotas básicas (ping para testar)
app.get("/", (req, res) => {
  res.send("Memcard API is running!");
});

// Routes
const routes = require('./routes');
app.use('/api', routes);

const userRoutes = require("./routes/userRoutes.js");
app.use("/api/users", userRoutes);

const deckRoutes = require("./routes/deckRoutes");
app.use("/api/decks", deckRoutes);

const cardRoutes = require("./routes/cardRoutes");
app.use("/api/cards", cardRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });

//Database
const sequelize = require("./config/database.js");

// Sincronizar o banco de dados
sequelize.sync({ force: true }) // force: true recria as tabelas sempre que o servidor é reiniciado.
  .then(() => {
    console.log("Tables created!");
  })
  .catch(err => {
    console.error("Error syncing database:", err.message);
  });
  
// Conecetar ao banco
sequelize.authenticate()
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Unable to connect to the database:", err.message));


