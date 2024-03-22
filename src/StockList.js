import React, { useEffect, useState } from "react";
import StockItem from "./StockItem";
import { getStockList } from "./api";
// import { getStockList } from "../src/api";

const StockList = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getStockList();
      setStocks(result.chart.result[0].indicators.quote[0]);
    };

    fetchData();
  }, []);

  return (
    <div>
      {stocks.map((stock) => (
        <StockItem key={stock.symbol} stock={stock} />
      ))}
    </div>
  );
};

export default StockList;
