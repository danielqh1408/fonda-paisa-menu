import React from 'react';

export function Plato({ nombre, descripcion, precio }) {
  // Formateo de precio a pesos colombianos sin decimales
  const precioFormateado = new Intl.NumberFormat('es-CO', { 
    style: 'currency', 
    currency: 'COP', 
    maximumFractionDigits: 0 
  }).format(precio);

  return (
    <div className="flex justify-between items-start py-3 border-b border-gray-200 last:border-0">
      <div className="pr-4">
        <h3 className="text-sm font-bold text-black-800">{nombre}</h3>
        <p className="text-xs text-stone-100 mt-1 leading-relaxed">{descripcion}</p>
      </div>
      <div className="font-semibold text-black-600 whitespace-nowrap text-sm mt-1">
        {precioFormateado}
      </div>
    </div>
  );
}