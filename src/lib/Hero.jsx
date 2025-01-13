import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?hotel,room')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay */}

      <div className="container mx-auto relative z-10 flex flex-col items-center justify-center text-center h-full text-white px-4">
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Find Your Best Staycation
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl mb-8">
          Describe your dream destination and experience, and we'll find the perfect place for you.
        </p>

        {/* Search Bar */}
        <div className="flex w-full max-w-lg bg-white rounded-full shadow-md overflow-hidden">
          <input
            type="text"
            placeholder="Describe your destination, experience, or hotel..."
            className="flex-grow px-4 py-2 text-black focus:outline-none"
          />
          <button className="bg-black text-white px-6 py-2 hover:bg-gray-800 flex items-center space-x-2">
            <span>AI Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6h8m-4 4h4M6 6h.01M6 10h.01M6 14h.01M6 18h.01"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;