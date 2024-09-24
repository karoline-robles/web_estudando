// routes/contatos.js
const express = require('express');  // Importa o framework Express
const router = express.Router();  // Cria um roteador para gerenciar as rotas
const Contato = require('../models/Contato'); // Importa o modelo Contato

// Listar todos os contatos
router.get('/', async (req, res) => {
    const contatos = await Contato.find();  // Busca todos os contatos no banco de dados
    res.json(contatos);  // Retorna os contatos em formato JSON
});

// Criar novo contato
router.post('/', async (req, res) => {
    const { nome, email, telefone } = req.body;  // Desestrutura os dados do corpo da requisição
    if (!nome) return res.status(400).json({ message: 'O nome é obrigatório.' });  // Verifica se o nome foi fornecido

    const novoContato = new Contato({ nome, email, telefone });  // Cria um novo contato com os dados fornecidos
    await novoContato.save();  // Salva o novo contato no banco de dados
    res.status(201).json(novoContato);  // Retorna o contato criado com status 201 (Criado)
});

// Detalhes de um contato
router.get('/:id', async (req, res) => {
    const contato = await Contato.findById(req.params.id);  // Busca o contato pelo ID fornecido na URL
    if (!contato) return res.status(404).json({ message: 'Contato não encontrado.' });  // Retorna 404 se o contato não for encontrado
    res.json(contato);  // Retorna os detalhes do contato em formato JSON
});

// Editar um contato
router.put('/:id', async (req, res) => {
    const { nome, email, telefone } = req.body;  // Desestrutura os dados do corpo da requisição
    const contatoAtualizado = await Contato.findByIdAndUpdate(req.params.id, { nome, email, telefone }, { new: true });  // Atualiza o contato no banco de dados
    res.json(contatoAtualizado);  // Retorna o contato atualizado
});

// Deletar um contato
router.delete('/:id', async (req, res) => {
    await Contato.findByIdAndDelete(req.params.id);  // Deleta o contato pelo ID fornecido na URL
    res.json({ message: 'Contato excluído com sucesso!' });  // Retorna uma mensagem de sucesso
});

// Exporta o roteador para ser utilizado em outros arquivos
module.exports = router;