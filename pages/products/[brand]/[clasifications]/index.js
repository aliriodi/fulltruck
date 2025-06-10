import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout1 from '@/components/Layout1'
import LoaderTruck from '@/components/LoaderQwen'
import cards from '../../../../components/products/card.json';

export default function Curso() {
  const router = useRouter();
  const {brand, clasifications } = router.query;
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

    if(clasifications) setCard(clasifications)

    const fetchData = async () => {
      setLoading(true);
      // Aquí iría la llamada real a tu API o BD
      // Ejemplo: const res = await fetch(`/api/data/${id}`);
      // const result = await res.json();


      // Simulación:
      setTimeout(() => {
        const filtered = cards.cards.filter(card => card.brand === brand && card.clasification.includes(clasifications));
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
  }, [clasifications]);

  if (!card) return <div>Cargando...</div>;

  return (
    <div>
      <Layout1>
      <h1 className="text-3xl font-bold">{card.title}</h1>
      <h1 className="text-black  text-3xl font-bold">{clasifications}</h1>
      <h1 className="text-3xl font-bold">{brand}</h1>
      <img src={card.image} alt={card.title} className="my-4 w-full max-w-md" />
      <p>{card.description}</p>
     { data && data[0] ? <div>

{/* <h1>Detalle del Item</h1>
<p>ID: {data[0].id}</p>
<p>Nombre: {data[0].title}</p> */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {data?.map((class2, index) =>

    <div key={index} className="border rounded-xl p-4 shadow-md">
      <a
        href={router.asPath + '/' + class2.id}
        className="inline-block mt-2 hover:underline"
      >
        <img src={class2.image} alt={class2.title} className="w-auto h-40 object-cover rounded" />
        <h2 className="text-xl font-bold mt-2">{class2.title}</h2>


        {/* Ver más */}
      </a>
    </div>
  )
  }
</div>
</div>

:
/**  Si no existe ninguna Card Mapeo esta */
<div className="w-full pr-50 h-64 border-0 flex items-center justify-center">
<LoaderTruck />
</div>}

      </Layout1>
    </div>
  );
}
