import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';  // Importar o Link do react-router-dom

const ContatosList = () => {
  const [contatos, setContatos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/contatos')
      .then(response => setContatos(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Lista de Contatos</h2>
      <ul>
        {contatos.map(contato => (
          <li key={contato._id}>
            {contato.nome} - {contato.email} - {contato.telefone}
          </li>
        ))}
      </ul>

      {/* Botão para adicionar novo contato */}
      <Link to="/contatos/novo">
        <button>Adicionar Novo Contato</button>
      </Link>
    </div>
  );
};

export default ContatosList;
