import React from 'react';

const InfoCards = () => {
  const cards = [
    {
      image: '/assetes/vigyan/slider-3.jpg',
      description:
        "Vigyan Pathshala Technologies has been honored with the prestigious award for providing the Best Solutions for K-12 Schools at the Indian Education Congress & Awards 2024!",
    },
    {
      image: '/assetes/vigyan/slider-1.jpg',
      description:
        "Vigyan Pathshala Technologies has been honored with the prestigious award for providing the Best Solutions for K-12 Schools at the Indian Education Congress & Awards 2024!",
    },
    {
      image: '/assetes/vigyan/slider-2.jpg',
      description:
        "Vigyan Pathshala Technologies has been honored with the prestigious award for providing the Best Solutions for K-12 Schools at the Indian Education Congress & Awards 2024!",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-teal-100 py-16 px-4">kljlkjkljlkj
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-tl-[50px] rounded-br-[50px] shadow-md hover:shadow-xl transition-shadow duration-300 p-4 text-center"
          >
            <div className="overflow-hidden rounded-tl-[50px] rounded-br-[50px]">
              <img
                src={card.image}
                alt={`Card ${index + 1}`}
                className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-105"
              />
            </div>
            <p className="text-gray-700 text-base mt-4">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCards;
