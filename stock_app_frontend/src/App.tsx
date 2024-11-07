import "./App.css";

import React from "react";
import StockChart from "./components/StockChart";

const App: React.FC = () => {
  return (
    <div className="mt-16 ml-16">
      {/* Price section */}
      <section className=" mb-6 ">
        <div>
          <div className="flex flex-row">
            <div className="font-circular text-70px font-normal leading-88px text-left text-[#1A243A]">
              63,179.71
            </div>
            <div
              className="py-3 px-1 font-circular text-24px font-normal text-[#BDBEBF]
"
            >
              USD
            </div>
          </div>
          <div className="text-lg text-[#67BF6B] text-[18px] leading-[22.77px]">
            + 2,161.42 (3.54%)
          </div>
        </div>
      </section>
      {/* Tabs */}
      <section className="">
        <div className="grid grid-cols-12">
          <div className="flex justify-center relative text-[#6F7177]  text-[18px] leading-[22.77px] font-normal hover:text-[#1A243A] cursor-pointer">
            Summary
          </div>
          <div className="flex justify-center relative text-[#6F7177]  text-[18px] leading-[22.77px] font-normal hover:text-[#1A243A] cursor-pointer">
            Chart
            <span className="absolute left-0 -bottom-6 w-full h-[3px] bg-[#4B40EE] opacity-100 hover:opacity-100 transition-opacity"></span>
          </div>
          <div className="flex justify-center relative text-[#6F7177]  text-[18px] leading-[22.77px] font-normal hover:text-[#1A243A] cursor-pointer">
            Statistics
          </div>
          <div className="flex justify-center relative text-[#6F7177]  text-[18px] leading-[22.77px] font-normal hover:text-[#1A243A] cursor-pointer">
            Analysis
          </div>
          <div className="flex justify-center relative text-[#6F7177]  text-[18px] leading-[22.77px] font-normal hover:text-[#1A243A] cursor-pointer">
            Settings
          </div>
        </div>
        <hr className="border-t-2 border-gray-200 mt-6" />
      </section>
      <section className="mt-12">
        <StockChart />
      </section>
    </div>
  );
};

export default App;
