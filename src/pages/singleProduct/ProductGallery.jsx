
// import React from "react";

const ProductGallery = () => {
  const images = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/25818f34c333d70b4cbc66948e36f42295bb05be1fda36fe5447c6658345b0f8?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b",
      alt: "Product image 1",
      isNew: true,
      discount: "-50%",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d824e8f41c54218999150101637ca078e6a8451b7abb98a9472a1832a1a0b15f?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b",
      alt: "Product image 2",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f599cced0aca6b03e6e0e0b3e3219b6a31ce31e072969fd34439b9ef54e80031?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b",
      alt: "Product image 3",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/140ea511cbc4c3bf4fe5d658cf531ad0e6f8abbfb3616ca04104cfe761eaab41?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b",
      alt: "Product image 4",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3e68e523e10a0b63331dea57469a785de9a543984d5d2694c333f850c089b026?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b",
      alt: "Product image 5",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b50c176c0a8a1a16c200f5e32980b3f538429743ab4aa1a63e79dbae9bb93307?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b",
      alt: "Product image 6",
    },
  ];

  return (
    <div className="flex flex-col min-w-[240px] max-md:max-w-full">
      <div className="flex flex-wrap gap-6 items-start max-md:max-w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex flex-col text-lg font-bold leading-none text-center whitespace-nowrap min-w-[240px] w-[262px]"
          >
            <div className="flex relative flex-col items-start pt-4 pr-14 pb-64 pl-4 w-full aspect-[0.751] max-md:pr-5 max-md:pb-24">
              <img
                loading="lazy"
                src={image.src}
                alt={image.alt}
                className="object-cover absolute inset-0 size-full"
              />
              {image.isNew && (
                <div className="relative gap-2 self-stretch px-5 py-2 bg-white rounded min-h-[34px] text-neutral-900">
                  NEW
                </div>
              )}
              {image.discount && (
                <div className="relative gap-2 self-stretch px-5 py-2 mt-2.5 mb-0 text-white bg-emerald-400 rounded min-h-[34px] max-md:mb-2.5">
                  {image.discount}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
