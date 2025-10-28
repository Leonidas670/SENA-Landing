import React from "react";
import Navbar from "./components/Navbar";
import Programas from "./components/Programas";
import Contacto from "./components/Contacto";

function App() {
  return (
    <div className="max-w-3xl mx-auto bg-white border border-gray-300 rounded-xl p-8 mt-12 shadow-xl">
      <Navbar />
      <div className="text-center mt-6">
        <h2 className="text-2xl font-extrabold uppercase tracking-wide text-gray-900">
          Servicio Nacional de Aprendizaje
        </h2>
        <h3 className="text-md text-gray-600 mt-1">CGMLTI - Bogotá D.C</h3>
      </div>
      <Programas />
      <Contacto />
    </div>
  );
}

export default App;
