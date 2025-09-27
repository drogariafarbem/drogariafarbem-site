import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("/produtos.json") // busca o arquivo na raiz do site
      .then((res) => res.json())
      .then((data) => setProdutos(data))
      .catch((err) => console.error("Erro ao carregar produtos:", err));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Ofertas Drogaria Farbém</h1>
      {produtos.length === 0 ? (
        <p>Carregando ofertas...</p>
      ) : (
        <ul>
          {produtos.map((item) => (
            <li key={item.id}>
              <strong>{item.name}</strong> - {item.price}
              {item.promo && <span style={{ color: "red" }}> 🔥 Promoção</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

