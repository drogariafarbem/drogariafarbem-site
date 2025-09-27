import React from "react";
import "./index.css";
import logo from "./assets/logo.png"; // certifique-se que sua logo está em src/assets/logo.png

function App() {
  const produtos = ["Dipirona", "Paracetamol", "Ibuprofeno"];

  return (
    <div className="app">
      {/* Cabeçalho */}
      <header className="header">
        <img src={logo} alt="Logo Drogaria Farbém" className="logo" />
        <h1 className="titulo">Drogaria Farbém</h1>
      </header>

      {/* Lista de produtos */}
      <main className="conteudo">
        <h2 className="subtitulo">💊 Lista de Produtos</h2>
        <ul className="lista">
          {produtos.map((produto, index) => (
            <li key={index} className="item">
              {produto}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;

