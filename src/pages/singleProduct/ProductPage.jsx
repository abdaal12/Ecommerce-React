
// import React from "react";
// import Header from "../layout/Header";
import Breadcrumb from "./Breadcrumb";
import ProductGallery from "./ProductGallery";
import ProductDetails from "./ProductDetails";
import ProductInfo from "./ProductInfo";
import RelatedProducts from "./RelatedProducts";
import Newsletter from "../Home/newsLatter";
import Footer from "../Home/footer";

const ProductPage = () => {
  return (
    <div className="flex overflow-hidden flex-col">
      {/* <Header /> */}
      <main>
        <div className="flex flex-col pt-4 pb-10 w-full bg-white max-md:max-w-full">
          <Breadcrumb />
          <div className="flex flex-wrap gap-10 items-start px-40 mt-4 max-md:px-5 max-md:max-w-full">
            <ProductGallery />
            <ProductDetails />
          </div>
          <ProductInfo />
        </div>
        <RelatedProducts />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
