import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import router from "./routes/routesIndex.js";

// Carregando as variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 3000;

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
