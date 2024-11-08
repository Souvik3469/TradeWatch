import React, { useState, useEffect } from "react";
import { useStockData } from "../hooks/useStockData";
const Price: React.FC = () => {
  const [price, setPrice] = useState<number>(63179.71);
  // const [percentageChange, setPercentageChange] = useState<number>(3.54);

  const { data: stockData = [], isFetching } = useStockData("1w");

  useEffect(() => {
    if (stockData.length > 0) {
      const latestPrice = stockData[stockData.length - 1].close;
      const firstPrice = stockData[0].close;

      setPrice(latestPrice);
      // setPercentageChange(((latestPrice - firstPrice) / firstPrice) * 100);
    }
  }, [stockData]);

  const formatPrice = (price: number) => {
    return price.toLocaleString("en-US", {
      style: "decimal",
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
  };
  return (
    <div>
      <section className="mb-6">
        <div>
          <div className="flex flex-row">
            <div className="font-circular text-70px font-normal leading-88px text-left text-[#1A243A]">
              {/* {isFetching ? (
                <span className="text-gray-500">Loading...</span> // Optional placeholder during fetching
              ) : (
                formatPrice(price) // Display formatted price when data is available
              )} */}
              {formatPrice(price)}
            </div>
            <div className="py-3 px-1 font-circular text-24px font-normal text-[#BDBEBF]">
              USD
            </div>
          </div>
          {/* <div
            className={`text-lg text-[${
              percentageChange > 0 ? "#67BF6B" : "#E94B3C"
            }] text-[18px] leading-[22.77px]`}
          >
            
            {percentageChange.toFixed(2)}%
          </div> */}
          <div className="text-lg text-[#67BF6B] text-[18px] leading-[22.77px]">
            + 2,161.42 (3.54%)
          </div>
        </div>
      </section>
    </div>
  );
};

export default Price;
