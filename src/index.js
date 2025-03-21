import express from "express";
import dotenv from "dotenv";

import router from "./routes/routesIndex.js";

// Carregando as variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(router);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
