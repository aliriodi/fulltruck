import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout1 from '@/components/Layout1'


export default function Curso() {
  const router = useRouter();
  const {id, id2 } = router.query;
  const [card, setCard] = useState(null);

  useEffect(() => {
    if (!id2) return;
    // fetch('/cards.json')
    //   .then(res => res.json())
    //   .then(data => {
    //     const found = data.cards.find(c => c.id.toString() === id);
    //     setCard(found);
    //   });

    if(id2) setCard(id2)
  }, [id2]);

  if (!card) return <p>Cargando...</p>;

  return (
    <div>
      <Layout1>
      <h1 className="text-3xl font-bold">{card.title}</h1>
      <h1 className="text-black  text-3xl font-bold">{id2}</h1>
      <h1 className="text-3xl font-bold">{id}</h1>
      <img src={card.image} alt={card.title} className="my-4 w-full max-w-md" />
      <p>{card.description}</p>
      </Layout1>
    </div>
  );
}
