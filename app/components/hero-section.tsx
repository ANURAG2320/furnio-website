import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div>
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[500px] md:h-[600px] flex items-center justify-end px-6 md:px-20"
        style={{
          backgroundImage: `url('/hero-section.svg')`, // Replace with your image path
        }}
      >
        {/* Right-aligned content */}
        <div className="relative z-10 text-black max-w-xl text-">
          <p className="text-sm uppercase tracking-wider mb-2 text-black">
            New Arrival
          </p>
          <h1 className="text-[52px] py-10 text-[#B88E2F] leading-snug md:text-5xl font-bold mb-4 leading-tight">
            Discover Our <br /> New Collection{" "}
          </h1>
          <p className="text-base md:text-lg text-black mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.{" "}
          </p>
          <button className=" mt-10 px-10 py-4 bg-[#B88E2F] text-white rounded-md border-2 border-[#B88E2F] hover:bg-white hover:text-[#B88E2F] hover:border-2 border-[#B88E2F] transition">
           <Link href="/shop">Shop Now</Link> 
          </button>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
