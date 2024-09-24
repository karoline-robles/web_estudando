import React, { useState, useEffect } from 'react';  // Importa React e os hooks useState e useEffect
import axios from 'axios';  // Importa axios para fazer requisições HTTP
import { useParams, useNavigate } from 'react-router-dom';  // Importa hooks para acessar parâmetros da URL e navegação

const ContatoDetalhes = () => {
  const { id } = useParams();  // Obtém o ID do contato da URL
  const [contato, setContato] = useState(null);  // Estado para armazenar os detalhes do contato
  const [isEditing, setIsEditing] = useState(false);  // Estado para gerenciar o modo de edição
  const [nome, setNome] = useState('');  // Estado para o nome
  const [email, setEmail] = useState('');  // Estado para o email
  const [telefone, setTelefone] = useState('');  // Estado para o telefone
  const navigate = useNavigate();  // Hook para redirecionar após editar ou deletar

  // Carregar os dados do contato pelo ID
  useEffect(() => {
    const fetchContato = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/contatos/${id}`);
        if (response.data) {
          setContato(response.data);  // Atualiza o estado com os dados do contato
          setNome(response.data.nome);  // Preenche o campo nome
          setEmail(response.data.email);  // Preenche o campo email
          setTelefone(response.data.telefone);  // Preenche o campo telefone
        } else {
          console.log('Nenhum contato encontrado.');
        }
      } catch (error) {
        console.error('Erro ao carregar os dados do contato:', error);
      }
    };

    fetchContato();  // Chama a função para buscar os dados do contato
  }, [id]);  // O efeito roda quando o ID muda

  // Função para deletar o contato
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/contatos/${id}`);  // Faz a requisição DELETE
      alert('Contato deletado com sucesso!');  // Mensagem de sucesso
      navigate('/contatos');  // Redireciona para a lista de contatos
    } catch (error) {
      console.error('Erro ao deletar contato:', error);
    }
  };

  // Função para salvar as alterações do contato
  const handleSave = async () => {
    const contatoAtualizado = { nome, email, telefone };  // Cria um objeto com os dados atualizados
    try {
      await axios.put(`http://localhost:5000/contatos/${id}`, contatoAtualizado);  // Faz a requisição PUT
      alert('Contato atualizado com sucesso!');  // Mensagem de sucesso
      setIsEditing(false);  // Volta ao modo de visualização
    } catch (error) {
      console.error('Erro ao atualizar o contato:', error);
    }
  };

  // Se os dados do contato ainda não estiverem carregados
  if (!contato) {
    return <p>Carregando detalhes do contato...</p>;  // Exibe mensagem de carregando
  }

  return (
    <div>
      <h2>Detalhes do Contato</h2>
      
      {isEditing ? (  // Verifica se está no modo de edição
        <div>
          <div>
            <label>Nome:</label>
            <input 
              type="text" 
              value={nome}  // Valor controlado pelo estado
              onChange={(e) => setNome(e.target.value)}  // Atualiza o estado ao mudar
              required 
            />
          </div>
          <div>
            <label>Email:</label>
            <input 
              type="email" 
              value={email}  // Valor controlado pelo estado
              onChange={(e) => setEmail(e.target.value)}  // Atualiza o estado ao mudar
            />
          </div>
          <div>
            <label>Telefone:</label>
            <input 
              type="tel" 
              value={telefone}  // Valor controlado pelo estado
              onChange={(e) => setTelefone(e.target.value)}  // Atualiza o estado ao mudar
            />
          </div>
          {/* Botão para salvar alterações */}
          <button onClick={handleSave}>Salvar Alterações</button>
        </div>
      ) : (
        <div>
          <p><strong>Nome:</strong> {contato.nome}</p>  {/* Exibe o nome do contato */}
          <p><strong>Email:</strong> {contato.email}</p>  {/* Exibe o email do contato */}
          <p><strong>Telefone:</strong> {contato.telefone}</p>  {/* Exibe o telefone do contato */}
          {/* Botão para habilitar edição */}
          <button onClick={() => setIsEditing(true)}>Editar Contato</button>
        </div>
      )}

      {/* Botão para deletar o contato */}
      <button onClick={handleDelete}>Excluir Contato</button>
    </div>
  );
};

export default ContatoDetalhes;  // Exporta o componente para uso em outros arquivos
