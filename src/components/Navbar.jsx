import React from "react";

function Navbar() {
  return (
    <nav className="bg-white shadow-md rounded-lg p-3">
      <ul className="flex justify-around text-sm font-semibold uppercase text-gray-700 select-none">
        {["Inicio", "Programas", "Contacto"].map((item) => (
          <li
            key={item}
            className="cursor-pointer hover:text-blue-600 transition-colors duration-300"
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
