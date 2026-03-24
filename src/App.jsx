import React from 'react';
import { Categoria } from './Categoria';
import { menuData } from './data';

function App() {
  return (
    <div className="max-w-md mx-auto min-h-screen text-stone-900 pb-24 font-sans relative bg-[url('/fondo-carton.avif')] bg-repeat shadow-2xl overflow-hidden">

      {/* Imágenes decorativas distribuidas por el contenedor para que aparezcan al hacer scroll */}
      <img src="/cafe.png" alt="" className="absolute top-[10%] left-0 w-32 opacity-20 pointer-events-none z-0" />
      <img src="/cafe.png" alt="" className="absolute top-[15%] right-0 w-40 opacity-20 pointer-events-none z-0 transform rotate-180" />
      <img src="/cafe.png" alt="" className="absolute top-[25%] right-0 w-32 opacity-20 pointer-events-none z-0 transform rotate-180" />
      <img src="/cafe.png" alt="" className="absolute top-[30%] left-0 w-40 opacity-20 pointer-events-none z-0" />
      <img src="/cafe.png" alt="" className="absolute top-[35%] right-0 w-36 opacity-20 pointer-events-none z-0 transform rotate-180" />
      <img src="/cafe.png" alt="" className="absolute top-[50%] left-0 w-40 opacity-20 pointer-events-none z-0" />
      <img src="/cafe.png" alt="" className="absolute top-[60%] left-0 w-40 opacity-20 pointer-events-none z-0" />
      <img src="/cafe.png" alt="" className="absolute top-[65%] right-0 w-36 opacity-20 pointer-events-none z-0 transform rotate-180" />
      <img src="/cafe.png" alt="" className="absolute top-[75%] right-0 w-36 opacity-20 pointer-events-none z-0 transform rotate-180" />
      <img src="/cafe.png" alt="" className="absolute top-[80%] left-0 w-40 opacity-20 pointer-events-none z-0" />
      <img src="/cafe.png" alt="" className="absolute top-[90%] left-0 w-40 opacity-20 pointer-events-none z-0" />
      <img src="/cafe.png" alt="" className="absolute top-[95%] right-0 w-36 opacity-20 pointer-events-none z-0 transform rotate-180" />
      <img src="/jugo.png" alt="" className="absolute top-[83%] left-60 w-80 opacity-30 pointer-events-none z-0" />
      <img src="/radio.png" alt="" className="absolute top-[67%] right-65 w-80 opacity-30 pointer-events-none z-0 transform rotate-300" />
      <img src="/radio.png" alt="" className="absolute top-[41%] left-60 w-80 opacity-30 pointer-events-none z-0" />
      <img src="/sombrero.png" alt="" className="absolute top-[54%] left-60 w-80 opacity-30 pointer-events-none z-0" />
      <img src="/sombrero.png" alt="" className="absolute top-[3.1%] left-60 w-80 opacity-30 pointer-events-none z-0" />
      <img src="/saco.png" alt="" className="absolute top-[19%] right-60 w-80 opacity-30 pointer-events-none z-0" />


      {/* Cabecera Estilo Fonda con bordes rústicos */}
      <header className="relative bg-stone-900/95 text-white text-center py-8 px-4 rounded-b-3xl shadow-xl mb-6 border-b-4 border-white z-10">
        <h1 className="text-4xl font-black uppercase tracking-widest text-white mb-1 drop-shadow-md">
          Fonda <span className="text-white">Paisa</span>
        </h1>
        <p className="text-xs text-stone-300 uppercase tracking-[0.2em] font-bold border-t border-stone-700 pt-2 inline-block">
          Restaurante - Parrilla
        </p>
        <p className="text-sm font-serif italic text-stone-400 mt-2">
          "¡Lo mejor de la comida colombiana!"
        </p>
      </header>
      
      <main className="px-4 relative z-10">
        {menuData.map((categoria, index) => (
          <Categoria 
            key={index} 
            titulo={categoria.categoria} 
            descripcion={categoria.descripcion}
            items={categoria.items} 
          />
        ))}
      </main>

      <section className="mb-8 bg-transparent p-5 rounded-lg shadow-md border-t-4 border-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-stone-100 rounded-bl-full -z-10 opacity-50"></div>
            <h2 className="text-xl text-center font-black text-stone-800 border-b border-stone-200 pb-2 mb-4 uppercase tracking-wider font-serif">
              DIRECCION
            </h2>            
            <div className="flex flex-col space-y-2">
              <p className="text-md text-center font-bold text-stone-800">
                Cra 5 #10-65, Galeria
              </p>
              <p className="text-md text-center font-bold text-stone-800">
                Anserma, Caldas
              </p>
            </div>
      </section>

      <h2 className="text-xl text-center font-black text-stone-300 uppercase tracking-wider font-serif">
        ¡Te esperamos!
        </h2> 

      {/* Botón Flotante de WhatsApp */}
      <a 
        href="https://wa.me/573203634029" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white w-14 h-14 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all z-50 flex items-center justify-center border-2 border-white"
        aria-label="Pedir por WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>
    </div>
  );
}

export default App;