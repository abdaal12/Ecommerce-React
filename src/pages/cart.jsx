import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
const Cart = ({ toggleCart }) => {
  // Same cart data and logic as before
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Tray Table', color: 'Black', price: 19.19, quantity: 2, imgSrc: '/path-to-black-tray-table-image' },
    { id: 2, name: 'Tray Table', color: 'Red', price: 19.19, quantity: 2, imgSrc: '/path-to-red-tray-table-image' },
    { id: 3, name: 'Table lamp', color: 'Gold', price: 39.00, quantity: 2, imgSrc: '/path-to-lamp-image' }
  ]);

  const handleQuantityChange = (id, increment) => {
    const updatedItems = cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = increment ? item.quantity + 1 : item.quantity - 1;
        return { ...item, quantity: Math.max(1, newQuantity) };
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  const handleRemoveItem = (id) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal + 135; // Example shipping cost

  return (
    <div className="bg-white w-full max-w-md fixed right-0 top-0 h-full shadow-lg z-50">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Cart</h2>
          <button onClick={toggleCart} className="text-black text-xl">×</button> {/* Close Button */}
        </div>
      </div>

      <div className="p-6 overflow-y-auto h-3/5">
        {cartItems.map(item => (
          <div key={item.id} className="flex items-center justify-between border-b py-4">
            <img src={item.imgSrc} alt={item.name} className="w-16 h-16 object-cover rounded" />
            <div className="flex-grow mx-4">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-gray-500">Color: {item.color}</p>
              <div className="flex items-center mt-2">
                <button onClick={() => handleQuantityChange(item.id, false)} className="border px-2 py-1">-</button>
                <span className="px-3">{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item.id, true)} className="border px-2 py-1">+</button>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => handleRemoveItem(item.id)} className="text-red-500 mt-2">×</button>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 border-t border-gray-200">
        <div className="flex justify-between mb-4">
          <span className="text-gray-500">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-6">
          <span className="font-semibold text-lg">Total</span>
          <span className="font-semibold text-lg">${total.toFixed(2)}</span>
        </div>
        <a href="/checkout">
        <button className="gap-1 self-stretch px-7 py-2.5 w-full text-lg font-medium tracking-tight leading-8 text-center text-white whitespace-nowrap rounded-md bg-neutral-900 max-md:px-5">
          Checkout
        </button>
        </a>
      </div>
    </div>
  );
};

export default Cart;
