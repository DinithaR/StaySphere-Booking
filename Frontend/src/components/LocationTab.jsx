import React from 'react';

const LocationTab = ({ locations, selectedLocation, onSelectLocation }) => {
  return (
    <div className="flex space-x-4 mb-8">
      {locations.map((location, index) => (
        <button
          key={index}
          className={`px-4 py-2 rounded ${selectedLocation === location ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => onSelectLocation(location)}
        >
          {location}
        </button>
      ))}
    </div>
  );
};

export default LocationTab;