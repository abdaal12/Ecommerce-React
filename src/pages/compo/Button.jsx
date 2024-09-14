
// import React from "react";

function Button({ text }) {
  return (
    <button className="gap-2 self-end px-10 py-2.5 mt-8 max-w-full text-base font-medium tracking-tight leading-7 text-center text-white rounded-lg bg-neutral-900 w-[456px] max-md:px-5">
      {text}
    </button>
  );
}

export default Button;
