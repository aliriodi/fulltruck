import React, { useEffect, useState } from 'react';
import Layout1 from '@/components/Layout1';
import { useRouter } from 'next/router';
import LoaderTruck from '../../../components/LoaderQwen';
import cards from '../../../components/products/card.json';

function Clasification() {
  // COMPONENTE DE MARCA -> CLASIFICACION
  const router = useRouter();
  const { brand } = router.query;

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [clasification, setClasification] = useState(null);
  const [imagebrand, setImagebrand] = useState('https://res.cloudinary.com/dvy9qircy/image/upload/v1749639487/forex/forex_academy_professional_camionStd.jpg');
  // Simulamos la carga de datos
  useEffect(() => {
    if (!brand) return; // Si no hay marca, no hacer nada

    const fetchData = async () => {
      setLoading(true);
      // Aquí iría la llamada real a tu API o BD
      // Ejemplo: const res = await fetch(`/api/data/${id}`);
      // const result = await res.json();


      // Simulación:
      setTimeout(() => {
        const filtered = cards.cards.filter(card => card.brand === brand);
        const imageB1 = cards.brands.filter(brand2 => brand2.text == brand)
        setImagebrand(imageB1[0].image)
        //setData({ id, name: `Item ${id}` });
        setData(filtered)
        const uniqueClasifications = [
          ...new Set(
            filtered
              .flatMap(card => card.clasification)
          )
        ];
        setClasification(uniqueClasifications)
        setLoading(false);
      }, 1900);
    };

    fetchData();
  }, [brand]);

function Lookimage(class2){
  const imageB1 = cards.clasification.filter(clasification => clasification.text == class2)
  console.log(imageB1.length)
  
   if(imageB1.length>0) {console.log(imageB1)
    return imageB1[0].image}

  
}

  return (
    <Layout1>
      <div className='w-screen'>
        {loading ? (
          /** Loading Loader  */
          <div className="w-full pr-50 h-64 border-0 flex items-center justify-center">
            <LoaderTruck />
          </div>
        ) :
          /* Segmento donde mapeo las cards si existe almenos 1 */
          data && data[0] ? <div>
             <img src={imagebrand} alt={brand} className="w-auto h-40 object-cover rounded mx-auto" />
            {/* <h1>Detalle del Item</h1>
            <p>ID: {data[0].id}</p>
            <p>Nombre: {data[0].title}</p> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {clasification?.map((class2, index) =>

                <div key={index} className="border rounded-xl p-4 shadow-md">
                  <a
                    href={router.asPath + '/' + class2}
                    className="inline-block mt-2 hover:underline"
                  >
                    {/* <img src={class2.image} alt={class2} className="w-auto h-40 object-cover rounded" /> */}
                    <img src={Lookimage(class2)} alt={class2} className="w-auto h-40 object-cover rounded" />
                    <h2 className="text-xl font-bold mt-2">{class2}</h2>


                    {/* Ver más */}
                  </a>
                </div>
              )
              }
            </div>
          </div>

            :
            /**  Si no existe ninguna Card Mapeo esta */
            <div className="w-full h-64 border-0 flex flex-col items-center justify-center">
            <img
              src={imagebrand}
              alt={brand}
              className="w-auto h-40 object-cover rounded mb-14"
            />
             <div className="text-center text-xl font-bold">No existen productos</div>
          </div>
          }




      </div>
    </Layout1>
  );
}

export default Clasification;