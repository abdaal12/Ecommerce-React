import React from 'react';
import newProduct from "../../images/Product/newProduct.png"
import newProduct2 from "../../images/Product/newProduct2.png"
import newProduct3 from "../../images/img/image placeholder.png"
import newProduct4 from "../../images/img/image placeholder2.png"
import newProduct5 from "../../images/img/paste image1.png"

const products = [
  {
    id: 1,
    name: "Loveseat Sofa",
    price: "$199.00",
    oldPrice: "$400.00",
    imageSrc: newProduct4,
    rating: 5,
    discount: "-50%",
  },
  {
    id: 2,
    name: "Table Lamp",
    price: "$24.99",
    imageSrc: newProduct3,
    rating: 4,
    discount: "-50%",
  },
  {
    id: 3,
    name: "Beige Table Lamp",
    price: "$24.99",
    imageSrc: newProduct2,
    rating: 4,
    discount: "-50%",
  },
  {
    id: 4,
    name: "Bamboo Basket",
    price: "$24.99",
    imageSrc: newProduct,
    rating: 5,
    discount: "-50%",
  },
  {
    id: 5,
    name: "Toasted",
    price: "$224.99",
    imageSrc: newProduct5,
    rating: 5,
    discount: "-50%",
  },
];

function NewProduct() {
  return (
    <div className="my-12 px-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">New Arrivals</h2>
        <a href="/product" className="text-gray-600 cursor-pointer hover:text-black">More Products →</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white border rounded-lg p-4 relative">
            <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
              NEW
            </div>
            <div className="absolute top-2 right-2 bg-gray-100 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <img src={product.imageSrc} alt={product.name} className=" object-cover mb-4" />
            <div className="flex justify-between items-center">
              <span className="bg-green-100 text-green-600 text-sm px-2 py-1 rounded">{product.discount}</span>
              <button className="bg-black text-white px-4 py-2 rounded">Add to cart</button>
            </div>
            <div className="mt-4 text-gray-600">
              <p className="text-sm">
                {Array.from({ length: product.rating }).map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="inline h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                  </svg>
                ))}
              </p>
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-lg">
                {product.price} <span className="line-through text-gray-400">{product.oldPrice}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewProduct;
