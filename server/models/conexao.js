// server/models/conexao.js
const mongoose = require('mongoose');

// Definir a URL do MongoDB
const server = 'localhost';
const database = 'contatos';
const port = 27017;
const url = `mongodb://${server}:${port}/${database}`;

// Função para conectar ao banco de dados MongoDB
const conectarBancoDeDados = async () => {
  try {
    console.log('Tentando conectar ao banco de dados...');
    await mongoose.connect(url);
    console.log('Conexão estabelecida com sucesso!');
  } catch (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    throw err;
  }
};

module.exports = { conectarBancoDeDados };
