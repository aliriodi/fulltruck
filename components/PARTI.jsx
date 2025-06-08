const BannerCamion = () => {
    return (
      <div id='Inicio' className="bg-slate-100 flex flex-col-reverse md:flex-row items-center justify-between px-4 py-8 md:py-12 mt-20 rounded-lg shadow-lg max-w-7xl mx-auto">
        {/* Texto del mensaje */}
        <div className="md:pl-6  lg:pl-6 w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0">
          <h2 className="text-2xl md:text-4xl font-bold text-green-950 leading-tight">
            No hay repuesto que reemplace la confianza.
          </h2>
          <p className="mt-2 text-lg font-semibold text-gray-700">
            La confianza es nuestro mejor repuesto.
          </p>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            En <strong>Shiva Trucks Parts</strong>, sabemos que tu transporte merece lo mejor. Con <strong>15 años de experiencia</strong>, ofrecemos repuestos y accesorios <strong>originales</strong> para Mercedes, Volkswagen y más.
          </p>
        </div>
  
        {/* Imagen del camión */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://res.cloudinary.com/dvy9qircy/image/upload/v1749222794/forex/forex_academy_professional_camionesmercedes.jpg"
            alt="Camión de repuestos"
            className="w-100 md:w-120 h-auto object-contain"
          />
        </div>
      </div>
    );
  };
  
  export default BannerCamion;
  