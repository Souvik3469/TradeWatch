import { useStockData } from "../hooks/useStockData";

// RSI Calculation (simple version)
const calculateRSI = (data: number[], period: number = 14) => {
  let gains = 0;
  let losses = 0;

  for (let i = 1; i <= period; i++) {
    const change = data[i] - data[i - 1];
    if (change > 0) gains += change;
    else losses -= change;
  }

  const avgGain = gains / period;
  const avgLoss = losses / period;
  const rs = avgGain / avgLoss;

  return 100 - 100 / (1 + rs);
};

const Analysis: React.FC = () => {
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

  const { data: stockData = [], isFetching } = useStockData("1d");

  // Calculate RSI (Relative Strength Index) for the last 14 periods
  const closePrices = stockData.map((item: StockDataPoint) => item.close);
  const rsi = calculateRSI(closePrices, 14);

  // Calculate 50-period and 200-period moving averages
  const movingAvg50 =
    closePrices.slice(0, 50).reduce((acc: any, curr: any) => acc + curr, 0) /
    50;
  const movingAvg200 =
    closePrices.slice(0, 200).reduce((acc: any, curr: any) => acc + curr, 0) /
    200;

  return (
    <div className="analysis-container">
      <div className="rsi">
        <h3>RSI (14)</h3>
        <p>{rsi.toFixed(2)}</p>
      </div>
      <div className="moving-avg">
        <h3>50-Period Moving Average</h3>
        <p>${movingAvg50.toFixed(2)}</p>
      </div>
      <div className="moving-avg-200">
        <h3>200-Period Moving Average</h3>
        <p>${movingAvg200.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Analysis;

/*
import { useStockData } from "../hooks/useStockData";

const Statistics: React.FC = () => {
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

  const { data: stockData = [], isFetching } = useStockData("1d");

  // Calculate 24h Volume and Average Price
  const totalVolume = stockData.reduce(
    (acc: any, curr: any) => acc + curr.volume,
    0
  );
  const averagePrice =
    stockData.reduce((acc: any, curr: any) => acc + curr.close, 0) /
    stockData.length;

  // Total Number of Trades
  const totalTrades = stockData.reduce(
    (acc: any, curr: any) => acc + curr.numTrades,
    0
  );

  return (
    <div className="statistics-container">
      <div className="volume">
        <h3>24h Volume</h3>
        <p>{totalVolume.toLocaleString()}</p>
      </div>
      <div className="average-price">
        <h3>24h Average Price</h3>
        <p>${averagePrice.toFixed(2)}</p>
      </div>
      <div className="trade-count">
        <h3>Total Trades (24h)</h3>
        <p>{totalTrades.toLocaleString()}</p>
      </div>
      <div className="flex flex-col w-full ">
        <div className=" flex flex-row justify-between px-[100px] text-center pt-8 w-[screen] h-[screen] rounded-md shadow-md  mx-[150px]">
          <div className="text-lg text-gray-500 font-normal">Current Price</div>
          <div className="text-4xl text-gray-600 mt-6 font-semibold">87896</div>
        </div>
        <div className=" flex flex-col text-center pt-8 w-[350px] h-[200px] rounded-md shadow-md relative ">
          <div className="flex flex-col justify-center  h-[32px] w-[32px] rounded-full bg-[#4B40EE]  text-gray-50 absolute top-1 right-1 font-semibold">
            1y
          </div>
          <div className="text-lg text-gray-500 font-normal">Change</div>
          <div className="text-3xl text-gray-600 mt-6 font-semibold">78%</div>
        </div>
        <div className=" flex flex-col text-center pt-8 w-[350px] h-[200px] rounded-md shadow-md relative">
          <div className="flex flex-col justify-center  h-[32px] w-[32px] rounded-full bg-[#4B40EE]  text-gray-50 absolute top-1 right-1 font-semibold ">
            1y
          </div>
          <div className="text-lg text-gray-500 font-normal">High/Low</div>
          <div className="text-3xl text-gray-600 mt-6 font-semibold">
            151684
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;

*/
