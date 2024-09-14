
// import React from "react";

const CheckoutSteps = () => {
  const steps = [
    { number: 1, title: "Shopping cart", status: "completed" },
    { number: 2, title: "Checkout details", status: "current" },
    { number: 3, title: "Order complete", status: "upcoming" },
  ];

  return (
    <div className="flex flex-wrap gap-8 items-start mt-10 max-md:max-w-full">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`flex flex-col pb-7 w-64 min-w-[240px] ${
            step.status === "completed"
              ? "border-b-2 border-solid border-b-emerald-400"
              : step.status === "current"
              ? "border-b-2 border-solid border-b-neutral-900"
              : ""
          }`}
        >
          <div className="flex gap-4 items-center w-full">
            <div
              className={`flex overflow-hidden flex-col justify-center items-center self-stretch px-2 my-auto w-10 h-10 rounded-[40px] ${
                step.status === "completed"
                  ? "bg-emerald-400"
                  : step.status === "current"
                  ? "bg-zinc-800 text-gray-50"
                  : "bg-gray-400 text-gray-50"
              }`}
            >
              {step.status === "completed" ? (
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f110d1d166547dc7ed8557117cb2fe56cf08ac6befdfcf047b9693231dbc51f?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b"
                  className="object-contain w-6 aspect-square"
                  alt=""
                />
              ) : (
                step.number
              )}
            </div>
            <div
              className={`flex-1 shrink self-stretch my-auto text-base font-semibold leading-loose ${
                step.status === "completed"
                  ? "text-emerald-400"
                  : step.status === "current"
                  ? "text-zinc-800"
                  : "text-gray-400"
              }`}
            >
              {step.title}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CheckoutSteps;
