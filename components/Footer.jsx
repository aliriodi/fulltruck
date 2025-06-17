import React from "react";
import Image from "next/image";
//import emailImg from "../../public/email-icon.png";
//import locationImg from "../../public/location-icon.png";
//import movileImg from "../../public/movile-icon.png";
import Link from "next/link";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";


export default function Footer() {
const emailImg  = 'null';
const locationImg = 'null';
const movileImg = 'null';

  return (
    <footer id="Servicios" className="text-white bg-green-800">
      {/* Nosotros */}
      <div className="footer-data">
        <h3> Nosotros </h3>
        <div className="footer-data_item">
          <p>
          En <b>Shiva Truck Parts</b> ofrecemos repuestos de 
          calidad para camiones de todas las marcas. Stock confiable, envío 
          rápido y asesoramiento experto. ¡Tu camión no se detiene, nosotros tampoco!
          </p>
        </div>
      </div>

      {/* Contacto */}
      <div className="footer-data">
        <h3> Contacto </h3>
        <div className="footer-data_item">
          {/* <Image src={emailImg} alt="Email" /> */}
          <Link href={"mailto: shivatruckparts@gmail.com"} legacyBehavior> 
          <a >shivatruckparts@gmail.com</a>
          </Link>
        </div>
        <div className="footer-data_item">
          {/* <Image src={movileImg} alt="Movil" /> */}
          <a >+5492966382695</a> 
        </div>
        <div className="footer-data_item">
          {/* <Image src={movileImg} alt="Movil" /> */}
          <a >+5493512791785</a>
        </div>
        
        <div className="footer-data_item">
          {/* <Image src={locationImg} alt="Ubicacion" /> */}
          <p>
            Argentina - Cordoba Capital 
            <br />
            Calle Juan B. Justo 4874
          </p>
        </div>
      </div>

      {/* Redes Sociales */}
      <div id='Contacto' className="footer-data">
        <h3> Redes sociales </h3>
        <div id='facebook' className="">
        <a  href='https://www.facebook.com/shivatruck.parts.1/' className="flex items-center space-x-2">
         
            <AiFillFacebook />
           <span> Facebook</span>
         
          </a>
        </div>
        <div className="">
        <a  href='https://www.instagram.com/shivacamiones/facebook
        ' className="flex items-center space-x-2">
         
            <AiFillInstagram />
           <span> Instagram</span>
         
          </a>
        </div>
        {/* <div className="">
        <a  href='#facebook' className="flex items-center space-x-2">
         
            <AiFillLinkedin />
            <span>Linkedin</span>
         
          </a>
        </div> */}
        {/* <div className="">
        <a  href='#facebook' className="flex items-center space-x-2">
         
            <AiFillTwitterCircle />
           <span> Twitter</span>
         
          </a>
        </div> */}
      </div>

      {/* Copyright */}
      <span className="copyright">
        
        © Copyright - ArquicomAJ 2025 | All Right Reserverd
      </span>
    </footer>
  );
}