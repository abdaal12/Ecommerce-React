import React from 'react'
import ProductList from './Product/productList'
import Sorting from './Product/sorting'
import NewsLatter from './Home/newsLatter'
import Footer from './Home/footer'
import banner from "../images/banner.png"
const shop = () => {
  return (
    <>

    <div className="flex items-center justify-center mt-2">
      <div className="relative">
        {/* Image Section */}
        <img 
          src={banner}
          alt="Shop page" 
          className="home_image object-cover"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-black bg-white bg-opacity-50">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-700 mb-4">
            <a href="/" className="hover:underline">Home</a> 
            <span className="mx-2">/</span>
            <span className="text-gray-900">Shop</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Shop Page</h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-700">
            Let’s design the place you always imagined.
          </p>
        </div>
      </div>
    </div>


    <div className="container mx-auto p-6">
      {/* Sorting Controls */}
      <Sorting />

      {/* Product Listing Grid */}
      <ProductList />

      {/* Show more button */}
      <div className="mt-8 flex justify-center">
        <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded">
          Show More
        </button>
      </div>
    </div>
    <NewsLatter/>
    <Footer/>
    </>
    
  )
}

export default shop
