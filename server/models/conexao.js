// server/models/conexao.js
const mongoose = require('mongoose');  // Importa o módulo mongoose para interagir com MongoDB

// Definir a URL do MongoDB
const server = 'localhost';  // Endereço do servidor MongoDB
const database = 'contatos';  // Nome do banco de dados que será utilizado
const port = 27017;  // Porta padrão do MongoDB
const url = `mongodb://${server}:${port}/${database}`;  // Monta a URL de conexão

// Função para conectar ao banco de dados MongoDB
const conectarBancoDeDados = async () => {
  try {
    console.log('Tentando conectar ao banco de dados...');  // Mensagem de tentativa de conexão
    await mongoose.connect(url);  // Tenta conectar ao MongoDB usando a URL definida
    console.log('Conexão estabelecida com sucesso!');  // Mensagem de sucesso na conexão
  } catch (err) {
    console.error('Erro ao conectar ao banco de dados:', err);  // Exibe erro caso a conexão falhe
    throw err;  // Lança o erro para que possa ser tratado em outro lugar
  }
};

// Exporta a função para ser utilizada em outros arquivos
module.exports = { conectarBancoDeDados };
