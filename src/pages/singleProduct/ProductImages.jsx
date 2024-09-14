
import React from "react";

function ProductImages() {
  const images = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c65f3f67a5e741a6d27c9e7db0e839b5a5e948225e35341c6b19813692ea0c17?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b",
      labels: [
        { text: "NEW", className: "bg-white text-neutral-900" },
        { text: "-50%", className: "text-white bg-emerald-400" },
      ],
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/140ea511cbc4c3bf4fe5d658cf531ad0e6f8abbfb3616ca04104cfe761eaab41?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/cb742284485fcd6361cdf916be211d5157a72ccffb01deab53f16e0a54f0ce49?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/75f6ec58d5f9d76666e256d7fcb04f038499fdef80176dbf5f49d914388710db?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b",
    },
  ];

  return (
    <div className="flex flex-col min-w-[240px] max-md:max-w-full">
      <div className="flex relative gap-6 items-start text-lg font-bold leading-none text-center whitespace-nowrap max-md:max-w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex z-0 flex-col min-w-[240px] w-[262px]"
          >
            <div className="flex relative flex-col items-start pt-4 pr-14 pb-64 pl-4 w-full aspect-[0.751] max-md:pr-5 max-md:pb-24">
              <img
                loading="lazy"
                src={image.src}
                alt=""
                className="object-cover absolute inset-0 size-full"
              />
              {image.labels &&
                image.labels.map((label, labelIndex) => (
                  <div
                    key={labelIndex}
                    className={`relative gap-2 self-stretch px-5 py-2 ${
                      labelIndex > 0 ? "mt-2.5" : ""
                    } rounded min-h-[34px] ${label.className}`}
                  >
                    {label.text}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductImages;
