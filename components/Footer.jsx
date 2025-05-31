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
    <footer id="row-1" className="bg-green-800">
      {/* Nosotros */}
      <div className="footer-data">
        <h3> Nosotros </h3>
        <div className="footer-data_item">
          <p>
            3DSeller es una empresa con alto compromiso con los clientes y con
            la capacidad tecnica necesaria para poder hacer sus necesidades
            realidad sin importar la complejidad de su diseño
          </p>
        </div>
      </div>

      {/* Contacto */}
      <div className="footer-data">
        <h3> Contacto </h3>
        <div className="footer-data_item">
          {/* <Image src={emailImg} alt="Email" /> */}
          <Link href={"mailto: threedseller@gmail.com"} legacyBehavior> 
          <a >threedseller@gmail.com</a>
          </Link>
        </div>
        <div className="footer-data_item">
          {/* <Image src={movileImg} alt="Movil" /> */}
          <a >+543516132710</a>
        </div>
        <div className="footer-data_item">
          {/* <Image src={locationImg} alt="Ubicacion" /> */}
          <p>
            Argentina - Cordoba Capital 
            <br />
            Calle Juan B. Justo 4852
          </p>
        </div>
      </div>

      {/* Redes Sociales */}
      <div id='Contacto' className="footer-data">
        <h3> Redes sociales </h3>
        <div id='facebook' className="">
        <a  href='#facebook' className="flex items-center space-x-2">
         
            <AiFillFacebook />
           <span> Facebook</span>
         
          </a>
        </div>
        <div className="">
        <a  href='#facebook' className="flex items-center space-x-2">
         
            <AiFillInstagram />
           <span> Instagram</span>
         
          </a>
        </div>
        <div className="">
        <a  href='#facebook' className="flex items-center space-x-2">
         
            <AiFillLinkedin />
            <span>Linkedin</span>
         
          </a>
        </div>
        <div className="">
        <a  href='#facebook' className="flex items-center space-x-2">
         
            <AiFillTwitterCircle />
           <span> Twitter</span>
         
          </a>
        </div>
      </div>

      {/* Copyright */}
      <span className="copyright">
        
        © Copyright - ArquicomAJ 2025 | All Right Reserverd
      </span>
    </footer>
  );
}