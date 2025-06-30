import React, { useEffect, useState } from 'react';
import Layout1 from '../Layout1';
import { Geist, Geist_Mono } from "next/font/google";
import LoaderTruck from '@/components/LoaderQwen';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});
const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

function Card() {
    const [brands, setBrands] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const resBrands = await fetch('/api/brands/get');
                const brandsData = await resBrands.json();

                const resProducts = await fetch('/api/products/get');
                const productsData = await resProducts.json();

                setBrands(brandsData.brands || []);
                setProducts(productsData.product || []);
            } catch (error) {
                console.error("Error al cargar marcas o productos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const getQty = (brandName) => {
        return products.filter(p => p.brand === brandName).length;
    };

    return (

        <Layout1>
            {loading ?
                <div className="w-screen h-64 border-0 flex items-center justify-center">
                    <LoaderTruck />
                </div>
                :
                <div
                    className={`${geistSans.className} ${geistMono.className} grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20`}
                >
                    <div className="pt-12 mx-auto text-black w-full">

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                            {brands.map((card, index) => (
                                <div
                                    key={index}
                                    className="rounded-xl p-4 shadow-md transition duration-300 hover:border-green-300 hover:bg-green-300 mx-auto"
                                >
                                    <a href={`/products/${card.text}`} className="inline-block mt-2 hover:underline">
                                        <img
                                            src={card.image}
                                            alt={card.text}
                                            className="w-auto h-40 object-contain rounded mx-auto"
                                        />
                                        <h2 className="text-xl font-bold mt-2">
                                            {getQty(card.text)} Productos
                                        </h2>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>}
        </Layout1>
    );
}

export default Card;
