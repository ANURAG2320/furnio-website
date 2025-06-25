import React from "react";

const RangeSection = () => {
  return (
    <>
      <div className="mt-15">
        <div className="">
          <h1 className="text-[32px] font-bold flex justify-center text-[#333333]">
            Browse The Range
          </h1>
          <p className=" mt-2 text-[16px] text-black  flex justify-center text-[#666666]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="px-6 md:px-20 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Image 1 */}
            <div>
              <img
                src="/dining.svg"
                alt="Dining"
                className="w-full h-auto object-cover rounded-lg"
              />
              <p className="mt-4 text-[#333333] font-semibold">Dining</p>
            </div>

            {/* Image 2 */}
            <div>
              <img
                src="/living-room.svg"
                alt="Living"
                className="w-full h-auto object-cover rounded-lg"
              />
              <p className="mt-4 text-[#333333] font-semibold">Living</p>
            </div>

            {/* Image 3 */}
            <div>
              <img
                src="/bedroom.svg"
                alt="Bedroom"
                className="w-full h-auto object-cover rounded-lg"
              />
              <p className="mt-4 text-[#333333] font-semibold">Bedroom</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RangeSection;
