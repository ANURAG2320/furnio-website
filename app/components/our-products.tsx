import Link from "next/link";
import React from "react";

const OurProduct = () => {
  return (
    <>
      <div className="mt-5">
        <div className="text-[#3A3A3A] font-bold text-[32px] flex justify-center ">
          Our Product
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-5 px-10">
          {/* Item */}

          <div className="text-center ">
            <img
              src="/Images.svg"
              alt="Product 1"
              className="w-full h-64 object-cover rounded-lg mb-4 "
            />
            <h3 className="text-lg font-semibold text-gray-800">Syltherine</h3>
            <p className="text-sm text-gray-600 mt-1">
              Comfortable and stylish chair
            </p>
            <p className="text-base font-semibold text-black mt-2">₹3,499</p>
          </div>

          <div className="text-center">
            <img
              src="/Images (1).svg"
              alt="Product 2"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Wooden Chair
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Comfortable and stylish chair
            </p>
            <p className="text-base font-semibold text-black mt-2">₹3,499</p>
          </div>

          <div className="text-center">
            <img
              src="/Images (2).svg"
              alt="Product 3"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Wooden Chair
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Comfortable and stylish chair
            </p>
            <p className="text-base font-semibold text-black mt-2">₹3,499</p>
          </div>

          <div className="text-center">
            <img
              src="/Images (3).svg"
              alt="Product 4"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Wooden Chair
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Comfortable and stylish chair
            </p>
            <p className="text-base font-semibold text-black mt-2">₹3,499</p>
          </div>

          <div className="text-center">
            <img
              src="/Images (4).svg"
              alt="Product 5"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Wooden Chair
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Comfortable and stylish chair
            </p>
            <p className="text-base font-semibold text-black mt-2">₹3,499</p>
          </div>

          <div className="text-center">
            <img
              src="/image 7.svg"
              alt="Product 6"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Wooden Chair
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Comfortable and stylish chair
            </p>
            <p className="text-base font-semibold text-black mt-2">₹3,499</p>
          </div>

          <div className="text-center">
            <img
              src="/Images (1).svg"
              alt="Product 7"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Wooden Chair
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Comfortable and stylish chair
            </p>
            <p className="text-base font-semibold text-black mt-2">₹3,499</p>
          </div>

          <div className="text-center">
            <img
              src="/Images (3).svg"
              alt="Product 8"
              className="w-80 h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Wooden Chair
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Comfortable and stylish chair
            </p>
            <p className="text-base font-semibold text-black mt-2">₹3,499</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center p-10">
        <button className=" px-10 py-4  border-2 border-[#B88E2F] text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white ">
        <Link href="/shop">Show More</Link>  
        </button>
      </div>
    </>
  );
};

export default OurProduct;
