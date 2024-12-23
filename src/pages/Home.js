import React from "react";
import HeroSection from "../components/HeroSection";  // Import the new HeroSection component
import ProductsSection from '../components/ProductsSection';
import DailyDeals from "../components/DailyDeals";
import PopularSearch from "../components/PopularSearch";
import BannerSection from "../components/BannerSection";
import OfficialStores from "../components/OfficialStores";
import BlogSection from "../components/BlogSection";
import CategoriesSection from "../components/CategoriesSection";

function Home() {
  return (
    <>
      <div>
       <HeroSection />  {/* Include HeroSection component */}

       <CategoriesSection />

       {/* Daily Deals Section */}
       <DailyDeals />

       {/* Products Section */}
       <ProductsSection />

       {/* Other sections */} 
       <PopularSearch />

       {/* Banner Section */}
       <BannerSection />

       {/* Products Section */}
       <ProductsSection />

       {/* Products Section */}
       <ProductsSection />

       {/* Official Stores */}
       <OfficialStores />;

       {/* Blog Section */}
       <BlogSection />;
      </div>
      
    </>
  );
}

export default Home;
