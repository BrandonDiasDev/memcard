import axios from "axios";

// Configuração global
const instance = axios.create({
  baseURL: "http://localhost:3001/api", // URL base do back-end
  timeout: 5000, // Tempo limite para requisições (em ms)
});

export default instance;