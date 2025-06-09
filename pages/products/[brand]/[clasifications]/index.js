import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout1 from '@/components/Layout1'
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
        const filtered = cards.cards.filter(card => card.brand === brand);
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

  if (!card) return <p>Cargando...</p>;

  return (
    <div>
      <Layout1>
      <h1 className="text-3xl font-bold">{card.title}</h1>
      <h1 className="text-black  text-3xl font-bold">{clasifications}</h1>
      <h1 className="text-3xl font-bold">{brand}</h1>
      <img src={card.image} alt={card.title} className="my-4 w-full max-w-md" />
      <p>{card.description}</p>
      </Layout1>
    </div>
  );
}
