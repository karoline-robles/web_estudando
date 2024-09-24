import React, { useState } from 'react';  // Importa React e o hook useState para gerenciar estado
import axios from 'axios';  // Importa axios para fazer requisições HTTP
import { useNavigate } from 'react-router-dom';  // Importa useNavigate para redirecionar após a criação do contato

const ContatoForm = () => {
  // Hooks para gerenciar o estado dos campos do formulário
  const [nome, setNome] = useState('');  // Estado para armazenar o nome
  const [email, setEmail] = useState('');  // Estado para armazenar o email
  const [telefone, setTelefone] = useState('');  // Estado para armazenar o telefone
  const navigate = useNavigate();  // Hook para redirecionar após o envio do formulário

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();  // Impede o comportamento padrão do formulário (recarregar a página)
    
    // Cria um novo contato com os dados do estado
    const novoContato = { nome, email, telefone };

    // Faz uma requisição POST para a API para criar um novo contato
    axios.post('http://localhost:5000/contatos', novoContato)
      .then(() => navigate('/contatos'))  // Redireciona para a lista de contatos após sucesso
      .catch(error => console.log(error));  // Trata erros na requisição
  };

  return (
    <form onSubmit={handleSubmit}>  {/* Define a função a ser chamada ao enviar o formulário */}
      <div>
        <label>Nome:</label>  {/* Rótulo para o campo nome */}
        <input 
          type="text" 
          value={nome}  // O valor do campo é controlado pelo estado
          onChange={e => setNome(e.target.value)}  // Atualiza o estado ao mudar o valor
          required  // O campo é obrigatório
        />
      </div>
      <div>
        <label>Email:</label>  {/* Rótulo para o campo email */}
        <input 
          type="email" 
          value={email}  // O valor do campo é controlado pelo estado
          onChange={e => setEmail(e.target.value)}  // Atualiza o estado ao mudar o valor
        />
      </div>
      <div>
        <label>Telefone:</label>  {/* Rótulo para o campo telefone */}
        <input 
          type="tel" 
          value={telefone}  // O valor do campo é controlado pelo estado
          onChange={e => setTelefone(e.target.value)}  // Atualiza o estado ao mudar o valor
        />
      </div>
      <button type="submit">Criar Contato</button>  {/* Botão para enviar o formulário */}
    </form>
  );
};

export default ContatoForm;  // Exporta o componente para uso em outros arquivos
