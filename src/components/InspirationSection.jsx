import React from 'react';

const InspirationSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* First Image Block */}
        <div className="relative group">
          <img
            src="./src/assets/InspirationSection.jpg"
            alt="Comfort Zone"
            className="rounded-xl w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl transition-opacity duration-300 group-hover:bg-opacity-60"></div>
          <div className="absolute inset-0 flex flex-col items-start justify-center px-6">
            <h2 className="text-white text-3xl font-bold mb-4">
              Explore more to get your comfort zone
            </h2>
            <p className="text-white mb-6">Book your perfect stay with us.</p>
            <button className="bg-white text-black py-2 px-4 rounded-md font-medium transition-transform transform hover:scale-105">
              Booking Now →
            </button>
          </div>
        </div>

        {/* Second Column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Top Right Block */}
          <div className="relative group">
            <img
              src="./src/assets/InspirationSection.jpg"
              alt="Lifetime Memories"
              className="rounded-xl w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl transition-opacity duration-300 group-hover:bg-opacity-60"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <h2 className="text-white text-xl sm:text-2xl font-bold">
                Beyond accommodation, creating memories of a lifetime
              </h2>
            </div>
          </div>

          {/* Bottom Right Block */}
          <div className="relative group">
            <img
              src="./src/assets/InspirationSection.jpg"
              alt="Hotels Available"
              className="rounded-xl w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl transition-opacity duration-300 group-hover:bg-opacity-60"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <h2 className="text-white text-xl sm:text-2xl font-bold mb-2">
                Hotels Available
              </h2>
              <p className="text-white text-3xl font-bold">1,764,980</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;