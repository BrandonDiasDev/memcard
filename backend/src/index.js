const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const routes = require('./routes');
app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });