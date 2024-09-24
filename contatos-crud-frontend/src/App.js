import React from 'react';  // Importa a biblioteca React
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Importa componentes do React Router para gerenciamento de rotas
import ContatosList from './components/ContatosList';  // Importa o componente que lista os contatos
import ContatoForm from './components/ContatoForm';  // Importa o componente para criar ou editar um contato
import ContatoDetalhes from './components/ContatoDetalhes';  // Importa o componente que exibe detalhes de um contato

// Função principal do aplicativo
function App() {
  return (
    <Router>  {/* Envolve toda a aplicação para permitir navegação entre páginas */}
      <div className="App">  {/* Contêiner principal da aplicação */}
        <h1>Gerenciador de Contatos</h1>  {/* Título da aplicação */}
        <Routes>  {/* Define as rotas da aplicação */}
          <Route path="/contatos" element={<ContatosList />} />  {/* Rota para a lista de contatos */}
          <Route path="/contatos/novo" element={<ContatoForm />} />  {/* Rota para o formulário de novo contato */}
          <Route path="/contatos/:id" element={<ContatoDetalhes />} />  {/* Rota para detalhes de um contato específico, usando um parâmetro 'id' */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;  // Exporta a função App para que possa ser usada em outros arquivos
