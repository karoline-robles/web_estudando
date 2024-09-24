import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';  // Substitua 'useHistory' por 'useNavigate'

const ContatoDetalhes = () => {
  const [contato, setContato] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();  // Substitua 'useHistory' por 'useNavigate'

  useEffect(() => {
    axios.get(`http://localhost:5000/contatos/${id}`)
      .then(response => setContato(response.data))
      .catch(error => console.log(error));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:5000/contatos/${id}`)
      .then(() => navigate('/contatos'))  // Substitua 'history.push' por 'navigate'
      .catch(error => console.log(error));
  };

  return contato ? (
    <div>
      <h2>{contato.nome}</h2>
      <p>Email: {contato.email}</p>
      <p>Telefone: {contato.telefone}</p>
      <button onClick={handleDelete}>Deletar Contato</button>
    </div>
  ) : <p>Carregando...</p>;
};

export default ContatoDetalhes;
