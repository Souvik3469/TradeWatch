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

  const { data: stockData = [], isFetching } = useStockData("1d");
  // Extract the latest data
  const currentPrice = stockData[stockData.length - 1]?.close;
  const price24hHigh = Math.max(
    ...stockData.map((item: StockDataPoint) => item.high)
  );
  const price24hLow = Math.min(
    ...stockData.map((item: StockDataPoint) => item.low)
  );

  const priceChange =
    ((currentPrice - stockData[0].close) / stockData[0].close) * 100;

  return (
    <div className="summary-container">
      <div className="price">
        <h3>Current Price</h3>
        <p>${currentPrice}</p>
      </div>
      <div className="price-change">
        <h3>1 Year Change</h3>
        <p>{priceChange.toFixed(2)}%</p>
      </div>
      <div className="high-low">
        <h3>1 Year High/Low</h3>
        <p>
          {price24hHigh} / {price24hLow}
        </p>
      </div>
    </div>
  );
};

export default Summary;
