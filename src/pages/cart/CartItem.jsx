
// import React from "react";

const CartItem = ({ image, name, color, quantity, price }) => {
  return (
    <div className="flex justify-between items-center py-6 w-full border-b border-solid border-b-gray-200">
      <div className="flex flex-col items-start self-stretch my-auto min-w-[240px] w-[376px]">
        <div className="flex gap-4 max-w-full w-[316px]">
          <img
            loading="lazy"
            src={image}
            alt={`${name} in ${color}`}
            className="object-contain shrink-0 my-auto w-20 aspect-[0.83]"
          />
          <div className="flex gap-6 justify-between items-start h-full min-w-[240px] w-[267px]">
            <div className="flex flex-col justify-center text-xs leading-loose w-[200px]">
              <div className="text-sm leading-loose text-neutral-900">
                {name}
              </div>
              <div className="mt-2 text-zinc-500">Color: {color}</div>
              <div className="flex flex-col justify-center px-2 py-1.5 mt-2 w-20 text-center whitespace-nowrap rounded border border-solid border-zinc-500 min-h-[32px] text-neutral-900">
                <div className="flex relative flex-col px-7 w-full aspect-[3.2] max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e927264f311469571f0d8020b4aa3a87257356d3ff53a93e5b0a5c85889a7aa?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b"
                    alt=""
                    className="object-cover absolute inset-0 size-full"
                  />
                  {quantity}
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-end text-sm leading-loose text-right whitespace-nowrap text-neutral-900">
              <div>
                {/* ${price.toFixed(2)} */}
                </div>
              <button aria-label="Remove item">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c729af904b1aae9c8dfcf5f1460c66ea5f665667eba74946a6b8dfc089a978cb?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b"
                  alt="Remove item"
                  className="object-contain mt-2 w-6 aspect-square"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
