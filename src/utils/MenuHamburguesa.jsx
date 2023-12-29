import React, { useState } from 'react'

export const MenuHamburguesa = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <div className="flex items-center">
      <button
        className="text-3xl focus:outline-none"
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        &#8801; {/* Icono de hamburguesa */}
      </button>

      {menuAbierto && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-4 rounded shadow-md">
            <p className="text-2xl mb-4">Menú</p>
            {/* Opciones de menú aquí */}
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={() => setMenuAbierto(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};