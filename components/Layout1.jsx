import React from 'react'
import Navbar from './Navbar';
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
        <div className="bg-gradient-to-r from-gray-300 to-green-300">
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <div
                className={`${geistSans.className} ${geistMono.className} grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20`}
            >
                <main className="flex flex-col  items-center sm:items-start">

                    <div className='pt-12 pb-8 text-black'>
                    
                  
                    { children }
    
                    </div>
                    <div className="bg-green-800">
                        <Footer /></div>
                </main>
            </div>
        </div>
    )
}

export default Layout1