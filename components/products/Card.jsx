import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
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

function Card() {
    return (
        <div className="bg-gray-300">
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <div
                className={`${geistSans.className} ${geistMono.className} grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20`}
            >
                <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

                    <div className='pt-12 text-black'>

                    </div>
                    <div className="bg-green-800">
                        <Footer /></div>
                </main>
            </div>
        </div>
    )
}

export default Card