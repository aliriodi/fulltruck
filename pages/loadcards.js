import { useEffect } from "react";
import data from "@/components/products/card.json"; // ruta correcta

export default function LoadCards() {
  useEffect(() => {
    const loadProducts = async () => {
      for (const { id, ...product } of data.cards) {
        try {
          const res = await fetch("/api/products/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product),
          });

          const result = await res.json();
          console.log("✔️ Producto enviado:", result);
        } catch (err) {
          console.error("❌ Error al enviar producto:", err);
        }
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold">Cargando productos...</h1>
      <p>Revisá la consola para ver el progreso.</p>
    </div>
  );
}
