import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Curso() {
  const router = useRouter();
  const { id } = router.query;
  const [card, setCard] = useState(null);

  useEffect(() => {
    if (!id) return;
    // fetch('/cards.json')
    //   .then(res => res.json())
    //   .then(data => {
    //     const found = data.cards.find(c => c.id.toString() === id);
    //     setCard(found);
    //   });

    if(id) setCard(id)
  }, [id]);

  if (!card) return <p>Cargando...</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{card.title}</h1>
      <h1 className="text-3xl font-bold">{id}</h1>
      <img src={card.image} alt={card.title} className="my-4 w-full max-w-md" />
      <p>{card.description}</p>
    </div>
  );
}
