import React from 'react';

const brands = [
  { text: "Cummins", image: "https://res.cloudinary.com/dvy9qircy/image/upload/v1749593471/forex/forex_academy_professional_cummminsv3.png" },
  { text: "Ford", image: "https://res.cloudinary.com/dvy9qircy/image/upload/v1749593603/forex/forex_academy_professional_fordv3.png" },
  { text: "Iveco", image: "https://res.cloudinary.com/dvy9qircy/image/upload/v1749593686/forex/forex_academy_professional_ivecov3.png" },
  { text: "Mercedes Benz", image: "https://res.cloudinary.com/dvy9qircy/image/upload/v1749593753/forex/forex_academy_professional_mercedesV3.png" },
  { text: "Renault", image: "https://res.cloudinary.com/dvy9qircy/image/upload/v1749592146/forex/forex_academy_professional_Renault.png" },
  { text: "Scania", image: "https://res.cloudinary.com/dvy9qircy/image/upload/v1749592449/forex/forex_academy_professional_scaniav2.png" },
  { text: "Volkswagen", image: "https://res.cloudinary.com/dvy9qircy/image/upload/v1749593121/forex/forex_academy_professional_volkswagen.png" },
  { text: "Volvo", image: "https://res.cloudinary.com/dvy9qircy/image/upload/v1749593249/forex/forex_academy_professional_volvo.png" }
];

const BrandsNavbar = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-2 md:gap-6">
    {brands.map((marca, index) => (
      <img key={index} src={marca.image} alt={marca.text} className="h-10 w-auto object-contain" />
    ))}
  
    {/* Logo central */}
    {/* <img src="https://res.cloudinary.com/dvy9qircy/image/upload/v1748603385/forex/forex_academy_professional_logo2-shiva.png" alt="Logo principal" className="h-20 w-auto object-contain mx-4" /> */}
    <img src="https://res.cloudinary.com/dvy9qircy/image/upload/v1750198732/forex/forex_academy_professional_bgNavbarv2.png" alt="Logo principal" className="h-20 w-auto object-contain mx-4" />
  </div>
  );
};

export default BrandsNavbar;
