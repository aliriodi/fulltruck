import { useEffect, useState } from "react";
import Layout1 from '@/components/Layout1'
export default function LoaderTruck() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simula carga de 2.5s, podés reemplazar con evento real de carga
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
      
            <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
                  <Layout1>
                <div className="absolute  w-64 h-32 overflow-hidden">
                    {/* Camino */}
                    <div className="absolute bottom-0 w-full h-4 bg-gray-700 animate-road-slide"></div>

                    {/* Camión */}
                    <div className="absolute w-32 h-16 bg-yellow-500 rounded shadow-lg animate-truck-move">
                        <div className="absolute bottom-[-10px] left-2 w-6 h-6 bg-black rounded-full"></div>
                        <div className="absolute bottom-[-10px] right-2 w-6 h-6 bg-black rounded-full"></div>
                    </div>
                </div>
                </Layout1>
            </div>
        
    );
}
