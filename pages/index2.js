import Image from "next/image";
import Navbar from "@/components/Navbar";
import Whatssapp from "@/components/Whatssapp";
import PARTI from "@/components/PARTI";
import CARD3 from "@/components/Card3";
import CardSlider from "@/components/CardSlider";
import Footer from "@/components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
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
          <Whatssapp />
          <div id='Inicio' className="pr-6">
            <PARTI />
            <CARD3 />
            <CardSlider />
            <div className="bg-green-800">
            <Footer  /></div>
          </div>
        </main>
      </div>
    </div>
  );
}
