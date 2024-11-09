import React, { useEffect, useRef, useState } from "react";
import { createChart, IChartApi } from "lightweight-charts";
import { MdOpenInFull } from "react-icons/md";
import { LuPlusCircle } from "react-icons/lu";
import { useStockData } from "../hooks/useStockData";

const Chart: React.FC = () => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const [selectedTimeframe, setSelectedTimeframe] = useState<string>("1d");

  const { data: stockData = [], isFetching } = useStockData(selectedTimeframe);
  interface StockDataPoint {
    time: number; // Timestamp in seconds
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    quoteVolume: number;
    numTrades: number;
    takerBuyBaseVolume: number;
    takerBuyQuoteVolume: number;
  }

  useEffect(() => {
    if (chartContainerRef.current && !chartRef.current) {
      // Create chart only once
      chartRef.current = createChart(chartContainerRef.current, {
        width: 1250,
        height: 400,
        grid: {
          vertLines: { color: "#ffffff", style: 1 },
          horzLines: { color: "#ffffff", style: 1 },
        },
        crosshair: {
          vertLine: { color: "#e1e4e8", width: 2 },
          horzLine: { color: "#e1e4e8", width: 2 },
        },
        layout: { textColor: "#000" },
      });

      const areaSeries = chartRef.current.addAreaSeries({
        topColor: "rgb(232 231 255)",
        bottomColor: "rgb(255 255 255)",
        lineColor: "#4B40EE",
        lineWidth: 2,
      });

      if (stockData.length > 0) {
        // Map stock data to the format expected by the area series
        const mappedData = stockData.map((dataPoint: StockDataPoint) => ({
          time: dataPoint.time, // Timestamp in seconds
          value: dataPoint.close, // Closing price (value)
        }));

        // Set data for the area series
        areaSeries.setData(mappedData);
      }
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.remove();
        chartRef.current = null;
      }
    };
  }, [stockData, selectedTimeframe]);

  return (
    <div className="w-[90%] p-4 bg-white">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-8">
          <div className="flex flex-row justify-center">
            <div className="px-2 text-[#6F7177] text-[20px]">
              <MdOpenInFull />
            </div>
            <div className="text-[#6F7177] text-[18px] leading-[22.77px] font-normal hover:text-[#1A243A] cursor-pointer">
              Fullscreen
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <div className="px-2 text-[#6F7177] text-[20px]">
              <LuPlusCircle />
            </div>
            <div className="text-[#6F7177] text-[18px] leading-[22.77px] font-normal hover:text-[#1A243A] cursor-pointer">
              Compare
            </div>
          </div>
        </div>
        <div className="flex space-x-4">
          {["1m", "5m", "1h", "1d", "1w", "1M", "max"].map((timeframe) => (
            <button
              key={timeframe}
              className={`text-[#6F7177] py-1 px-2 rounded-md text-[18px] leading-[22.77px] font-normal hover:text-[#ffffff] hover:bg-[#4B40EE] cursor-pointer ${
                selectedTimeframe === timeframe
                  ? "bg-[#4B40EE] text-[#ffffff]"
                  : ""
              }`}
              onClick={() => setSelectedTimeframe(timeframe)}
            >
              {timeframe}
            </button>
          ))}
        </div>
      </div>

      <div ref={chartContainerRef} className="overflow-hidden"></div>

      {/* {isFetching && (
        <div className="text-right text-gray-400 text-xs">
          Refreshing data...
        </div>
      )} */}
    </div>
  );
};

export default Chart;
