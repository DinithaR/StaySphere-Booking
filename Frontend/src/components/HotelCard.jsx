import React from 'react';

const HotelCard = ({ image, name, location, rating, reviews, price }) => {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden bg-white">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-500">{location}</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">⭐ {rating}</span>
          <span className="text-gray-500 ml-2">({reviews} Reviews)</span>
        </div>
        <p className="text-lg font-bold mt-2">${price}</p>
      </div>
    </div>
  );
};

export default HotelCard;