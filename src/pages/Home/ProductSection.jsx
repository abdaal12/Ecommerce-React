import React from "react";
import product1 from "../../images/860.png"
import product2 from "../../images/chair.png"
import product3 from "../../images/paste.png"
const ProductSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left - Living Room */}
        <div className="relative group">
          <img
            src={product1}
            alt="Living Room"
            className="w-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-start p-8">
            <div>
              <h2 className="text-3xl font-bold text-white">Living Room</h2>
              <button className="mt-4 inline-block text-sm font-medium text-white underline">
                Shop Now &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Right - Bedroom and Kitchen */}
        <div className="grid grid-cols-1 gap-8">
          {/* Bedroom */}
          <div className="relative group">
            <img
              src={product2}
              alt="Bedroom"
              className="w-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-start p-8">
              <div>
                <h2 className="text-3xl font-bold text-white">Bedroom</h2>
                <button className="mt-4 inline-block text-sm font-medium text-white underline">
                  Shop Now &rarr;
                </button>
              </div>
            </div>
          </div>

          {/* Kitchen */}
          <div className="relative group">
            <img
              src={product3}
              className="w-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-start p-8">
              <div>
                <h2 className="text-3xl font-bold text-white">Kitchen</h2>
                <button className="mt-4 inline-block text-sm font-medium text-white underline">
                  Shop Now &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
