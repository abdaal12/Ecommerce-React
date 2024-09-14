
// import React from "react";

const ShippingForm = () => {
  return (
    <form className="flex flex-col px-6 py-10 mt-6 w-full rounded border border-solid border-zinc-500 max-w-[643px] text-zinc-500 max-md:px-5 max-md:max-w-full">
      <h2 className="text-xl font-medium leading-snug text-neutral-900">
        Shipping Address
      </h2>
      <div className="flex flex-col mt-6 w-full max-w-[595px] max-md:max-w-full">
        <label
          htmlFor="streetAddress"
          className="text-xs font-bold leading-none uppercase"
        >
          Street Address *
        </label>
        <input
          id="streetAddress"
          type="text"
          className="flex overflow-hidden gap-2 items-center px-4 mt-3 w-full text-base leading-loose bg-white rounded-md border border-solid border-zinc-500 min-h-[40px] max-md:max-w-full"
          placeholder="Street Address"
          required
        />
      </div>
      <div className="flex flex-col mt-6 w-full max-w-[595px] max-md:max-w-full">
        <label
          htmlFor="country"
          className="text-xs font-bold leading-none uppercase"
        >
          Country *
        </label>
        <select
          id="country"
          className="flex overflow-hidden gap-2 items-center px-4 mt-3 w-full text-base leading-loose whitespace-nowrap bg-white rounded-md border border-solid border-zinc-500 min-h-[40px] max-md:max-w-full"
          required
        >
          <option value="">Select Country</option>
        </select>
      </div>
      <div className="flex flex-col mt-6 w-full max-w-[595px] max-md:max-w-full">
        <label
          htmlFor="city"
          className="text-xs font-bold leading-none uppercase"
        >
          Town / City *
        </label>
        <input
          id="city"
          type="text"
          className="flex overflow-hidden gap-2 items-center px-4 mt-3 w-full text-base leading-loose bg-white rounded-md border border-solid border-zinc-500 min-h-[40px] max-md:max-w-full"
          placeholder="Town / City"
          required
        />
      </div>
      <div className="flex flex-wrap gap-6 justify-between items-start mt-6 w-full">
        <div className="flex flex-col whitespace-nowrap min-w-[240px] w-[286px]">
          <label
            htmlFor="state"
            className="text-xs font-bold leading-none uppercase"
          >
            State
          </label>
          <input
            id="state"
            type="text"
            className="flex overflow-hidden gap-2 items-center px-4 mt-3 w-full text-base leading-loose bg-white rounded-md border border-solid border-zinc-500 min-h-[40px]"
            placeholder="State"
          />
        </div>
        <div className="flex flex-col min-w-[240px] w-[286px]">
          <label
            htmlFor="zipCode"
            className="text-xs font-bold leading-none uppercase"
          >
            Zip Code
          </label>
          <input
            id="zipCode"
            type="text"
            className="flex overflow-hidden gap-2 items-center px-4 mt-3 w-full text-base leading-loose bg-white rounded-md border border-solid border-zinc-500 min-h-[40px]"
            placeholder="Zip Code"
          />
        </div>
      </div>
      <div className="flex gap-3 items-center self-start mt-6 text-base leading-loose">
        <input
          type="checkbox"
          id="differentBilling"
          className="w-6 h-6 border-2 border-solid border-zinc-500"
        />
        <label htmlFor="differentBilling">
          Use a different billing address (optional)
        </label>
      </div>
    </form>
  );
};

export default ShippingForm;
