import { useStockData } from "../hooks/useStockData";

const Summary: React.FC = () => {
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

  const { data: stockData = [], isFetching, isLoading } = useStockData("1d");
  // Extract the latest data
  const currentPrice = stockData[stockData.length - 1]?.close;
  const price24hHigh = Math.max(
    ...stockData.map((item: StockDataPoint) => item.high)
  );
  const price24hLow = Math.min(
    ...stockData.map((item: StockDataPoint) => item.low)
  );

  const priceChange =
    ((currentPrice - stockData[0]?.close) / stockData[0]?.close) * 100;
  if (isLoading) return <div>Loading....</div>;
  const formatPrice = (price: number) => {
    return price.toLocaleString("en-US", {
      style: "decimal",
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
  };
  return (
    <div className="flex flex-row justify-between px-16">
      <div className=" flex flex-col text-center pt-8 w-[350px] h-[200px] rounded-md shadow-md ">
        <div className="text-3xl text-gray-400 font-semibold">
          Current Price
        </div>
        <div className="text-3xl text-gray-600 mt-6 font-semibold">
          {formatPrice(currentPrice)}
        </div>
      </div>
      <div className=" flex flex-col text-center pt-8 w-[350px] h-[200px] rounded-md shadow-md relative ">
        <div className="flex flex-col justify-center  h-[32px] w-[32px] rounded-full bg-[#4B40EE]  text-gray-50 absolute top-1 right-1 font-semibold">
          1y
        </div>
        <div className="text-3xl text-gray-400 font-semibold">Change</div>
        <div className="text-3xl text-gray-600 mt-6 font-semibold">
          {priceChange.toFixed(2)}%
        </div>
      </div>
      <div className=" flex flex-col text-center pt-8 w-[350px] h-[200px] rounded-md shadow-md relative">
        <div className="flex flex-col justify-center  h-[32px] w-[32px] rounded-full bg-[#4B40EE]  text-gray-50 absolute top-1 right-1 font-semibold ">
          1y
        </div>
        <div className="text-3xl text-gray-400 font-semibold">High/Low</div>
        <div className="text-3xl text-gray-600 mt-6 font-semibold">
          {formatPrice(price24hHigh)} / {formatPrice(price24hLow)}
        </div>
      </div>
    </div>
  );
};

export default Summary;
