const BannerCamion = () => {
    return (
      <div className="bg-slate-100 flex flex-col md:flex-row items-center justify-center  p-6 mt-20 rounded-lg shadow-lg">
        {/* Texto del mensaje */}
        <div className="md:w-1/2 mt-6 md:mt-0 md:pl-8 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-green-950">
            No hay repuesto que reemplace la confianza.
          </h2>
          <p className="mt-2 text-lg font-semibold text-gray-700">
            La confianza es nuestro mejor repuesto.
          </p>
          <p className="mt-4 text-gray-600">
            En <strong>Shiva Trucks Parts</strong>, sabemos que tu transporte merece lo mejor. Con <strong>15 años de experiencia</strong>, ofrecemos repuestos y accesorios <strong>originales </strong> para Mercedes, Volkswagen y más.
          </p>
        </div>

        {/* Imagen del camión */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/camion.png"
            alt="Camión de repuestos"
            className="w-64 h-auto object-contain"
          />
        </div>
  
       
      </div>
    );
  };
  
  export default BannerCamion;
  