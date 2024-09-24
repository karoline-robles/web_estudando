// src/index.js

import React from 'react';  // Importa a biblioteca React, que permite criar componentes
import ReactDOM from 'react-dom';  // Importa ReactDOM, que é responsável por renderizar componentes React no DOM
import './index.css';  // Importa o arquivo CSS para estilizar a aplicação
import App from './App';  // Importa o componente App, que é o componente principal da aplicação

// Renderiza o componente App no DOM
ReactDOM.render(
  <React.StrictMode>  {/* Habilita o modo estrito para detectar problemas potenciais na aplicação */}
    <App />  {/* Renderiza o componente App */}
  </React.StrictMode>,
  document.getElementById('root') /* Seleciona o elemento com ID 'root' no HTML para renderizar o componente */
);
