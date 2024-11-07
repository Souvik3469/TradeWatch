import React, { useEffect, useRef, useState } from "react";
import { createChart, IChartApi } from "lightweight-charts";
import axios from "axios";
import { MdOpenInFull } from "react-icons/md";
import { LuPlusCircle } from "react-icons/lu";

const TradingViewChart: React.FC = () => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const [chartData, setChartData] = useState<any[]>([]);
  const [selectedTimeframe, setSelectedTimeframe] = useState<string>("1w");
  const [loading, setLoading] = useState<boolean>(false);

  const timeframeMapping: { [key: string]: string } = {
    "1d": "1",
    "3d": "3",
    "1w": "7",
    "1m": "30",
    "6m": "180",
    "1y": "365",
    max: "max",
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart",
        {
          params: {
            vs_currency: "usd",
            days: timeframeMapping[selectedTimeframe],
          },
        }
      );

      const data = response.data.prices.map((price: any) => ({
        time: price[0] / 1000,
        value: price[1],
      }));

      setChartData(data);
    } catch (error) {
      console.error("Error fetching Bitcoin data", error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {

  //   fetchData();
  // }, [selectedTimeframe]);

  useEffect(() => {
    fetchData();

    // const interval = setInterval(() => {
    //   fetchData();
    // }, 10 * 1000); //10s

    // return () => clearInterval(interval);
  }, [selectedTimeframe]);

  useEffect(() => {
    if (chartContainerRef.current) {
      chartRef.current = createChart(chartContainerRef.current, {
        // width: chartContainerRef.current.clientWidth,
        width: 1250,
        height: 400,

        grid: {
          vertLines: {
            color: "#ffffff",
            style: 1,
          },
          horzLines: {
            color: "#ffffff",
            style: 1,
          },
        },
        crosshair: {
          vertLine: {
            color: "#e1e4e8",
            width: 2,
          },
          horzLine: {
            color: "#e1e4e8",
            width: 2,
          },
        },
        layout: {
          // backgroundColor: "#fff", // Set chart background color

          textColor: "#000",
        },
      });

      const areaSeries = chartRef.current.addAreaSeries({
        topColor: "rgb(232 231 255)",
        bottomColor: "rgb(255 255 255)",
        lineColor: "#4B40EE",
        lineWidth: 2,
      });

      if (chartData.length > 0) {
        areaSeries.setData(chartData);
      }
    }

    return () => chartRef.current?.remove();
  }, [chartData, selectedTimeframe]);

  return (
    <div className="w-[90%] p-4 bg-white ">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-8">
          <div className="flex flex-row justify-center">
            <div className="px-2  text-[#6F7177] text-[20px]">
              <MdOpenInFull />
            </div>
            <div className="  text-[#6F7177]  text-[18px] leading-[22.77px] font-normal hover:text-[#1A243A] cursor-pointer">
              Fullscreen
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <div className="px-2  text-[#6F7177] text-[20px]">
              <LuPlusCircle />
            </div>
            <div className="text-[#6F7177]  text-[18px] leading-[22.77px] font-normal hover:text-[#1A243A] cursor-pointer">
              Compare
            </div>
          </div>
        </div>
        <div className="flex space-x-4">
          {["1d", "3d", "1w", "1m", "6m", "1y", "max"].map((timeframe) => (
            <button
              key={timeframe}
              className={`text-[#6F7177]  py-1 px-2 rounded-md text-[18px] leading-[22.77px] font-normal hover:text-[#ffffff] hover:bg-[#4B40EE] cursor-pointer ${
                selectedTimeframe === timeframe
                  ? "bg-[#4B40EE] text-[#ffffff]"
                  : ""
              }`}
              onClick={() => setSelectedTimeframe(timeframe)} // Update the selected timeframe
            >
              {timeframe}
            </button>
          ))}
        </div>
      </div>

      {loading && (
        <div className="text-center text-gray-500">Loading data...</div>
      )}
      <div ref={chartContainerRef} className=" overflow-hidden"></div>
    </div>
  );
};

export default TradingViewChart;
