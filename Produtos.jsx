import { useEffect, useState } from "react";

export default function Produtos() {
  const [produtos, setProdutos] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/produtos.json")
      .then((res) => res.json())
      .then((data) => {
        setProdutos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar produtos:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center p-6">Carregando produtos...</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-red-600 text-center mb-6">
        Nossos Produtos
      </h2>

      {Object.keys(produtos).map((categoria) => (
        <div key={categoria} className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-blue-600">
            {categoria}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {produtos[categoria].map((item) => (
              <div
                key={item.id}
                className="border rounded-xl p-4 shadow hover:shadow-lg transition bg-white"
              >
                <h4 className="font-medium text-lg mb-2">{item.name}</h4>
                <p className="text-gray-700 mb-2">{item.price}</p>
                {item.promo && (
                  <span className="text-sm text-white bg-pink-500 px-2 py-1 rounded">
                    Promoção
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
