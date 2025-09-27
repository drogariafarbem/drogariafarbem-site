import React from "react";
import "./index.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1 className="logo">💊 Drogaria Farbém</h1>
        <p className="slogan">Saúde com carinho ❤️</p>
      </header>

      <main className="content">
        <section className="promo">
          <h2>Ofertas Especiais</h2>
          <ul>
            <li>Vitamina C efervescente – <span>R$ 14,90</span></li>
            <li>Termômetro Digital – <span>R$ 22,99</span></li>
            <li>Dipirona 500mg c/ 10 – <span>R$ 9,90</span></li>
          </ul>
        </section>

        <section className="info">
          <h2>Entre em contato 📞</h2>
          <p>📍 Endereço: Rua Exemplo, 123 – Centro</p>
          <p>📱 WhatsApp: (11) 98765-4321</p>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 Drogaria Farbém. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
