// models/Contato.js
const { Schema, model } = require('mongoose');  // Importa os métodos Schema e model do mongoose

// Define o esquema para o modelo de contato
const contatoSchema = new Schema({
    nome: { type: String, required: true },  // Campo nome é obrigatório e deve ser uma string
    email: String,  // Campo email é opcional e deve ser uma string
    telefone: String,  // Campo telefone é opcional e deve ser uma string
});

// Cria o modelo Contato com base no contatoSchema
const Contato = model('Contato', contatoSchema);

// Exporta o modelo para ser utilizado em outros arquivos
module.exports = Contato;
