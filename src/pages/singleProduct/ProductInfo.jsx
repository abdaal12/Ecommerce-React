
import React from "react";

const ProductInfo = () => {
  return (
    <div className="flex flex-col py-2 w-full max-md:max-w-full">
      <div className="flex flex-col pb-2 w-full text-lg font-medium tracking-tight leading-8 border-b border-solid border-b-zinc-500 text-neutral-900 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
          <div>Additional Info</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/76b116e1a6fe42edb0596fbfc2f134333f2253ad952f5d28d693a14f46c1f891?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b"
            alt=""
            className="object-contain shrink-0 my-auto w-6 aspect-square"
          />
        </div>
      </div>
      <div className="flex flex-col py-2 w-full max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <h3 className="text-sm font-semibold leading-loose text-zinc-500">
            Details
          </h3>
          <p className="mt-2 text-xs leading-5 text-neutral-900 max-md:max-w-full">
            You can use the removable tray for serving. The design makes it easy
            to put the tray back after use since you place it directly on the
            table frame without having to fit it into any holes.
          </p>
        </div>
        <div className="flex flex-col mt-4 w-full max-md:max-w-full">
          <h3 className="text-sm font-semibold leading-loose text-zinc-500">
            Packaging
          </h3>
          <p className="mt-2 text-xs leading-5 text-neutral-900 max-md:max-w-full">
            Width: 20 " Height: 1 ½ " Length: 21 ½ "<br />
            Weight: 7 lb 8 oz
            <br />
            Package(s): 1
          </p>
        </div>
      </div>
      <div className="flex flex-col pb-2 w-full text-lg font-medium tracking-tight leading-8 whitespace-nowrap border-b border-solid border-b-zinc-500 text-neutral-900 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
          <div>Questions</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/76b116e1a6fe42edb0596fbfc2f134333f2253ad952f5d28d693a14f46c1f891?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b"
            alt=""
            className="object-contain shrink-0 my-auto w-6 aspect-square"
          />
        </div>
      </div>
      <div className="flex flex-col pb-2 w-full text-lg font-medium tracking-tight leading-8 border-b border-solid border-b-zinc-500 text-neutral-900 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
          <div>Reviews (11)</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/76b116e1a6fe42edb0596fbfc2f134333f2253ad952f5d28d693a14f46c1f891?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b"
            alt=""
            className="object-contain shrink-0 my-auto w-6 aspect-square"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
