// components/WhatsAppCard.jsx
import React from 'react';

export default function WhatsAppCard() {
  return (
    <div className="bg-green-950 min-h-screen flex items-center justify-center">
      <div className="text-white text-center p-8 rounded-lg shadow-xl max-w-xs w-full">
        {/* Logo de WhatsApp */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="Logo WhatsApp"
          className="w-16 h-16 mx-auto mb-4 invert"
        />

<img 
  src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"  
  alt="Logo WhatsApp Blanco" 
  className="w-16 h-16 mx-auto mb-4"
/>



        {/* Texto con números */}
        <h1 className="text-xl font-bold mb-2">Números de WhatsApp</h1>
        <p className="mb-1">+54 9 2966 382695</p>
        <p>+54 9 3512 791785</p>

        {/* Botón opcional */}
        <a
          href="https://wa.me/5492966382695" 
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-white text-green-950 px-4 py-2 rounded hover:bg-green-100 transition"
        >
          Chatear ahora
        </a>
      </div>
    </div>
  );
}