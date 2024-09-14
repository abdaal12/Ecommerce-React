import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="relative bg-white shadow-md rounded-lg p-4 group">
      {/* Discount Badge */}
      {product.isDiscounted && (
        <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
          -50%
        </div>
      )}

      {/* New Badge */}
      {product.isNew && (
        <div className="absolute top-8 left-2 bg-gray-200 text-gray-800 text-xs font-bold px-2 py-1 rounded">
          NEW
        </div>
      )}

      {/* Wishlist Icon */}
      <div className="absolute top-2 right-2 flex items-center justify-center w-8 h-8 rounded-full bg-white border border-gray-300">
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
          />
        </svg>
      </div>

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />

      {/* Product Details */}
      <h2 className="text-lg font-semibold mt-4">{product.name}</h2>

      {/* Price */}
      <p className="text-gray-800 font-semibold text-lg">
        ${product.price}{' '}
        {product.isDiscounted && (
          <span className="line-through text-gray-400">
            ${product.originalPrice}
          </span>
        )}
      </p>

      {/* Rating */}
      <div className="mt-2">
        <span className="text-yellow-500">★★★★★</span> {product.rating}
      </div>
       {/* Hover: Add to Cart button */}
       <button className="absolute bottom-2 right-0 transform -translate-x-1/2 bg-black text-white text-sm font-semibold py-2 px-4 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
