
// import React from "react";

import { Link } from "react-router-dom";

const CartSummary = ({ subtotal, total }) => {
  return (
    <div className="flex z-0 flex-col justify-between w-full min-h-[210px]">
      <div className="flex flex-col w-full whitespace-nowrap text-neutral-900">
        <div className="flex flex-col justify-center py-3.5 w-full text-base leading-loose border-b border-solid border-b-gray-200">
          <div className="flex gap-10 items-start w-full">
            <div className="flex flex-1 shrink gap-5 justify-between w-full basis-0 min-w-[240px]">
              <div className="gap-2 self-stretch">Subtotal</div>
              <div className="font-semibold text-right">
                {/* ${subtotal.toFixed(2)} */}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center py-3.5 w-full text-xl font-medium leading-snug">
          <div className="flex gap-10 items-start w-full">
            <div className="flex flex-1 shrink gap-5 justify-between w-full basis-0 min-w-[240px]">
              <div className="gap-2 self-stretch">Total</div>
              <div className="text-right">
                {/* ${total.toFixed(2)} */}
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-4 w-full">
        <Link to="/checkout">
        <button className="gap-1 self-stretch px-7 py-2.5 w-full text-lg font-medium tracking-tight leading-8 text-center text-white whitespace-nowrap rounded-md bg-neutral-900 max-md:px-5">
          Checkout
        </button>
        </Link>
        <button className="gap-1 self-center mt-4 text-sm font-semibold leading-loose border-b border-solid border-b-neutral-900 text-neutral-900">
          View Cart
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
