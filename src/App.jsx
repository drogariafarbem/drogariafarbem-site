import React from "react";
import "./index.css";

function App() {
  return (
    <div>
      {/* Cabeçalho */}
      <header>
        <h1>💊 Drogaria Farbem</h1>
        <p>Saúde com carinho, todos os dias</p>
      </header>

      {/* Produtos */}
      <main className="produtos">
        <div className="produto-card">
          <h3>Dipirona</h3>
          <p>R$ 9,90</p>
        </div>
        <div className="produto-card">
          <h3>Paracetamol</h3>
          <p>R$ 7,50</p>
        </div>
        <div className="produto-card">
          <h3>Ibuprofeno</h3>
          <p>R$ 12,00</p>
        </div>
      </main>

      {/* Rodapé */}
      <footer>
        <p>© 2025 Drogaria Farbem - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default App;

