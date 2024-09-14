
// import React from "react";

const PaymentMethod = () => {
  return (
    <div className="flex flex-col px-6 py-10 mt-6 max-w-full rounded border border-solid border-zinc-500 w-[643px] max-md:px-5">
      <h2 className="text-xl font-medium leading-snug text-neutral-900">
        Payment method
      </h2>
      <div className="flex flex-col mt-6 w-full max-w-[595px] max-md:max-w-full">
        <div className="flex flex-col pb-8 w-full border-b border-solid border-b-zinc-500 max-md:max-w-full">
          <div className="flex gap-10 items-center px-4 py-3.5 w-full bg-gray-100 rounded border border-solid border-neutral-900 max-md:max-w-full">
            <div className="flex flex-wrap flex-1 shrink gap-10 justify-between items-center self-stretch my-auto w-full basis-0 min-w-[240px] max-md:max-w-full">
              <div className="flex gap-3 items-center self-stretch my-auto">
                <input
                  type="radio"
                  id="creditCard"
                  name="paymentMethod"
                  className="w-[18px] h-[18px] border border-solid border-neutral-900"
                  checked
                />
                <label
                  htmlFor="creditCard"
                  className="self-stretch my-auto text-base leading-loose text-neutral-900"
                >
                  Pay by Card Credit
                </label>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/10e2dc6f9725ec0745c685d67eee684f220747e7d26bee9ec46af54720a14217?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                alt="Credit card icons"
              />
            </div>
          </div>
          <div className="flex gap-10 items-center px-4 py-3.5 mt-6 w-full text-base leading-loose whitespace-nowrap bg-white rounded border border-solid border-zinc-500 text-neutral-900 max-md:max-w-full">
            <div className="flex flex-1 shrink gap-10 items-center self-stretch my-auto w-full basis-0 min-w-[240px] max-md:max-w-full">
              <div className="flex gap-3 items-center self-stretch my-auto">
                <input
                  type="radio"
                  id="paypal"
                  name="paymentMethod"
                  className="w-[18px] h-[18px] border border-solid border-neutral-900 rounded-full"
                />
                <label htmlFor="paypal" className="self-stretch my-auto">
                  Paypal
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-6 w-full text-zinc-500 max-md:max-w-full">
          <label
            htmlFor="cardNumber"
            className="text-xs font-bold leading-none uppercase"
          >
            Card Number
          </label>
          <input
            id="cardNumber"
            type="text"
            className="flex overflow-hidden gap-2 items-center px-4 mt-3 w-full text-base leading-loose bg-white rounded-md border border-solid border-zinc-500 min-h-[40px] max-md:max-w-full"
            placeholder="1234 1234 1234"
          />
        </div>
        <div className="flex flex-wrap gap-6 justify-between items-start mt-6 w-full text-zinc-500">
          <div className="flex flex-col min-w-[240px] w-[286px]">
            <label
              htmlFor="expirationDate"
              className="text-xs font-bold leading-none uppercase"
            >
              Expiration date
            </label>
            <input
              id="expirationDate"
              type="text"
              className="flex overflow-hidden gap-2 items-center px-4 mt-3 w-full text-base leading-loose whitespace-nowrap bg-white rounded-md border border-solid border-zinc-500 min-h-[40px]"
              placeholder="MM/YY"
            />
          </div>
          <div className="flex flex-col min-w-[240px] w-[286px]">
            <label
              htmlFor="cvc"
              className="text-xs font-bold leading-none uppercase"
            >
              CVC
            </label>
            <input
              id="cvc"
              type="text"
              className="flex overflow-hidden gap-2 items-center px-4 mt-3 w-full text-base leading-loose bg-white rounded-md border border-solid border-zinc-500 min-h-[40px]"
              placeholder="CVC code"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
