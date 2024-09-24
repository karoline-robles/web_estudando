import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContatosList from './components/ContatosList';
import ContatoForm from './components/ContatoForm';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Gerenciador de Contatos</h1>
        <Routes>
          <Route exact path="/contatos" element={<ContatosList />} />
          <Route exact path="/contatos/novo" element={<ContatoForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
