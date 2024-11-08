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
