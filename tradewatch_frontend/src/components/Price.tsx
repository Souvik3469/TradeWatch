import React, { useState, useEffect } from "react";
import { useStockData } from "../hooks/useStockData";
import Loader from "../components/Loader";
const Price: React.FC = () => {
  const [price, setPrice] = useState<number>(63179.71);
  // const [percentageChange, setPercentageChange] = useState<number>(3.54);

  const { data: stockData = [], isFetching, isLoading } = useStockData("1w");

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
          {isLoading ? (
            <div>
              <Loader />
            </div>
          ) : (
            <div>
              <div className="flex flex-row relative">
                <div className=" text-70px font-normal leading-88px text-left text-[#1A243A] ">
                  {formatPrice(price)}
                </div>
                <div className="absolute top-3 left-[310px]  text-24px font-normal text-[#BDBEBF]">
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
          )}
        </div>
      </section>
    </div>
  );
};

export default Price;
