import React, { useState } from 'react';

export const MenuHamburguesa = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <div className="flex items-center w-40">
      <button
        className="text-5xl focus:outline-none" // Aumenta el tamaño del texto
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        &#8801; {/* Icono de hamburguesa */}
      </button>

      {menuAbierto && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-md"> {/* Aumenta el padding */}
            <p className="text-3xl mb-4">Menú</p> {/* Aumenta el tamaño del texto */}
            {/* Opciones de menú aquí */}
            <button
              className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600" // Aumenta el tamaño del botón
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
