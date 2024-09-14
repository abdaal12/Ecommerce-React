
// import React from "react";

const CartProgress = () => {
  const steps = [
    { number: 1, text: "Shopping cart", active: true },
    { number: 2, text: "Checkout details", active: false },
    { number: 3, text: "Order complete", active: false },
  ];

  return (
    <div className="flex flex-wrap gap-8 items-start mt-10 text-base font-semibold max-md:max-w-full">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`flex flex-col pb-7 w-64 leading-loose ${
            step.active ? "border-b-2 border-solid border-b-neutral-900" : ""
          } min-w-[240px]`}
        >
          <div className="flex gap-4 items-center w-full">
            <div
              className={`overflow-hidden self-stretch px-4 my-auto text-center text-gray-50 whitespace-nowrap ${
                step.active ? "bg-zinc-800" : "bg-gray-400"
              } h-[42px] rounded-[40px] w-[42px]`}
            >
              {step.number}
            </div>
            <div
              className={`flex-1 shrink self-stretch my-auto basis-[34px] ${
                step.active ? "text-zinc-800" : "text-gray-400"
              }`}
            >
              {step.text}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartProgress;
