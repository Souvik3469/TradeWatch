import React from "react";

const Statistics: React.FC = () => {
  return (
    <div className="flex flex-row justify-center px-16">
      <div className="flex flex-col p-6  h-[400px] w-[1000px] rounded-xl shadow-md">
        <div>
          <div className="text-2xl   text-gray-900 ">Order Book</div>
          <div className="flex flex-row justify-between px-6 my-6">
            <div className="w-[40%]">
              <div className="flex flex-row justify-between space-x-3 text-lg text-gray-400">
                <div>Price(USDT)</div>
                <div>Size(BTC)</div>
                <div>Sum(USDT)</div>
              </div>
              <div className="flex flex-row justify-around mt-2 space-x-3  text-gray-900 text-center relative">
                <div className="absolute left-0 bg-green-200 w-[20%] h-full rounded-r-md "></div>
                <div className="relative z-2 text-green-600">65,100</div>

                <div>15.00</div>
                <div>13.06M</div>
              </div>
              <div className="flex flex-row justify-around mt-2 space-x-3  text-gray-900 text-center relative">
                <div className="absolute left-0 bg-green-200 w-[30%] h-full rounded-r-md "></div>
                <div className="relative z-2 text-green-600">65,110</div>

                <div>250.0</div>
                <div>140.12M</div>
              </div>
              <div className="flex flex-row justify-around mt-2 space-x-3  text-gray-900 text-center relative">
                <div className="absolute left-0 bg-green-200 w-[10%] h-full rounded-r-md "></div>
                <div className="relative z-2 text-green-600">65,090</div>

                <div>120.0</div>
                <div>110.06M</div>
              </div>
              <div className="flex flex-row justify-around mt-2 space-x-3  text-gray-900 text-center relative">
                <div className="absolute left-0 bg-green-200 w-[35%] h-full rounded-r-md "></div>
                <div className="relative z-2 text-green-600">65,080</div>

                <div>17.0</div>
                <div>180.11K</div>
              </div>
              <div className="flex flex-row justify-around mt-2 space-x-3  text-gray-900 text-center relative">
                <div className="absolute left-0 bg-green-200 w-[25%] h-full rounded-r-md "></div>
                <div className="relative z-2 text-green-600">65,150</div>

                <div>7.00</div>
                <div>150.06K</div>
              </div>
              <div className="flex flex-row justify-around mt-2 space-x-3  text-gray-900 text-center relative">
                <div className="absolute left-0 bg-green-200 w-[40%] h-full rounded-r-md "></div>
                <div className="relative z-2 text-green-600">65,120</div>

                <div>18.00</div>
                <div>45.35M</div>
              </div>
              <div className="flex flex-row justify-around mt-2 space-x-3  text-gray-900 text-center relative">
                <div className="absolute left-0 bg-green-200 w-[15%] h-full rounded-r-md "></div>
                <div className="relative z-2 text-green-600">65,110</div>

                <div>8.00</div>
                <div>840.24K</div>
              </div>
              <div className="flex flex-row justify-around mt-2 space-x-3  text-gray-900 text-center relative">
                <div className="absolute left-0 bg-green-200 w-[40%] h-full rounded-r-md "></div>
                <div className="relative z-2 text-green-600">65,080</div>

                <div>240.0</div>
                <div>210.78M</div>
              </div>
            </div>
            <div className="border-l-2 border-gray-500"></div>
            <div className="w-[40%] ">
              <div className="flex flex-row justify-between space-x-3 text-lg text-gray-400">
                <div>Sum(USDT)</div>
                <div>Size(BTC)</div>
                <div>Price(USDT)</div>
              </div>
              <div className="flex flex-row justify-around mt-2 space-x-3  text-gray-900 text-center relative">
                <div className="absolute right-0 bg-red-200 w-[20%] h-full rounded-r-md "></div>
                <div>13.06M</div>
                <div>15.00</div>

                <div className="relative z-2 text-red-600">65,100</div>
              </div>
              <div className="flex flex-row justify-around mt-2 space-x-3  text-gray-900 text-center relative">
                <div className="absolute right-0 bg-red-200 w-[30%] h-full rounded-r-md "></div>

                <div>140.12M</div>
                <div>250.0</div>
                <div className="relative z-2 text-red-600">65,110</div>
              </div>
              <div className="flex flex-row justify-around mt-2 space-x-3  text-gray-900 text-center relative">
                <div className="absolute right-0 bg-red-200 w-[10%] h-full rounded-r-md "></div>
                <div>110.06M</div>

                <div>120.0</div>
                <div className="relative z-2 text-red-600">65,090</div>
              </div>
              <div className="flex flex-row justify-around mt-2 space-x-3  text-gray-900 text-center relative">
                <div className="absolute right-0 bg-red-200 w-[35%] h-full rounded-r-md "></div>
                <div>180.11K</div>
                <div>17.0</div>

                <div className="relative z-2 text-red-600">65,080</div>
              </div>
              <div className="flex flex-row justify-around mt-2 space-x-3  text-gray-900 text-center relative">
                <div className="absolute right-0 bg-red-200 w-[25%] h-full rounded-r-md "></div>
                <div>150.06K</div>
                <div>7.00</div>

                <div className="relative z-2 text-red-600">65,150</div>
              </div>
              <div className="flex flex-row justify-around mt-2 space-x-3  text-gray-900 text-center relative">
                <div className="absolute right-0 bg-red-200 w-[40%] h-full rounded-r-md "></div>
                <div>45.35M</div>
                <div>18.00</div>

                <div className="relative z-2 text-red-600">65,120</div>
              </div>
              <div className="flex flex-row justify-around mt-2 space-x-3  text-gray-900 text-center relative">
                <div className="absolute right-0 bg-red-200 w-[15%] h-full rounded-r-md "></div>
                <div>840.24K</div>

                <div>8.00</div>
                <div className="relative z-2 text-red-600">65,110</div>
              </div>
              <div className="flex flex-row justify-around mt-2 space-x-3  text-gray-900 text-center relative">
                <div className="absolute right-0 bg-red-200 w-[40%] h-full rounded-r-md "></div>
                <div>210.78M</div>
                <div>240.0</div>

                <div className="relative z-2 text-red-600">65,080</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
