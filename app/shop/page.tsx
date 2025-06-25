import React from "react";
import ProductsPage from "../components/sections/products-page";

const Shop = () => {
  return (
    <>
      <div className="mb-10">
        <section
          className="relative bg-cover bg-center bg-no-repeat h-[300px] md:h-[300px] flex items-center justify-center px-6 md:px-20"
          style={{
            backgroundImage: `url('/contact-hero.svg')`, // Replace with your image path
          }}
        >
          <div className="flex flex-col items-center">
            <img src="/logo.svg" alt="logo" />
            <h1 className="text-black text-[48px] font-medium">Shop</h1>
          </div>
        </section>

        <ProductsPage />
      </div>
    </>
  );
};

export default Shop;
