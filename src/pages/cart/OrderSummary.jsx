
// import React from "react";

const OrderItem = ({ image, name, color, quantity, price }) => (
  <div className="flex justify-between items-center py-6 max-w-full font-semibold border-b border-solid border-b-gray-200 w-[376px]">
    <div className="flex flex-col items-start self-stretch my-auto min-w-[240px] w-[376px]">
      <div className="flex gap-4 max-w-full w-[316px]">
        <img
          loading="lazy"
          src={image}
          className="object-contain shrink-0 my-auto w-20 aspect-[0.83]"
          alt={name}
        />
        <div className="flex gap-4 justify-between items-start h-full min-w-[240px] w-[267px]">
          <div className="flex flex-col justify-center text-xs leading-loose w-[200px]">
            <div className="text-sm leading-loose text-neutral-900">{name}</div>
            <div className="mt-2 text-zinc-500">Color: {color}</div>
            <div className="flex flex-col justify-center px-2 py-1.5 mt-2 w-20 text-center whitespace-nowrap rounded border border-solid border-zinc-500 min-h-[32px] text-neutral-900">
              <div className="flex relative flex-col px-7 w-full aspect-[3.2] max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e927264f311469571f0d8020b4aa3a87257356d3ff53a93e5b0a5c85889a7aa?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b"
                  className="object-cover absolute inset-0 size-full"
                  alt=""
                />
                {quantity}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-end text-sm leading-loose text-right whitespace-nowrap text-neutral-900">
            <div>
              ${price.toFixed(2)}
              </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/451ed0cec6956c1918bc5f10ebfa9ba677d78653762eec954b454eac0e62b919?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b"
              className="object-contain mt-2 w-6 aspect-square"
              alt="Remove item"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const OrderSummary = () => {
  const orderItems = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b12670bf42c2913ac75e0fb07945e77174a06c5c58eba57993696229ce64618d?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b",
      name: "Tray Table",
      color: "Black",
      quantity: 2,
      price: 38.0,
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ec8b373ef61cfa3276cd02cbe7a09ba4cab0ae62671ff5d51a1fca3648f114c8?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b",
      name: "Tray Table",
      color: "Red",
      quantity: 2,
      price: 38.0,
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/67563febf0a3d9783df27eaa3663272f594a87522c5081d7151aa1853dbb7299?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b",
      name: "Table lamp",
      color: "gold",
      quantity: 2,
      price: 39.0,
    },
  ];

  return (
    <div className="flex flex-col px-6 py-4 bg-white rounded-md border border-solid border-zinc-500 min-w-[240px] w-[413px] max-md:px-5">
      <h2 className="text-3xl font-medium tracking-tight leading-none text-neutral-900">
        Order summary
      </h2>
      <div className="flex flex-col mt-4 w-full">
        {orderItems.map((item, index) => (
          <OrderItem key={index} {...item} />
        ))}
        <form className="flex gap-3 items-start mt-6 w-full text-base whitespace-nowrap">
          <div className="flex flex-col flex-1 shrink leading-loose basis-[52px] min-w-[240px] text-zinc-600">
            <input
              type="text"
              placeholder="Input"
              className="flex overflow-hidden gap-2 items-center px-4 w-full bg-white rounded-md border border-solid border-stone-300 min-h-[52px]"
            />
          </div>
          <button
            type="submit"
            className="gap-2 self-stretch px-7 py-3 font-medium tracking-tight leading-7 text-center text-white rounded-lg bg-neutral-900 max-md:px-5"
          >
            Apply
          </button>
        </form>
      </div>
      <div className="flex flex-col mt-4 w-full text-base leading-loose">
        <div className="flex flex-col justify-center py-3.5 w-full border-b border-solid border-b-gray-200">
          <div className="flex gap-10 items-start w-full">
            <div className="flex flex-1 shrink gap-10 w-full basis-0 min-w-[240px]">
              <div className="flex flex-1 gap-2 items-center whitespace-nowrap text-neutral-900">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/cebfcb5e4788737dcb6dc75251bba3ca921ac5d4f139f9f21b869fccfd6aa970?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b"
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  alt=""
                />
                <div className="self-stretch my-auto">JenkateMW</div>
              </div>
              <div className="font-semibold text-right text-emerald-400">
                -$25.00 [Remove]
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center py-3.5 w-full whitespace-nowrap border-b border-solid border-b-gray-200 text-neutral-900">
          <div className="flex gap-10 items-start w-full">
            <div className="flex flex-1 shrink gap-5 justify-between w-full basis-0 min-w-[240px]">
              <div className="gap-2 self-stretch">Shipping</div>
              <div className="font-semibold text-right">Free</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center py-3.5 w-full whitespace-nowrap border-b border-solid border-b-gray-200 text-neutral-900">
          <div className="flex gap-10 items-start w-full">
            <div className="flex flex-1 shrink gap-5 justify-between w-full basis-0 min-w-[240px]">
              <div className="gap-2 self-stretch">Subtotal</div>
              <div className="font-semibold text-right">$99.00</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center py-3.5 w-full text-xl font-medium leading-snug whitespace-nowrap text-neutral-900">
          <div className="flex gap-10 items-start w-full">
            <div className="flex flex-1 shrink gap-5 justify-between w-full basis-0 min-w-[240px]">
              <div className="gap-2 self-stretch">Total</div>
              <div className="text-right">$234.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
