
import React from "react";
import ProductCard from "./ProductCard";

const RelatedProducts = () => {
  const products = [
    {
      name: "Loveseat Sofa",
      price: 199.0,
      originalPrice: 400.0,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/35c8643dd38d173e6eafc19326e80f955a845507b2796e74051ecd425d0d5e55?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b",
      isNew: true,
      discount: "-50%",
    },
    {
      name: "Table Lamp",
      price: 24.99,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/679414ed325c70899d2059586141e1cf0ed228e8af50bf189bb1a93675c3f064?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b",
    },
    {
      name: "Beige Table Lamp",
      price: 24.99,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9bb3ccf8af76c04a4468eea786db97a3d12e003af7e682eca50fd95ef4d8cd12?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b",
    },
    {
      name: "Bamboo basket",
      price: 24.99,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/976509d70a5023a37b84df00f6d1b93040bbf3f1d319fdd60937b1eb4d781b71?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b",
    },
    {
      name: "Toasted",
      price: 224.99,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a0fc918745ca01d459dcaffd09e968a991ec41b272d9a3776df3bf931acc01b4?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b",
    },
  ];

  return (
    <section className="flex flex-col items-start pt-10 pb-20 pl-40 w-full bg-white max-md:pl-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-end max-w-full font-medium w-[1120px]">
        <h2 className="text-3xl tracking-tight leading-none text-black">
          You might also like
        </h2>
        <a
          href="#"
          className="flex gap-1 items-center text-base tracking-tight leading-7 border-b border-solid border-b-neutral-900 text-neutral-900"
        >
          <span className="gap-1 self-stretch my-auto">More Products</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/03b8db657b5282033bbfc77990ed2322b9676dac58aa1d0860ab3f845c70fa77?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          />
        </a>
      </div>
      <div className="flex gap-6 items-start mt-12 max-w-full w-[1280px] max-md:mt-10">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
      <div className="flex flex-col mt-12 max-w-full w-[1120px] max-md:mt-10">
        <div className="flex flex-col items-start bg-gray-200 rounded-[80px] max-md:pr-5 max-md:max-w-full">
          <div className="flex shrink-0 max-w-full h-1 bg-neutral-700 rounded-[80px] w-[834px]" />
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
