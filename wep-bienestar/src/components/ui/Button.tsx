// Ubicación: src/components/ui/Button.tsx

import React from 'react';

// 1. Definimos una interfaz para las props del botón
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void; // Hacemos que onClick sea una prop opcional
}

// 2. Aceptamos 'onClick' como una prop en la función
export function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick} // 3. ¡AQUÍ ESTÁ LA MAGIA! Aplicamos la prop al elemento <button> real
      className="
        inline-block px-8 py-4
        font-sans font-bold text-white text-lg
        rounded-xl 
        transition-all duration-300
        focus:outline-none focus:ring-4
        transform hover:scale-105
        
        bg-[var(--color-accent)]
        hover:bg-[var(--color-accent-dark)]
        focus:ring-[var(--color-accent)]/30
        disabled:bg-gray-400 disabled:scale-100 disabled:cursor-not-allowed
      "
    >
      {children}
    </button>
  );
}