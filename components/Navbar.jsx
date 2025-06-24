import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // o usa íconos SVG normales si no tenés lucide-react
import { FaPhoneAlt } from "react-icons/fa";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  /**Para desplegue del horario y desaparezca cuando 
   * se mueva a cierto punto de la pagina */

  const [showTopNavbar, setShowTopNavbar] = useState(true);

  useEffect(() => {

    function handleScroll() {
      const productsElement = document.getElementById('Servicios');
      const productsTop = productsElement?.getBoundingClientRect().top ?? Infinity;

      // Si el top del elemento products está arriba de la ventana (<=0), oculto navbar
      // Si estamos al principio de la página (scrollY = 0), muestro navbar
      if (window.scrollY === 0) {
        setShowTopNavbar(true);
      } else if (productsTop <= 0) {
        setShowTopNavbar(false);
      } else {
        setShowTopNavbar(true);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  /*   Fin         */

  return (


    <nav
      className={`bg-gradient-to-l from-gray-300 to-green-300 text-green-950 fixed  w-full z-50 p-2 shadow-md  transition-all duration-300 ${showTopNavbar ? "top-8 pt-0 md:pt-14" : "top-0 pt-0"} `}
    >
      <div className="max-w-7xl  mx-auto flex justify-between items-center">
        {/* <div className="text-2xl font-bold">Mi Sitio</div> */}
        <div></div>
        {/* <img src="https://res.cloudinary.com/dvy9qircy/image/upload/v1748603385/forex/forex_academy_professional_logo2-shiva.png" alt="Logo" className="h-30 w-auto" /> */}
        <img
          src='https://res.cloudinary.com/dvy9qircy/image/upload/v1750457832/forex/forex_academy_professional_NavBarv5.png'
          //src="https://res.cloudinary.com/dvy9qircy/image/upload/v1750198732/forex/forex_academy_professional_bgNavbarv2.png"
          alt="Logo principal"
          //className="h-20 pt-2 md:h-40 md:pt-0  w-auto object-contain mx-4"
          className="h-16 pt-5 md:h-28 md:pt-3 w-auto object-contain mx-4"
        />
        <div className="flex items-center space-x-3 text-green-900 font-semibold">
          <FaPhoneAlt className="text-2xl" /> 
           <span className="text-xl ">351 897-3608</span>
        </div>

        {/* Botón hamburguesa */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {console.log('linea 56 NAVBAR')}

        {console.log('https://centro-diesel.com/')}
        {console.log('https://www.merkansas.com.ar/')}
        {console.log('https://www.dmcbombas.com.ar/')}

        {/* Enlaces para pantallas grandes */}
        <ul className="hidden font-extrabold md:flex  justify-center space-x-6 pr-20">
          {/* <li><a href="https://centro-diesel.com/" className="hover:text-green-700"    target="_blank"
    rel="noopener noreferrer">Centro Diesel</a></li> */}
          <li><a href="/#Inicio" className="hover:text-green-700">Inicio</a></li>
          <li><a href="/products" className="hover:text-green-700">Catalogo</a></li>
          <li><a href="/#Servicios" className="hover:text-green-700">Servicios</a></li>
          <li><a href="/#Contacto" className="hover:text-green-700">Contacto</a></li>
        </ul>
      </div>

      {/* Menú desplegable en mobile */}
      {open && (

        <div className="absolute top-16 right-2 z-50 bg-slate-300 border border-slate-400 shadow-xl rounded-md p-4 w-fit">


          <ul className="md:hidden space-y-2">
            <li>
              <a href="/#Inicio" onClick={() => setOpen(!open)} className="block hover:text-green-700">
                Inicio
              </a>
            </li>
            <li>
              <a href="/products" onClick={() => setOpen(!open)} className="block hover:text-green-700">
                Catalogo
              </a>
            </li>
            <li>
              <a href="/#Servicios" onClick={() => setOpen(!open)} className="block hover:text-green-700">
                Servicios
              </a>
            </li>
            <li>
              <a href="/#Contacto" onClick={() => setOpen(!open)} className="block hover:text-green-700">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>

  );
};

export default Navbar;
