"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function ExploreSection() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
  });

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-20 py-12">
      {/* Text Div */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-600 mb-4">
          50+ Beautiful rooms <br />
          inspiration
        </h2>
        <p className="text-gray-600 mb-6">
          Discover our premium collection of contemporary furniture designed to
          bring comfort and elegance to your home.
        </p>
        <button className=" mt-10 px-10 py-4 bg-[#B88E2F] text-white rounded-md border-2 border-[#B88E2F] hover:bg-white hover:text-[#B88E2F] hover:border-2 border-[#B88E2F] transition">
          Explore now
        </button>
      </div>

      {/* Slider Div */}
      <div className="md:w-1/2">
        <div ref={sliderRef} className="keen-slider rounded-lg overflow-hidden">
          <div className="keen-slider__slide">
            <img
              src="/Rectangle 24.svg"
              alt="Furniture 1"
              className="w-auto h-64 object-cover"
            />
          </div>
          <div className="keen-slider__slide">
            <img
              src="/Rectangle 25.svg"
              alt="Furniture 2"
              className="w-auto h-64 object-cover"
            />
          </div>
          <div className="keen-slider__slide">
            <img
              src="/Rectangle 26.svg"
              alt="Furniture 3"
              className="w-auto h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
