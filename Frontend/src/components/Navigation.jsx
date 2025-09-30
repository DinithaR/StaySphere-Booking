import React from "react";

const Navigation = () => {
  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold mr-8">
        StaySphere
        </a>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
          </li>
          {/* Add more links as needed */}
        </ul>

        {/* Right Section */}
        <div className="flex items-center space-x-4 ml-auto">
          <a href="#" className="hover:text-gray-300">
            EN
          </a>
          <a
            href="/login"
            className="hover:text-gray-300"
          >
            Log In
          </a>
          <a
            href="/signup"
            className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;