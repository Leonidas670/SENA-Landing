import React from "react";

function Programas() {
  const programas = [
    "ADSO",
    "Redes de Datos",
    "Animación 3D",
    "Logística",
    "Mercadeo",
    "Sistemas",
  ];

  return (
    <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {programas.map((p) => (
        <button
          key={p}
          className="border-2 border-gray-800 rounded-lg py-5 font-semibold text-gray-900 bg-gray-50 shadow-sm hover:shadow-lg hover:bg-blue-100 transition-all duration-300 ease-in-out"
          aria-label={`Programa ${p}`}
        >
          {p}
        </button>
      ))}
    </section>
  );
}

export default Programas;
