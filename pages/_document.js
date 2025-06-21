import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta charset="UTF-8" />
    <meta name="description" content="Repuestos de camiones y autobuses" />
    <meta name="keywords" content="Mercedes Benz, Camiones, mecanica, motores, Ford, Iveco, Cummins" />
    <meta name="author" content="Shiva Camiones" />
    <meta property="og:title" content="Repuestos de camiones" />
    <meta property="og:description" content="Repuestos de camiones Cummins, Ford, Iveco, Mercedes Benz, Renault, Scania, Volkswagen, Volvo" />
    <meta property="og:image" content="https://res.cloudinary.com/dvy9qircy/image/upload/v1750457832/forex/forex_academy_professional_NavBarv5.png" />
    <meta property="og:url" content="https://fulltruck-five.vercel.app/" />
   
    <title>Shiva Camiones</title>
      <body className="antialiased overflow-x-hidden">
        <Main />
        <NextScript />
      </body>

    </Html>
  );
}
