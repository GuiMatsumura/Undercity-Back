import express from 'express';
import dotenv from 'dotenv';

// Carregando as variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Undercity!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});