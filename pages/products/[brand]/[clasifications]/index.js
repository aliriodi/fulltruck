import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout1 from '@/components/Layout1'
import LoaderTruck from '@/components/LoaderQwen'
import cards from '../../../../components/products/card.json';

export default function Products() {
  // COMPONENTE DE MARCA -> CLASIFICACION -> PRODUCTO
  const router = useRouter();
  const [imagebrand, setImagebrand] = useState('https://res.cloudinary.com/dvy9qircy/image/upload/v1749639487/forex/forex_academy_professional_camionStd.jpg');
  const { brand, clasifications, product } = router.query;
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [clasification, setClasification] = useState(null);

  useEffect(() => {
    if (!clasifications) return;
    // fetch('/cards.json')
    //   .then(res => res.json())
    //   .then(data => {
    //     const found = data.cards.find(c => c.id.toString() === id);
    //     setCard(found);
    //   });

    if (clasifications) setCard(clasifications)

    const fetchData = async () => {
      setLoading(true);
      // Aquí iría la llamada real a tu API o BD
      // Ejemplo: const res = await fetch(`/api/data/${id}`);
      // const result = await res.json();


      // Simulación:
      setTimeout(() => {
        const filtered = cards.cards.filter(card => card.brand === brand && card.clasification.includes(clasifications));
        //setData({ id, name: `Item ${id}` });
        //cargando Imagen de Brand o marca
        const imageB1 = cards.brands.filter(brand2 => brand2.text == brand)
        setImagebrand(imageB1[0].image)
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
  }, [clasifications]);

  if (!card) return <div>Cargando...</div>;

  return (
    <div>
      <Layout1>

        {data && data[0] ? <div>

          <div className="w-screen max-w-7xl mx-auto px-0 py-8">
            {/* Imagen y título principal */}
            <div className="flex flex-col items-center mb-8">
              <img
                src={imagebrand}
                alt={brand}
                className="w-auto h-40 object-cover rounded-lg shadow-lg"
              />
              <h1 className="mt-4 text-green-950 text-4xl font-extrabold tracking-tight">
                {clasifications}
              </h1>
            </div>

            {/* Grid de cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {data?.map((card, index) => (
                <div
                  key={index}
                  className="border rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 "
                >
                  <a
                    href={router.asPath + "/" + card.id}
                    className="block"
                  >
                    <img
                      src={card.image[0]}
                      alt={card.title}
                      className="w-full  object-cover rounded-md mb-4"
                    />
                    <h2 className="text-2xl font-semibold text-green-900 transition-colors duration-300">
                      {card.title}
                    </h2>
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>

          :
          /**  Si no existe ninguna Card Mapeo esta */
          <div className="w-screen h-64 border-0 flex items-center justify-center">
            <LoaderTruck />
          </div>
        }

      </Layout1>
    </div>
  );
}
