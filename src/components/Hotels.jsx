import React from 'react';
import HotelCard from './HotelCard';

const hotels = [
  {
    id: 1,
    image: './src/assets/Hotel_1.jpg',
    name: 'Montmartre Majesty Hotel',
    location: 'Paris, France',
    rating: 4.7,
    reviews: '2,578',
    price: 160,
  },
  {
    id: 2,
    image: './src/assets/Hotel_1.jpg',
    name: 'Loire Luxury Lodge',
    location: 'Sydney, Australia',
    rating: 4.9,
    reviews: '985',
    price: 350,
  },
  {
    id: 3,
    image: './src/assets/Hotel_1.jpg',
    name: "Tokyo Tower Inn",
    location: "Tokyo, Japan",
    rating: 4.6,
    reviews: 875,
    price: 180,
  },
  {
    id: 4,
    image: './src/assets/Hotel_1.jpg',
    name: "Sydney Harbour Hotel",
    location: "Sydney, Australia",
    rating: 4.8,
    reviews: 1023,
    price: 200,
  },
  {
    id: 5,
    image: './src/assets/Hotel_1.jpg',
    name: "Venice Grande Resort",
    location: "Venice, Italy",
    rating: 4.5,
    reviews: 1234,
    price: 300,
  },
  {
    id: 6,
    image: './src/assets/Hotel_1.jpg',
    name: "The Alpine Retreat",
    location: "Zurich, Switzerland",
    rating: 4.8,
    reviews: 789,
    price: 270,
  },
  {
    id: 7,
    image: './src/assets/Hotel_1.jpg',
    name: "The Beachfront Bliss",
    location: "Maldives",
    rating: 4.9,
    reviews: 543,
    price: 400,
  },
  {
    id: 8,
    image: './src/assets/Hotel_1.jpg',
    name: "Urban Oasis Hotel",
    location: "New York, USA",
    rating: 4.7,
    reviews: 1987,
    price: 220,
  },
  // Add more hotel data here...
];

const Hotels = () => {
  return (
    <section className="py-12 bg-white-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Top trending hotels worldwide</h2>
        <p className="text-gray-600 mb-8">Discover the most trending hotels worldwide for an unforgettable experience.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {hotels.map((hotel, index) => (
            <HotelCard key={index} {...hotel} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hotels;