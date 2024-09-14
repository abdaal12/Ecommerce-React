// import React from 'react';
// import Header from '../../layout/Header';
import CartProgress from './CartProgress';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import CouponForm from './CouponForm';
import Footer from '../Home/footer';

const Cart = () => {


  const cartItems = [
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b12670bf42c2913ac75e0fb07945e77174a06c5c58eba57993696229ce64618d?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b", name: "Tray Table", color: "Black", price: 19.00, quantity: 2 },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ec8b373ef61cfa3276cd02cbe7a09ba4cab0ae62671ff5d51a1fca3648f114c8?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b", name: "Tray Table", color: "Red", price: 19.00, quantity: 2 },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/67563febf0a3d9783df27eaa3663272f594a87522c5081d7151aa1853dbb7299?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b", name: "Table lamp", color: "Gold", price: 39.00, quantity: 1 },
  ];

  return (
    <div className="flex overflow-hidden flex-col">
      {/* <Header /> */}
      <main className="flex flex-col items-center px-40 py-20 bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-center max-md:max-w-full">
          <h1 className="text-6xl font-medium tracking-tighter leading-none text-black max-md:text-4xl">
            Cart
          </h1>
          <CartProgress />
        </div>
        <div className="flex flex-col max-md:max-w-full">
          <div className="flex flex-wrap gap-10 items-start py-20 max-md:max-w-full">
            <div className="flex flex-col font-semibold min-w-[240px] w-[643px] max-md:max-w-full">
              <div className="flex flex-wrap gap-10 justify-between items-start pb-6 w-full text-base leading-loose whitespace-nowrap border-b border-solid border-b-zinc-500 max-w-[643px] text-neutral-900 max-md:max-w-full">
                <div>Product</div>
                <div className="flex gap-10 justify-between items-center min-w-[240px] w-[322px]">
                  <div className="self-stretch my-auto">Quantity</div>
                  <div className="self-stretch my-auto">Price</div>
                  <div className="self-stretch my-auto">Subtotal</div>
                </div>
              </div>
              {cartItems.map((item, index) => (
                <CartItem key={index} {...item} />
              ))}
            </div>
            <div className="flex flex-col gap-10">
              <CartSummary />
              <CouponForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;