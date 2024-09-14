
// import React from "react";
import Button from "./Button";

function AddProductCard() {
  return (
    <article className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow items-start pb-6 w-full bg-white rounded-2xl shadow-[6px_6px_54px_rgba(0,0,0,0.05)] max-md:mt-8">
        <div className="flex z-10 flex-col self-stretch w-full">
          <div className="flex relative flex-col justify-center px-3.5 py-36 w-full rounded-none aspect-[1.139] max-md:py-24">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bee66f2c00e45f1ca6c260ff13812f7f8e5c589b65ac71ee432c92f713535af0?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b"
              alt="Product placeholder"
              className="object-cover absolute inset-0 size-full"
            />
            <div className="flex relative gap-5 justify-between -mb-7 max-md:mb-2.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a162dc0e93cfcf920bf7fd984b7c29efb66e496e6e38ee4bf61b3d08c363d438?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b"
                alt="Like"
                className="object-contain shrink-0 aspect-square w-[41px]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d63a009d84fbb8710fa7432e19ecd5ec2024b9943fcba1537bded45d030d34f5?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b"
                alt="Share"
                className="object-contain shrink-0 aspect-square w-[41px]"
              />
            </div>
          </div>
          <div className="flex gap-5 justify-between self-center mt-6 max-w-full text-lg font-bold leading-none whitespace-nowrap text-neutral-800 w-[321px]">
            <div className="self-start">Table</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ec922b727898e2ce17f025279a28e59838689653a09946d540f62a88dedd5a4?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b"
              alt="Add to cart"
              className="object-contain shrink-0 w-11 aspect-square"
            />
          </div>
        </div>
        <div className="mt-6 ml-6 text-base font-bold leading-none text-neutral-900 max-md:ml-2.5">
          $120.00
        </div>
        <div className="flex overflow-hidden z-10 flex-col justify-center mt-0 w-full text-3xl font-semibold tracking-wide leading-none text-center bg-white shadow-sm min-h-[113px] min-w-[161px] rounded-[32px] text-neutral-900">
          <button className="flex flex-1 gap-6 justify-center items-center py-8 pr-10 pl-8 size-full max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/be191b8e962c38237e5acee0b9ef5e6a16d0209ff69aa45a4fc5e6ac888e319e?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto aspect-[1.23] w-[59px]"
            />
            <span className="self-stretch my-auto">Add New Product</span>
          </button>
        </div>
        <div className="flex flex-col py-px mt-0 ml-6 max-w-full text-sm w-[126px] max-md:ml-2.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/643f4d09786c2ad0ce66c5154de844048d13c6572825ca2be0a92be7c4d37811?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b"
            alt="Filled star"
            className="object-contain z-10 self-center w-4 aspect-[1.14]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c471a0e903ca96b1b044c90efd8bc81150f5f8e07c694d6779cb1db0fb736157?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b"
            alt="Empty star"
            className="object-contain self-center -mt-3.5 ml-4 w-4 bg-blend-normal aspect-[1.14]"
          />
          <div className="z-10 self-end -mt-4 font-semibold tracking-normal text-black bg-blend-normal">
            (131)
          </div>
          <Button className="mt-5 bg-indigo-100 text-neutral-800">
            Edit Product
          </Button>
        </div>
      </div>
    </article>
  );
}

export default AddProductCard;
