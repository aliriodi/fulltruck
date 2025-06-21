import React from 'react'
import Navbar from './Navbar';
import NavbarHours from './NavHours'
import Footer from './Footer';
import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

function Layout1({ children }) {
    return (
        <div className={`${geistSans.className} ${geistMono.className} bg-gradient-to-r from-gray-300 to-green-300`} >
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta charSet="UTF-8" />
        <meta name="description" content="Repuestos de camiones y autobuses" />
        <meta name="keywords" content="Mercedes Benz, Camiones, mecanica, motores, Ford, Iveco, Cummins" />
        <meta name="author" content="Shiva Camiones" />
        <meta property="og:title" content="Repuestos de camiones" />
        <meta property="og:description" content="Repuestos de camiones Cummins, Ford, Iveco, Mercedes Benz, Renault, Scania, Volkswagen, Volvo" />
        <meta property="og:image" content="https://res.cloudinary.com/dvy9qircy/image/upload/v1750457832/forex/forex_academy_professional_NavBarv5.png" />
        <meta property="og:url" content="https://fulltruck-five.vercel.app/" />
        
        <title>Shiva Camiones</title>
            </Head>
            <NavbarHours />
            <Navbar />
            <div
                className={`${geistSans.className} ${geistMono.className} grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20`}
            >
                <main className="flex flex-col  items-center sm:items-start">
                {/* <div className='pt-12 pb-8  text-black'> */}
                {/* Con el nuevo Navbar */}
                    <div className='pt-28 pb-8  text-black'>


                        {children}

                    </div>
                    <div className="bg-green-800">
                        <Footer /></div>
                </main>
            </div>
        </div>
    )
}

export default Layout1