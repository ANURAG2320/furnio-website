import React from "react";

const page = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[300px] md:h-[300px] flex items-center justify-center px-6 md:px-20"
        style={{
          backgroundImage: `url('/contact-hero.svg')`, // Replace with your image path
        }}
      >
        <div className="flex flex-col items-center">
          <img src="/logo.svg" alt="logo" />
          <h1 className="text-black text-[48px] font-medium">Contact</h1>
        </div>
      </section>

      <div className="p-10 text-center ">
        <h1 className="text-[36px] font-semibold text-black">
          Get In Touch With Us
        </h1>
        <p className="text-black">
          For More Information About Our Product & Services. <br />
          Please Feel Free To Drop Us An Email. Our Staff Always Be There To
          Help You Out. Do Not Hesitate!
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-10 p-6 md:p-12">
        {/* Left Section: Address Info */}
        <div className="md:w-1/2 space-y-10 text-black">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Our Address</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              236 5th SE Avenue,
              <br />
              New York NY10000, <br />
              United States
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Phone</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Mobile: +(84) 546-6789 <br />
              Hotline: +(84) 456-6789
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold  mb-2">Working Time</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Monday - Friday: 9:00 - 22:00 <br />
              Saturday - Sunday: 9:00 - 21:00
            </p>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="md:w-1/2">
          <form className="space-y-4 text-black ">
            <h2 className="text-sm font-sm mb-4">Your Name</h2>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
            />
            <h2 className="text-sm font-sm mb-4">Email Address</h2>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
            />
            <h2 className="text-sm font-sm mb-4">Subject</h2>

            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
            />
            <h2 className="text-sm font-sm mb-4">Message</h2>

            <textarea
              placeholder="Message"
              rows={4}
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
            ></textarea>
            <button
              type="submit"
              className=" mt-10 px-10 py-4 bg-[#B88E2F] text-white rounded-md border-2 border-[#B88E2F] hover:bg-white hover:text-[#B88E2F] hover:border-2 border-[#B88E2F] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
