import React, { useEffect, useState } from "react";

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
                className={`fixed top-0 left-0 w-full bg-green-800 text-white text-center py-2 transition-transform duration-300 ${showTopNavbar ? "translate-y-0" : "-translate-y-full"
                    }`}
                style={{ zIndex: 1000 }}
            >
                <p>Horario: Lun - Vie 9:00 - 18:00 | Calle Juan B. Justo 4874 - Córdoba Capital</p>
            </div>

        </div>
    )
}

export default NavHours