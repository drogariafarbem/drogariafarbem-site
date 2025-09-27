import { useEffect, useState } from "react";

export default function App() {
  const [produtos, setProdutos] = useState({});

  useEffect(() => {
    fetch("/produtos.json")
      .then((res) => res.json())
      .then((data) => setProdutos(data))
      .catch((err) => console.error("Erro ao carregar produtos:", err));
  }, []);

  return (
    <div className="min-h-screen bg-white text-red-600">
      {/* Header com logo */}
      <header className="flex items-center justify-center p-6 bg-red-600">
        <img src="/images/logo.png" alt="Logo Drogaria Farbém" className="h-16 mr-3" />
        <h1 className="text-2xl font-bold text-white">Drogaria Farbém</h1>
      </header>

      {/* Lista de produtos */}
      <main className="p-6">
        {Object.keys(produtos).map((categoria) => (
          <section key={categoria} className="mb-8">
            <h2 className="text-xl font-semibold mb-3 border-b border-red-600">
              {categoria}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {produtos[categoria].map((item) => (
                <div
                  key={item.id}
                  className="border rounded-xl p-4 shadow bg-white"
                >
                  <h3 className="font-medium text-lg">{item.name}</h3>
                  <p>{item.price}</p>
                  {item.promo && (
                    <span className="text-sm text-white bg-red-600 px-2 py-1 rounded">
                      Promoção
                    </span>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

