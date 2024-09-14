
// import Cart from "./CartComponents/Cart";
import { Link } from "react-router-dom";



const ProductDetails = () => {
 

  return (
    <div className="flex flex-col min-w-[240px] w-[508px] max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[508px]">
        <div className="flex flex-col pb-4 w-full border-b border-solid border-b-gray-200 max-w-[508px] max-md:max-w-full">
          <div className="flex gap-2.5 items-center self-start text-xs leading-loose text-neutral-900">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac91ee13fa60a089929cfb3c84d88c4c7e44993d53054e7d2e3c0f8ca3250815?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b"
              alt="Product rating"
              className="object-contain shrink-0 self-stretch my-auto aspect-[5.49] w-[88px]"
            />
            <div className="self-stretch my-auto">11 Reviews</div>
          </div>
          <h1 className="mt-4 text-4xl font-medium tracking-tight leading-none text-neutral-900">
            Tray Table
          </h1>
          <p className="mt-4 text-base leading-7 text-zinc-500 max-md:max-w-full">
            Buy one or buy a few and make every space where you sit more
            convenient. Light and easy to move around with removable tray top,
            handy for serving snacks.
          </p>
          <div className="flex flex-wrap gap-3 items-center mt-4 w-full font-medium whitespace-nowrap">
            <div className="self-stretch my-auto text-3xl tracking-tight leading-none text-neutral-900">
              $199.00
            </div>
            <div className="self-stretch my-auto text-xl leading-snug text-zinc-500">
              $400.00
            </div>
          </div>
        </div>
        <div className="flex flex-col self-start py-4">
          <div className="flex flex-col self-start">
            <div className="text-base font-semibold leading-loose text-zinc-500">
              Measurements
            </div>
            <div className="mt-2 text-xl leading-relaxed text-black">
              17 1/2x20 5/8 "
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <div className="flex flex-col self-start">
              <div className="flex gap-1 items-center text-base font-semibold leading-loose text-zinc-500">
                <div className="self-stretch my-auto">Choose Color</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b517caa27200ff2e1605ecbc45d9efaa6e447c40a37ed0fb6dc8397f8b2fabc?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                />
              </div>
              <div className="mt-2 text-xl leading-relaxed text-black">
                Black
              </div>
            </div>
            <div className="flex gap-4 items-start mt-4">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ea02fcd8b914848fd86cb6fbe4e888498fba88acb06e25579055fa69729d3fd?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b"
                alt="Color option 1"
                className="object-contain shrink-0 aspect-square w-[72px]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbcc2d89ee0a82b29dded89d7d72a2381f136585b720901601995a6dcee2f297?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b"
                alt="Color option 2"
                className="object-contain shrink-0 aspect-[0.99] w-[71px]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c131a6612156d7b6def60bea3026e471fc4af4e4ec0cb755efda97981fe762b4?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b"
                alt="Color option 3"
                className="object-contain shrink-0 aspect-[0.99] w-[71px]"
              />
              <div className="flex shrink-0 h-[72px] w-[72px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-6 w-full max-w-[508px] max-md:max-w-full">
        <div className="flex flex-wrap gap-6 items-start max-md:max-w-full">
          <div className="flex flex-col justify-center px-4 py-3 rounded-lg bg-neutral-100 min-h-[52px] w-[127px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/70864e0c5d6d10a4ff7fc7a61798660f8d7a459af9bc4be69e3c9f66a53e51f8?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b"
              alt="Quantity selector"
              className="object-contain aspect-[3.39] w-[95px]"
            />
          </div>
          <button className="flex gap-2 justify-center items-center px-10 py-2.5 text-lg font-medium tracking-tight leading-8 text-center whitespace-nowrap rounded-lg border border-solid border-neutral-900 min-w-[240px] text-neutral-900 w-[357px] max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/971c541026cb956c6d84be609c473d5cf4b6dc2c36690cdf7672a68df218adc7?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
            <span className="self-stretch my-auto">Wishlist</span>
          </button>
        </div>
        <Link to="/cart">
          <button
            className="gap-2 self-stretch px-10 py-2.5 mt-4 w-full text-lg font-medium tracking-tight leading-8 text-center text-white rounded-lg bg-neutral-900 max-md:px-5" >

            Add to Cart
          </button>
        </Link>
      </div>
      <div className="flex flex-col items-start py-4 w-full text-xs leading-loose max-w-[508px] max-md:max-w-full">
        <div className="flex gap-10 items-start whitespace-nowrap">
          <div className="text-zinc-500">SKU</div>
          <div className="text-neutral-900">1117</div>
        </div>
        <div className="flex gap-10 items-start mt-2">
          <div className="text-zinc-500">CATEGORY</div>
          <div className="text-neutral-900">Living Room, Bedroom</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
