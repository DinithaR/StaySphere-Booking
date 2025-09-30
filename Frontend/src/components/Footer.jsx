import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Horizon Section */}
        <div>
          <h3 className="text-lg font-semibold">StaySphere</h3>
          <p className="text-gray-600 mt-2">
            Our mission is to provide seamless hotel booking experiences for
            modern travelers worldwide.
          </p>
          <p className="text-gray-400 text-sm mt-4">
            ©2025 StaySphere. All rights reserved.
          </p>
        </div>

        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold">About</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-lg font-semibold">Support</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Return Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Get Updates Section */}
        <div>
          <h3 className="text-lg font-semibold">Get Updates</h3>
          <p className="text-gray-600 mt-2">
            Subscribe to our newsletter for exclusive offers.
          </p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-r-md"
            >
              Subscribe
            </button>
          </form>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;