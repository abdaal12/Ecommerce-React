import React, { useEffect, useState } from 'react';
import ProductCard from './productCard';
import product1 from '../../images/paste.png'
import product2 from '../../images/chair.png'
import product3 from '../../images/paste.png'
import product4 from '../../images/Product/newProduct.png'
import product5 from '../../images/Product/newProduct2.png'
import product6 from '../../images/img/image Placeholder.png'
import product7 from '../../images/img/image Placeholder1.png'
import product8 from '../../images/img/image Placeholder2.png'
import product9 from '../../images/img/paste image1.png'
import product10 from '../../images/img/paste image2.png'
import product11 from '../../images/img/paste image3.png'
import product12 from '../../images/img/paste image4.png'
import product13 from '../../images/img/paste image5.png'

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulating an API call to fetch product data
    const mockProducts = [
      {
        id: 1,
        name: 'Loveseat Sofa',
        price: 199.0,
        originalPrice: 499.0,
        image: product1,
        isDiscounted: true,
        isNew: true,
        rating: 5,
      },
      {
        id: 2,
        name: 'Luxury Sofa',
        price: 299.0,
        originalPrice: 599.0,
        image:product2,
        isDiscounted: true,
        isNew: true,
        rating: 5,
      },
      {
        id: 1,
        name: 'Loveseat Sofa',
        price: 199.0,
        originalPrice: 499.0,
        image: product3,
        isDiscounted: true,
        isNew: true,
        rating: 5,
      },
      {
        id: 2,
        name: 'Luxury Sofa',
        price: 299.0,
        originalPrice: 599.0,
        image:product4,
        isDiscounted: true,
        isNew: true,
        rating: 5,
      },
      {
        id: 1,
        name: 'Loveseat Sofa',
        price: 199.0,
        originalPrice: 499.0,
        image: product5,
        isDiscounted: true,
        isNew: true,
        rating: 5,
      },
      {
        id: 2,
        name: 'Luxury Sofa',
        price: 299.0,
        originalPrice: 599.0,
        image:product6,
        isDiscounted: true,
        isNew: true,
        rating: 5,
      },
      {
        id: 1,
        name: 'Loveseat Sofa',
        price: 199.0,
        originalPrice: 499.0,
        image: product7,
        isDiscounted: true,
        isNew: true,
        rating: 5,
      },
      {
        id: 2,
        name: 'Luxury Sofa',
        price: 299.0,
        originalPrice: 599.0,
        image:product8,
        isDiscounted: true,
        isNew: true,
        rating: 5,
      },
      {
        id: 1,
        name: 'Loveseat Sofa',
        price: 199.0,
        originalPrice: 499.0,
        image: product9,
        isDiscounted: true,
        isNew: true,
        rating: 5,
      },
      {
        id: 2,
        name: 'Luxury Sofa',
        price: 299.0,
        originalPrice: 599.0,
        image:product10,
        isDiscounted: true,
        isNew: true,
        rating: 5,
      },
      {
        id: 1,
        name: 'Loveseat Sofa',
        price: 199.0,
        originalPrice: 499.0,
        image: product11,
        isDiscounted: true,
        isNew: true,
        rating: 5,
      },
      {
        id: 2,
        name: 'Luxury Sofa',
        price: 299.0,
        originalPrice: 599.0,
        image:product12,
        isDiscounted: true,
        isNew: true,
        rating: 5,
      },
      // More mock products...
    ];

    setProducts(mockProducts);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
