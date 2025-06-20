import React, { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";

function NavHours() {
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


  return (
    <div>
    
      {/* Navbar superior con horarios y dirección */}
     
      <div
        className={`fixed top-0 left-0 w-full bg-green-800 text-white py-2 px-4 transition-transform duration-300 ${
          showTopNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ zIndex: 1000 }}
      >
        <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
          <span>Horario: Lun - Vie 9:00 - 18:00</span>
          <span>|</span>
          <span>Calle Juan B. Justo 4874 - Córdoba Capital</span>
          <span>|</span>
          <a
            href="https://www.facebook.com/shivatruck.parts.1/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-gray-200"
          >
            <AiFillFacebook /> 
          </a>
          <a
            href="https://www.instagram.com/shivacamiones/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-gray-200"
          >
            <AiFillInstagram /> 
          </a>
        </div>
      </div>
    </div>
  )
}

export default NavHours