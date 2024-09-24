import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Substitua 'useHistory' por 'useNavigate'

const ContatoForm = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const navigate = useNavigate();  // Substitua 'useHistory' por 'useNavigate'

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoContato = { nome, email, telefone };

    axios.post('http://localhost:5000/contatos', novoContato)
      .then(() => navigate('/contatos'))  // Substitua 'history.push' por 'navigate'
      .catch(error => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input type="text" value={nome} onChange={e => setNome(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Telefone:</label>
        <input type="tel" value={telefone} onChange={e => setTelefone(e.target.value)} />
      </div>
      <button type="submit">Criar Contato</button>
    </form>
  );
};

export default ContatoForm;
