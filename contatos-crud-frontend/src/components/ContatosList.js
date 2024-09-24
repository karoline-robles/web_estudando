import React, { useState, useEffect } from 'react';  // Importa React e hooks necessários
import axios from 'axios';  // Importa axios para fazer requisições HTTP
import { Link, useNavigate } from 'react-router-dom';  // Importa Link e useNavigate para navegação

const ContatosList = () => {
  // Hook para gerenciar o estado dos contatos
  const [contatos, setContatos] = useState([]);
  const navigate = useNavigate();  // Para redirecionar após editar ou excluir

  // Carregar a lista de contatos da API
  useEffect(() => {
    axios.get('http://localhost:5000/contatos')  // Faz uma requisição GET para obter os contatos
      .then(response => setContatos(response.data))  // Atualiza o estado com os dados recebidos
      .catch(error => console.log(error));  // Trata erros na requisição
  }, []);  // O array vazio garante que a requisição seja feita apenas uma vez após a montagem do componente

  // Função para deletar um contato
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/contatos/${id}`)  // Faz uma requisição DELETE para remover o contato
      .then(() => {
        // Atualiza a lista de contatos após a exclusão
        setContatos(contatos.filter(contato => contato._id !== id));  // Remove o contato da lista
      })
      .catch(error => console.log(error));  // Trata erros na requisição
  };

  return (
    <div>
      <h2>Lista de Contatos</h2>  {/* Título da seção */}
      <table>  {/* Tabela para exibir os contatos */}
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Ações</th>  {/* Coluna para ações (editar/excluir) */}
          </tr>
        </thead>
        <tbody>
          {contatos.map(contato => (  // Itera sobre os contatos e cria uma linha para cada um
            <tr key={contato._id}>  {/* A chave deve ser única para cada linha */}
              <td>{contato.nome}</td>  {/* Exibe o nome do contato */}
              <td>{contato.email}</td>  {/* Exibe o email do contato */}
              <td>{contato.telefone}</td>  {/* Exibe o telefone do contato */}
              <td>
                {/* Botão para editar contato */}
                <Link to={`/contatos/${contato._id}`}>  {/* Link para navegar até a página de detalhes */}
                  <button>Ver Detalhes / Editar</button>
                </Link>
                {/* Botão para excluir contato */}
                <button onClick={() => handleDelete(contato._id)}>Excluir</button>  {/* Chama handleDelete ao clicar */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Botão para adicionar novo contato */}
      <Link to="/contatos/novo">  {/* Link para navegar até a página de novo contato */}
        <button>Adicionar Novo Contato</button>
      </Link>
    </div>
  );
};

export default ContatosList;  // Exporta o componente para uso em outros arquivos
