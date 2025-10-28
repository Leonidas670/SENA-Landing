import React, { useState } from "react";

function Contacto() {
  const [form, setForm] = useState({
    nombres: "",
    apellidos: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mensaje enviado por ${form.nombres} ${form.apellidos}`);
    setForm({ nombres: "", apellidos: "", mensaje: "" });
  };

  return (
    <section className="mt-12 border-t border-gray-300 pt-8">
      <h3 className="text-center text-xl font-semibold uppercase text-gray-800 mb-8">
        Contacto
      </h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 max-w-md mx-auto"
      >
        <input
          type="text"
          name="nombres"
          placeholder="Nombres"
          value={form.nombres}
          onChange={handleChange}
          required
          className="
            border border-gray-300 rounded-lg
            px-5 py-3
            text-gray-900 text-base
            placeholder-gray-400
            shadow-sm
            focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500
            transition
            duration-300
            ease-in-out
          "
        />
        <input
          type="text"
          name="apellidos"
          placeholder="Apellidos"
          value={form.apellidos}
          onChange={handleChange}
          required
          className="
            border border-gray-300 rounded-lg
            px-5 py-3
            text-gray-900 text-base
            placeholder-gray-400
            shadow-sm
            focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500
            transition
            duration-300
            ease-in-out
          "
        />
        <textarea
          name="mensaje"
          placeholder="Mensaje"
          value={form.mensaje}
          onChange={handleChange}
          required
          rows={5}
          className="
            border border-gray-300 rounded-lg
            px-5 py-3
            text-gray-900 text-base
            placeholder-gray-400
            shadow-sm
            focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500
            transition
            duration-300
            ease-in-out
            resize-none
          "
        />
        <button
          type="submit"
          className="
            bg-blue-600
            text-white font-semibold
            py-3 rounded-lg
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            active:bg-blue-800
            transition
            duration-300
            cursor-pointer
          "
        >
          Enviar
        </button>
      </form>
    </section>
  );
}

export default Contacto;
