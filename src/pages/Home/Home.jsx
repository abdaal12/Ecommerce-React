import React from 'react';
import ImageSlider from './imageSlider';
import ProductSection from './ProductSection';
import NewProduct from './newProduct';
import FeaturesSection from './feature';
import NewsLatter from './newsLatter';
import Footer from './footer';
const Home = () => {
  return (
    <div className="min-h-screen ">
      {/* Header */}
   

      {/* Hero Section */}
      <div>
      <ImageSlider />
      </div>

      {/* Text Section */}
      <section className="text-center mt-10 flex justify-center gap-11 items-stretch">
        <h1 className="text-6xl font-bold w-1/3">Simply Unique<span className='text-gray-500'>/</span> Simply Better<span className='text-gray-500'>.</span> </h1>
        <p className="mt-4 text-lg max-w-sm text-justify">
          <strong>3legant</strong> is a gift & decorations store based in HCMC, Vietnam. Est since 2019.
        </p>
      </section>
      <div>
      {/* Other Sections */}
      <ProductSection />
    </div>
    <div>
      <NewProduct/>
    </div>
    <div>
      <FeaturesSection/>
    </div>
    <div>
      <NewsLatter/>
    </div>
    <Footer/>
    </div>
  );
};

export default Home;
