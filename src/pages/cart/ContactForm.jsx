

// import React from "react";
import InputField from "../compo/InputField";
import Button from "../compo/Button";
import { Link } from "react-router-dom";

const ContactPage = () => {
  const inputFields = [
    { label: "First Name", type: "text" },
    { label: "Last Name", type: "text" },
    { label: "Phone Number", type: "tel" },
    { label: "Email Address", type: "email" },
  ];

  return (
    <main className="overflow-hidden pr-20 bg-white max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col">
        <section className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
          <div className="flex relative flex-col grow px-16 pt-8 text-2xl font-medium leading-none text-center text-black min-h-[1080px] pb-[1024px] max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/59163d769db21a4b4b9b576adf1b2fc6d2f46013a629c20c4aecff7350bc29fc?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b"
              alt=""
              className="object-cover absolute inset-0 size-full"
            />
            Contact Us<span className="text-zinc-500">.</span>
          </div>
        </section>
        <section className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch m-auto w-full bg-white max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col w-full max-md:max-w-full">
              <h1 className="flex items-start w-full text-4xl font-medium tracking-tight leading-none text-neutral-900 max-md:max-w-full">
                <div className="flex-1 shrink gap-4 w-full min-w-[240px] max-md:max-w-full">
                  Get in Touch
                </div>
              </h1>
              <p className="mt-6 text-base leading-loose text-emerald-400 max-md:max-w-full">
                <span className="text-zinc-500">Need help? </span>
                <Link to="/support"><span className="font-semibold text-emerald-400">Contact Support</span></Link>
              </p>
            </div>
            <form className="flex flex-col mt-8 w-full text-base leading-loose text-zinc-500 max-md:max-w-full">
              <div className="flex flex-col w-full max-md:max-w-full">
                {inputFields.map((field, index) => (
                  <InputField key={index} {...field} />
                ))}
              </div>
              <Button text="Submit" />
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ContactPage;
