import React from 'react';
import HotelCard from './HotelCard';

const hotels = [
  {
    id: 1,
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/297840629.jpg?k=d20e005d5404a7bea91cb5fe624842f72b27867139c5d65700ab7f69396026ce&o=&hp=1',
    name: 'Montmartre Majesty Hotel',
    location: 'Paris, France',
    rating: 4.7,
    reviews: '2,578',
    price: 160,
  },
  {
    id: 2,
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/596257607.jpg?k=0b513d8fca0734c02a83d558cbad7f792ef3ac900fd42c7d783f31ab94b4062c&o=&hp=1',
    name: 'Loire Luxury Lodge',
    location: 'Sydney, Australia',
    rating: 4.9,
    reviews: '985',
    price: 350,
  },
  {
    id: 3,
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/308797093.jpg?k=3a35a30f15d40ced28afacf4b6ae81ea597a43c90c274194a08738f6e760b596&o=&hp=1',
    name: "Tokyo Tower Inn",
    location: "Tokyo, Japan",
    rating: 4.6,
    reviews: 875,
    price: 180,
  },
  {
    id: 4,
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/84555265.jpg?k=ce7c3c699dc591b8fbac1a329b5f57247cfa4d13f809c718069f948a4df78b54&o=&hp=1',
    name: "Sydney Harbour Hotel",
    location: "Sydney, Australia",
    rating: 4.8,
    reviews: 1023,
    price: 200,
  },
  {
    id: 5,
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/608273980.jpg?k=c7df20ffb25ae52b6a17037dc13f5e15b94a0fe253a9b9d0b656f6376eabec7d&o=&hp=1',
    name: "Venice Grande Resort",
    location: "Venice, Italy",
    rating: 4.5,
    reviews: 1234,
    price: 300,
  },
  {
    id: 6,
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/606303798.jpg?k=514943d0025704b27396faf82af167468d8b50b98f311668f206f79ca36cb53d&o=&hp=1',
    name: "The Alpine Retreat",
    location: "Zurich, Switzerland",
    rating: 4.8,
    reviews: 789,
    price: 270,
  },
  {
    id: 7,
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/60307464.jpg?k=67ae35316203e2ec82d8e02e0cef883217cce9c436da581528b94ad6dee8e393&o=&hp=1',
    name: "The Beachfront Bliss",
    location: "Maldives",
    rating: 4.9,
    reviews: 543,
    price: 400,
  },
  {
    id: 8,
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/308794596.jpg?k=76bbd047a4f3773844efb15819a637f10fb98671244760fcd69cf26d1073b797&o=&hp=1',
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

