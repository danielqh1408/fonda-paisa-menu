import React from 'react';
import { Plato } from './Plato';

export function Categoria({ titulo, items }) {
  return (
    <section className="mb-8 bg-white p-5 rounded-lg shadow-md border-t-4 border-red-600 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-16 h-16 bg-stone-100 rounded-bl-full -z-10 opacity-50"></div>
      
      <h2 className="text-xl font-black text-stone-800 border-b border-stone-200 pb-2 mb-4 uppercase tracking-wider font-serif">
        {titulo}
      </h2>
      <div className="flex flex-col space-y-2">
        {items.map((item, index) => (
          <Plato key={index} {...item} />
        ))}
      </div>
    </section>
  );
}