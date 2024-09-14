import React, { useState } from 'react';

const images = [
  "https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
  "https://via.placeholder.com/800x400?text=Slide+2",
  "https://via.placeholder.com/800x400?text=Slide+3"
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Next slide handler
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Previous slide handler
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Image */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-[450px] object-fill"
      />

      {/* Left Arrow */}
      <button
        className="absolute text-2xl top-1/2 transform -translate-y-1/2 left-4 bg-white text-black px-4 py-3 rounded-full"
        onClick={prevSlide}
      >
        &#8592;
      </button>

      {/* Right Arrow */}
      <button
        className="absolute text-2xl top-1/2 transform -translate-y-1/2 right-4 bg-white text-black px-4 py-3 rounded-full"
        onClick={nextSlide}
      >
        &#8594;
      </button>

      {/* Dots for navigation */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
