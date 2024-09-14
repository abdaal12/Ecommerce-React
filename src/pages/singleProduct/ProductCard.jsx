
// import React from "react";

const ProductCard = ({ name, price, oldPrice, image, isNew, discount }) => {
  return (
    <div className="flex flex-col min-w-[240px] w-[262px]">
      <div className="flex relative flex-col items-start px-4 pt-4 pb-72 w-full text-base font-bold leading-none text-center uppercase whitespace-nowrap aspect-[0.751] max-md:pr-5 max-md:pb-24">
        <img
          loading="lazy"
          src={image}
          alt={name}
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col mb-0 max-md:mb-2.5">
          {isNew && (
            <div className="gap-2 self-stretch px-3.5 py-1 bg-white rounded text-neutral-900">
              NEW
            </div>
          )}
          {discount && (
            <div className="gap-2 self-stretch px-3.5 py-1 mt-2 text-white bg-emerald-400 rounded">
              -{discount}%
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col mt-3">
        <div className="flex flex-col items-start w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac91ee13fa60a089929cfb3c84d88c4c7e44993d53054e7d2e3c0f8ca3250815?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b"
            alt="Product rating"
            className="object-contain aspect-[5.49] w-[88px]"
          />
          <div className="self-stretch mt-1 text-base font-semibold leading-loose text-neutral-900">
            {name}
          </div>
          <div className="flex gap-3 items-start mt-1 text-sm leading-loose whitespace-nowrap">
            <div className="font-semibold text-neutral-900">
              {/* ${price.toFixed(2)} */}
            </div>
            {oldPrice && (
              <div className="text-zinc-500">
                {/* ${oldPrice.toFixed(2)} */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
