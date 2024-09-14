
// import React from "react";

function CheckboxField() {
  return (
    <div className="flex gap-3 items-center mt-8 w-full text-neutral-900 max-md:max-w-full">
      <input
        type="checkbox"
        id="agree-terms"
        className="shrink-0 self-stretch my-auto w-6 h-6 border-2 border-solid border-zinc-500 fill-gray-50 stroke-[1.5px] stroke-zinc-500"
      />
      <label
        htmlFor="agree-terms"
        className="flex-1 shrink self-stretch my-auto basis-0"
      >
        I agree with{" "}
        <span className="font-semibold text-neutral-900">Privacy Policy</span>{" "}
        and <span className="font-semibold text-neutral-900">Terms of Use</span>
      </label>
    </div>
  );
}

export default CheckboxField;
