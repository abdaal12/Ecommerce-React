
// import React from "react";
import Logo from "./Logo";
import SignInForm from "./SignInForm";

function SignInPage() {
  return (
    <div className="overflow-hidden pr-20 bg-white max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
          <div className="flex relative flex-col grow px-16 pt-8 text-2xl font-medium leading-none text-center text-black min-h-[1080px] pb-[1024px] max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/59163d769db21a4b4b9b576adf1b2fc6d2f46013a629c20c4aecff7350bc29fc?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b"
              alt=""
              className="object-cover absolute inset-0 size-3/4"
            />
            <Logo />
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
          <SignInForm />
        </div>
      </div>
    </div>
  );
}

export default SignInPage;



