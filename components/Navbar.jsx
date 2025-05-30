import { useState } from "react";
import { Menu, X } from "lucide-react"; // o usa íconos SVG normales si no tenés lucide-react

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-slate-300 text-green-950 fixed top-0 w-full z-50 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Mi Sitio</div>
        <img src="./public/ico.jpeg" alt="Logo" className="h-10 w-auto" />

        {/* Botón hamburguesa */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Enlaces para pantallas grandes */}
        <ul className="hidden md:flex  justify-center space-x-6">
          <li><a href="#" className="hover:text-green-700">Inicio</a></li>
          <li><a href="#" className="hover:text-green-700">Servicios</a></li>
          <li><a href="#" className="hover:text-green-700">Contacto</a></li>
        </ul>
      </div>

      {/* Menú desplegable en mobile */}
      {open && (
        <div className="absolute top-full right-4 z-50 bg-slate-300 shadow-md rounded-md p-4 w-fit">
        <ul className="md:hidden space-y-2">
          <li>
            <a href="#" onClick={() => setOpen(!open)} className="block hover:text-green-700">
              Inicio
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setOpen(!open)} className="block hover:text-green-700">
              Servicios
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setOpen(!open)} className="block hover:text-green-700">
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
