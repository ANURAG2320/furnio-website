import React from "react";

const ShareSetup = () => {
  return (
    <>
      <div className="p-20">
        <div className="text-center">
          <p className="text-[#3A3A3A] font-semiblod text-[20px]">
            Share your setup with
          </p>
          <h1 className="text-[#3A3A3A] font-bold text-[40px]">
            #FuniroFurniture
          </h1>
        </div>
        <section
          className="relative bg-cover bg-center bg-no-repeat h-[500px] md:h-[600px] flex items-top justify-center px-6 md:px-20"
          style={{
            backgroundImage: `url('/share-with-us.svg')`, // Replace with your image path
          }}
        ></section>
      </div>
    </>
  );
};

export default ShareSetup;
