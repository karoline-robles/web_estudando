// routes/contatos.js
const express = require('express');
const router = express.Router();
const Contato = require('../models/Contato'); // O modelo do contato

// Listar todos os contatos
router.get('/', async (req, res) => {
    const contatos = await Contato.find();
    res.json(contatos);
});

// Criar novo contato
router.post('/', async (req, res) => {
    const { nome, email, telefone } = req.body;
    if (!nome) return res.status(400).json({ message: 'O nome é obrigatório.' });

    const novoContato = new Contato({ nome, email, telefone });
    await novoContato.save();
    res.status(201).json(novoContato);
});

// Detalhes de um contato
router.get('/:id', async (req, res) => {
    const contato = await Contato.findById(req.params.id);
    if (!contato) return res.status(404).json({ message: 'Contato não encontrado.' });
    res.json(contato);
});

// Editar um contato
router.put('/:id', async (req, res) => {
    const { nome, email, telefone } = req.body;
    const contatoAtualizado = await Contato.findByIdAndUpdate(req.params.id, { nome, email, telefone }, { new: true });
    res.json(contatoAtualizado);
});

// Deletar um contato
router.delete('/:id', async (req, res) => {
    await Contato.findByIdAndDelete(req.params.id);
    res.json({ message: 'Contato excluído com sucesso!' });
});

module.exports = router;
