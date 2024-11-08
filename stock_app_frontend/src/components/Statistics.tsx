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
    </div>
  );
};

export default Statistics;
