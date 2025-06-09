import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Asegurate de tener instalado react-icons

const WhatsAppContacts = ({ numbers = [] }) => {
  return (
    <div className="flex items-center bg-green-950 text-slate-300 p-6 rounded-2xl w-full max-w-md mx-auto shadow-lg">
      {/* <h2 className="text-xl font-semibold mb-4 text-center">Contactos por WhatsApp</h2> */}
      <ul className="pl-24 space-y-4">
        {numbers.map((num, index) => (
          <li key={index} className="flex items-center space-x-4 font-bold">
            <FaWhatsapp className="text-white text-2xl" />
            <span className="text-lg">{num}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhatsAppContacts;
