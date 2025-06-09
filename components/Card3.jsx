import React from 'react'

function Card3() {
    const cards = [
        {
            id: 1,
            title: "Calidad Garantizada:",
            image: "https://res.cloudinary.com/dvy9qircy/image/upload/v1748722749/forex/forex_academy_professional_100QAv2.jpg",
            description: "Trabajamos con los mejores fabricantes para asegurarnos de que obtengas solo lo mejor.",
        },
        {
            id: 2,
            title: "Asesoría Especializada:",
            image: "https://res.cloudinary.com/dvy9qircy/image/upload/v1749506125/forex/forex_academy_professional_whatrsapp2-v3.png",
            description: "Nuestro equipo de expertos está listo para ayudarte a encontrar la pieza perfecta para tus necesidades.",
        },
        {
            id: "Servicios",
            title: "Precios Competitivos:",
            image: "https://res.cloudinary.com/dvy9qircy/image/upload/v1749507507/forex/forex_academy_professional_PreciosCompetitivosv2.jpg",
            description: "Ofrecemos los mejores precios del mercado.",
        },
    ];
    return (
        <div>
            <div className='pt-6'>
            <div className='flex   bg-green-800 text-2xl justify-center p-6 '>¿POR QUE ELEGIRNOS?</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        id={card.id}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden transition hover:scale-105"
                    >
                        <img src={card.image} alt={card.id} className="w-full h-auto object-cover" />
                        <div className="p-4">
                            <h2 className="text-green-950 text-xl font-bold mb-2">{card.title}</h2>
                            <p className="text-gray-600">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Card3