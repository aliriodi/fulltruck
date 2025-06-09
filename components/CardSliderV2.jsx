import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const cards = [
  {
    id: 1,
    title: "Calidad Garantizada:",
    image: "https://res.cloudinary.com/dvy9qircy/image/upload/v1748722749/forex/forex_academy_professional_100QAv2.jpg",
    image2:"https://res.cloudinary.com/dvy9qircy/image/upload/v1749212675/forex/forex_academy_professional_foto2.jpg",
    description: "Trabajamos con los mejores fabricantes para asegurarnos de que obtengas solo lo mejor.",
  },
  {
    id: 2,
    title: "Asesoría Especializada:",
    image: "https://res.cloudinary.com/dvy9qircy/image/upload/v1749506125/forex/forex_academy_professional_whatrsapp2-v3.png",
    image2:"https://res.cloudinary.com/dvy9qircy/image/upload/v1749212675/forex/forex_academy_professional_foto1.jpg",
    description: "Nuestro equipo de expertos está listo para ayudarte a encontrar la pieza perfecta para tus necesidades.",
  },
  {
    id: "Servicios",
    title: "Precios Competitivos:",
    image: "https://res.cloudinary.com/dvy9qircy/image/upload/v1748723280/forex/forex_academy_professional_precioscompetitivos.jpg",
    image2:"https://res.cloudinary.com/dvy9qircy/image/upload/v1749212675/forex/forex_academy_professional_foto3.jpg",
    description: "Ofrecemos los mejores precios del mercado.",
  },
];

const CardSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextCard = () => {
    setCurrent((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrent((prev) => (prev - 1 + cards.length) % cards.length);
  };

  useEffect(() => {
    const interval = setInterval(nextCard, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden h-[400px] flex items-center justify-center">
      {/* Fondo animado dinámico */}
      <div
        className="absolute inset-0 animate-backgroundMove bg-cover bg-repeat-x transition-all duration-700"
        style={{ backgroundImage: 
            
            // `url('${cards[current].image}')` 
            //`url('https://res.cloudinary.com/dvy9qircy/image/upload/v1748721630/forex/forex_academy_professional_camion2-shiva.jpg')`
            `url('https://res.cloudinary.com/dvy9qircy/image/upload/v1749212675/forex/forex_academy_professional_foto1.jpg')`
        }}
      />

      {/* Tarjeta */}
      <div className="relative z-10 w-[90%] max-w-5xl flex items-center bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden">
        <img
          src={cards[current].image}
          alt={cards[current].title}
          className="w-64 h-auto object-cover hidden md:block"
        />
        <div className="p-6 text-left">
          <h2 className="text-green-950 text-2xl font-bold mb-2">{cards[current].title}</h2>
          <p className="text-gray-700 text-base">{cards[current].description}</p>
        </div>
      </div>

      {/* Flechas */}
      <div className="hidden md:block sm:block">
      <button
        onClick={prevCard}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-green-800 text-white p-2 rounded-full shadow hover:bg-green-600 z-20 "
      >
        <ArrowLeft size={20} />
      </button>
      <button
        onClick={nextCard}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-green-800 text-white p-2 rounded-full shadow hover:bg-green-600 z-20"
      >
        <ArrowRight size={20} />
      </button>
      </div>
    </div>
  );
};

export default CardSlider;
