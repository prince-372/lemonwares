import React, { useState } from "react";
import { Correct } from "./Icons";

const Ready = () => {
  // toggale
  const [open, setopen] = useState(false);

  function handle() {
    setopen(!open);
  }

  const [data, setdata] = useState("tab1");
  function tabs(tab) {
    setdata(tab);
  }
  const box = [
    {
      Heading: "Stater",
      Price: "$2.80",
      Rate: "$12.80",
    },
    {
      Heading: "Standard",
      Price: "$4.20",
      Rate: "$14.80",
    },
    {
      Heading: "Suprem",
      Price: "$7.00",
      Rate: "$17.80",
    },
  ];
  return (
    <div id="account" className=" max-w-[1200px] px-3 mx-auto overflow-hidden">
      <h2 data-aos="fade-right" className=" text-[30px] sm:text-[50px] font-semibold leading-[42px] sm:leading-[60px] text-center text-black max-w-[650px] mx-auto font-[Poppins]">
        Ready to get started with Lemon Wares?
      </h2>
      <p data-aos="fade-left" className=" text-[25px] font-normal leading-[25px] font-[Poppins] text-center text-black pt-3 sm:pt-9">
        Choose the package that suits you
      </p>
      <div data-aos="fade-right" className=" flex justify-center gap-3 lg:gap-8 items-center pt-4 sm:pt-14">
        <p className="text-[25px] font-normal leading-[25px] font-[Poppins] text-black">
          Monthly
        </p>
        <span
          onClick={handle}
          className={`flex w-[93px] h-[50px] rounded-full bg-[#B00000] sm:ml-8 sm:mr-7 relative  items-center cursor-pointer ${ open ? " bg-black" : ""}`}
        >
          <span
            className={`flex w-[30px] h-[30px] bg-white rounded-full absolute  duration-300 ${
              open ? "left-[54px]" : "left-2"
            }`}
          ></span>
        </span>
        <p className="text-[25px] font-normal leading-[25px] font-[Poppins] text-black">
          Yearly
        </p>
        <p className=" hidden sm:block text-[10px] font-[Poppins] font-medium text-black leading-[9px] max-w-[87px] max-h-[24px] rounded-lg bg-[#FFE87A] py-[7px] px-[8px]">
          20% discount
        </p>
      </div>
      <div data-aos="fade-left" className="  flex justify-center  relative pt-4 sm:pt-20 max-w-[856px] mx-auto w-full cursor-pointer after:absolute after:w-full after:left-0 after:h-[4px] after:bottom-[-6px] after:bg-[#C4C4C4] ">
        <div
          className={`${
            data === "tab1" &&
            "  relative before:h-[4px] z-10 cursor-pointer before:rounded-[10px] before:bg-[#B00000] before:absolute before:bottom-[-16%] before:w-full before:left-0"
          } flex w-1/2 justify-center`}
        >
          <p
            onClick={() => tabs("tab1")}
            className={` text-[30px] font-semibold leading-10 font-[Poppins] text-black`}
          >
            Basic
          </p>
        </div>
        <div
          className={`${
            data === "tab2" &&
            "  relative before:h-[4px] z-10 cursor-pointer before:rounded-[10px] before:bg-[#B00000] before:absolute before:bottom-[-16%] before:w-full before:left-0"
          } flex w-1/2 justify-center`}
        >
          <p
            onClick={() => tabs("tab2")}
            className={` text-[30px] font-semibold leading-10 font-[Poppins] text-black`}
          >
            Premium
          </p>
        </div>
      </div>
      {data === "tab1" && (
        <div data-aos="flip-left" className="grid sm:grid-cols-2 xl:grid-cols-3 mt-5 sm:mt-10 md:mt-20 lg:mt-[100px] xl:mt-[126px] sm:ml-11 sm:mr-12 gap-8 sm:gap-10 xl:gap-5">
          {box.map((boxitem, index) => (
            <div key={index} className="flex w-full justify-center">
              <div className=" max-w-[299px] max-h-[716px] rounded-2xl border-[1.5px] border-[#C4C4C4] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] py-8 px-6">
                <p className=" text-[28px] font-semibold font-[Poppins] text-black leading-[25px]">
                  {boxitem.Heading}
                </p>
                <p className=" text-xs font-normal leading-[18px] font-[Poppins] teat-black max-w-[237px] pt-3">
                  with all your customers via all conversation channels in one
                  central dashboard.
                </p>
                <p className=" text-[42px] font-semibold leading-8 font-[Poppins] teat-black pt-7">
                  {boxitem.Price}
                </p>
                <p className=" text-sm font-light leading-[14px] font-[Poppins] text-black pt-2">
                { open ? "per year":"per month"}
                </p>
                <button className=" text-sm font-semibold leading-8 font-[Poppins] text-black border-[2px] border-black  rounded-xl py-[9px] px-[60px] mt-8  hover:border-transparent hover:border-[2px] p-3 relative  after:-z-20 after:absolute after:h-1 after:w-1  after:bg-[#b00000]  hover:text-white after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700">
                  Choose this Plan
                </button>
                <p className=" text-base font-bold leading-6 font-[Inter] text-[#808080] ">
                  <span className=" flex pt-8 gap-6">
                    <Correct />
                    2GB SSD
                  </span>
                  <span className=" flex pt-3 gap-6">
                    <Correct />
                    10GB Bandwidth
                  </span>
                  <span className=" flex pt-3 gap-6">
                    <Correct />
                    15 Email Accounts
                  </span>
                  <span className=" flex pt-3 gap-6">
                    <Correct />
                    Unlimited Database
                  </span>
                  <span className=" flex pt-3 gap-6">
                    <Correct />4 Subdomains
                  </span>
                  <span className=" flex pt-3 gap-6">
                    <Correct />1 Parked Domain
                  </span>
                  <span className=" flex pt-3 gap-6">
                    <Correct />2 Websites
                  </span>
                  <span className=" flex pt-3 gap-6">
                    <Correct />
                    Free SSL
                  </span>
                  <span className=" flex pt-3 gap-6">
                    <Correct />
                    Softaculous
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      {data === "tab2" && (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 mt-5 sm:mt-10 md:mt-20 lg:mt-[100px] xl:mt-[126px] sm:ml-11 sm:mr-12 gap-8 sm:gap-10 xl:gap-5">
          {box.map((boxitem, index) => (
            <div key={index} className="flex w-full justify-center ">
              <div className=" max-w-[299px] max-h-[716px] rounded-2xl border-[1.5px] border-[#C4C4C4] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] py-8 px-6">
                <p className=" text-[28px] font-semibold font-[Poppins] text-black leading-[25px]">
                  {boxitem.Heading}
                </p>
                <p className=" text-xs font-normal leading-[18px] font-[Poppins] teat-black max-w-[237px] pt-3">
                  with all your customers via all conversation channels in one
                  central dashboard.
                </p>
                <p className=" text-[42px] font-semibold leading-8 font-[Poppins] teat-black pt-7">
                  {boxitem.Rate}
                </p>
                <p className=" text-sm font-light leading-[14px] font-[Poppins] text-black pt-2">
                  { open ? "per year":"per month"}
                </p>
                <button className=" text-sm font-semibold leading-8 font-[Poppins] text-black border-[2px] border-black  rounded-xl py-[9px] px-[60px] mt-8  hover:border-transparent hover:border-[2px] p-3 relative  after:-z-20 after:absolute after:h-1 after:w-1  after:bg-[#b00000]  hover:text-white after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700">
                  Choose this Plan
                </button>
                <p className=" text-base font-bold leading-6 font-[Inter] text-[#808080] ">
                  <span className=" flex pt-8 gap-6">
                    <Correct />
                    2GB SSD
                  </span>
                  <span className=" flex pt-3 gap-6">
                    <Correct />
                    10GB Bandwidth
                  </span>
                  <span className=" flex pt-3 gap-6">
                    <Correct />
                    15 Email Accounts
                  </span>
                  <span className=" flex pt-3 gap-6">
                    <Correct />
                    Unlimited Database
                  </span>
                  <span className=" flex pt-3 gap-6">
                    <Correct />4 Subdomains
                  </span>
                  <span className=" flex pt-3 gap-6">
                    <Correct />1 Parked Domain
                  </span>
                  <span className=" flex pt-3 gap-6">
                    <Correct />2 Websites
                  </span>
                  <span className=" flex pt-3 gap-6">
                    <Correct />
                    Free SSL
                  </span>
                  <span className=" flex pt-3 gap-6">
                    <Correct />
                    Softaculous
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Ready;
