


import CheckoutSteps from "./CheckoutSteps";
import ContactForm from "./ContactForm";
import ShippingForm from "./ShippingForm";
import PaymentMethod from "./PaymentMethod";
import OrderSummary from "./OrderSummary";
import Footer from "../Home/footer";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      {/* <Header /> */}
      <main className="flex flex-col items-center px-40 py-20 bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-center max-md:max-w-full">
          <h1 className="text-6xl font-medium tracking-tighter leading-none text-black max-md:text-4xl">
            Check Out
          </h1>
          <CheckoutSteps />
        </div>
        <div className="flex flex-col max-md:max-w-full">
          <div className="flex flex-wrap gap-10 items-start py-20 max-md:max-w-full">
            <div className="flex flex-col min-w-[240px] w-[643px] max-md:max-w-full">
              {/* <ContactForm /> */}
              <ShippingForm />
              <PaymentMethod />
              <Link to="/checkout">
              <button className="gap-2 self-stretch px-10 py-3 mt-6 max-w-full text-base font-medium tracking-tight leading-7 text-center text-white rounded-lg bg-neutral-900 w-[643px] max-md:px-5">
                Place Order
              </button>
              </Link>
            </div>
            <OrderSummary />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
