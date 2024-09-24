// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { conectarBancoDeDados } = require('./server/models/conexao');  // Importando a conexão com o MongoDB
const contatosRoutes = require('./server/routes/contatos');  // Importando as rotas

// Inicialização do servidor Express
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conectar ao banco de dados e iniciar o servidor
conectarBancoDeDados().then(() => {
  console.log('Banco de dados conectado, iniciando o servidor...');

  // Iniciar o servidor após a conexão com o banco de dados
  app.use('/contatos', contatosRoutes);

  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}).catch((err) => {
  console.error('Falha ao conectar ao banco de dados. O servidor não foi iniciado.', err);
});
