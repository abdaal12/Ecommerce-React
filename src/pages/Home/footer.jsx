import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left section with logo and description */}
        <div className="flex flex-col items-center lg:items-start mb-4 lg:mb-0">
          <span className="text-2xl font-bold">3legant.</span>
          <span className="text-sm mt-1">Gift & Decoration Store</span>
        </div>

        {/* Navigation links */}
        <div className="flex space-x-6 mb-4 lg:mb-0">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">Shop</a>
          <a href="#" className="hover:text-gray-400">Product</a>
          <a href="#" className="hover:text-gray-400">Blog</a>
          <a href="#" className="hover:text-gray-400">Contact Us</a>
        </div>

        {/* Copyright section */}
        <div className="flex flex-col items-center lg:items-end">
          <p className="text-sm mb-2 lg:mb-0">
            Copyright &copy; 2023 3legant. All rights reserved
          </p>
          <div className="flex space-x-4 mb-4 lg:mb-0">
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Terms of Use</a>
          </div>
          {/* Social icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.7 4H4.3C3.6 4 3 4.6 3 5.3v14.3c0 .7.6 1.3 1.3 1.3h15.3c.7 0 1.3-.6 1.3-1.3V5.3c0-.7-.6-1.3-1.3-1.3zM12 9.5c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5S9.5 13.4 9.5 12 10.6 9.5 12 9.5zM18.4 18h-3c-.1-1.2-2.2-1.8-3.4-1.8s-3.2.6-3.4 1.8h-3V9h12v9z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.6 3H5.4C4.1 3 3 4.1 3 5.4v13.2C3 19.9 4.1 21 5.4 21h13.2c1.3 0 2.4-1.1 2.4-2.4V5.4C21 4.1 19.9 3 18.6 3zM12 17.5c-3.1 0-5.5-2.5-5.5-5.5S8.9 6.5 12 6.5s5.5 2.5 5.5 5.5-2.5 5.5-5.5 5.5zm3.8-7.7h-2V8h2v1.8z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.5 2h-19C1.1 2 0 3.1 0 4.5v15C0 20.9 1.1 22 2.5 22H12v-8H9.5V11H12V8.7c0-2.6 1.5-4 3.8-4 1.1 0 2.2.1 2.5.2v2.9H16.9c-1.5 0-1.8.7-1.8 1.7v2.2h3.6l-.5 3H15v8h6.5c1.4 0 2.5-1.1 2.5-2.5v-15C24 3.1 22.9 2 21.5 2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
