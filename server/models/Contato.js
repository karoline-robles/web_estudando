// models/Contato.js
const { Schema, model } = require('mongoose');

const contatoSchema = new Schema({
    nome: { type: String, required: true },
    email: String,
    telefone: String,
});

const Contato = model('Contato', contatoSchema);

module.exports = Contato;
