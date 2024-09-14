
// import React from "react";
import InputField from "./InputField";
import { Link } from "react-router-dom";

function SignInForm() {
  return (
    <div className="flex flex-col mx-auto mt-56 w-full bg-white max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <h2 className="flex items-start w-full text-4xl font-medium tracking-tight leading-none text-neutral-900 max-md:max-w-full">
          Sign In
        </h2>
        <p className="mt-6 text-base leading-loose text-emerald-400 max-md:max-w-full">
          <span className="text-zinc-500">Don't have an accout yet?</span>{" "}
          <Link to="/SignUpPage"><span className="font-semibold text-emerald-400">Sign Up</span></Link>
        </p>
      </div>
      <form className="flex flex-col mt-8 w-full text-base leading-loose max-md:max-w-full">
        <InputField label="Your username or email address" type="text" />
        <InputField label="Password" type="password" showPasswordToggle />
        <div className="flex gap-10 mt-8 w-full max-md:max-w-full">
          <label className="flex flex-1 gap-3 text-zinc-500">
            <input
              type="checkbox"
              className="w-6 h-6 border-2 border-solid border-zinc-500 fill-gray-50 stroke-[1.5px] stroke-zinc-500"
            />
            <span>Remember me</span>
          </label>
          <button type="button" className="font-semibold text-neutral-900">
            Forgot password?
          </button>
        </div>
        <button
          type="submit"
          className="gap-2 self-end px-10 py-2.5 mt-8 max-w-full text-base font-medium tracking-tight leading-7 text-center text-white rounded-lg bg-neutral-900 w-[456px] max-md:px-5"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignInForm;
