
// import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Loveseat Sofa",
    price: 199.0,
    oldPrice: 400.0,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/35c8643dd38d173e6eafc19326e80f955a845507b2796e74051ecd425d0d5e55?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b",
    isNew: true,
    discount: 50,
  },
  {
    id: 2,
    name: "Luxury Sofa",
    price: 299.0,
    oldPrice: 500.0,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/532391a9d5418a4a754a216cbd56f751639de3750f246b0df687547f36355d00?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b",
    isNew: true,
    discount: 50,
  },
  {
    id: 3,
    name: "Table Lamp",
    price: 19.0,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9bb3ccf8af76c04a4468eea786db97a3d12e003af7e682eca50fd95ef4d8cd12?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b",
    isNew: true,
    discount: 50,
  },
  {
    id: 4,
    name: "Cozy Sofa",
    price: 299.0,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/cb43f5c8fcbcb0dadbaa39b70c60b0e8b4f15b78e1a75aad6c5f80a562f6554f?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b",
    isNew: true,
    discount: 50,
  },
  {
    id: 5,
    name: "White Drawer unit",
    price: 89.99,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d17fbed27c141c0558d5da163cac88963257a3df5f52d229c4297de22ddb9139?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b",
    isNew: true,
    discount: 50,
  },
  {
    id: 6,
    name: "Black Tray table",
    price: 19.99,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0cfb36a2fe090c5cdc7260e37a0bd024fe8035e06602ce8744cb1e6b004b5513?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b",
    isNew: true,
    discount: 50,
  },
  {
    id: 7,
    name: "Table Lamp",
    price: 19.0,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/81538f45006292210212f785346999070be328c01df260fe9362d7f470c978c0?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b",
    isNew: true,
    discount: 50,
  },
  {
    id: 8,
    name: "Black Brow Side table",
    price: 16.99,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f0be656e4e5eb6f0c9c3aaaac1c5e181783fb1225bfdc85ab0ed4cf05dd73ec4?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b",
    isNew: true,
    discount: 50,
  },
  {
    id: 9,
    name: "Light Beige Pillow",
    price: 3.99,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2121503296a570e5a47ce0791ce2620b23c2fc593e1e159cb897cd434068f38d?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b",
    isNew: true,
    discount: 50,
  },
  {
    id: 10,
    name: "Table Lamp",
    price: 39.99,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7854aa55b78a2c05cb51f03a7b7ffad2588b371a10bd13773f6da8b11aa3872b?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b",
    isNew: true,
    discount: 50,
  },
  {
    id: 11,
    name: "Bamboo Basket",
    price: 9.99,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/976509d70a5023a37b84df00f6d1b93040bbf3f1d319fdd60937b1eb4d781b71?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b",
    isNew: true,
    discount: 50,
  },
  {
    id: 12,
    name: "Off-white Pillow",
    price: 7.99,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/28a22927e05ff455f3cb5ceb550759844396f92899c09e8783b73c3cd744ae8d?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b",
    isNew: true,
    discount: 50,
  },
];

const ProductGrid = () => {
  return (
    <div className="flex flex-col items-center mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-6 items-start max-md:max-w-full">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
