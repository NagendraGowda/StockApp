import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const StockDetails = ({ match }) => {
  const [stock, setStock] = useState(null);
  const [priceData, setPriceData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const stockResult = await axios.get(
        `https://api.example.com/stock/${match.params.symbol}`
      );
      const priceResult = await axios.get(
        `https://api.example.com/stock/price/${match.params.symbol}`
      );

      setStock(stockResult.data);
      setPriceData(priceResult.data);
    };

    fetchData();
  }, [match.params.symbol]);

  if (!stock || !priceData) {
    return <div>Loading...</div>;
  }

  const data = {
    labels: priceData.labels,
    datasets: [
      {
        label: stock.name,
        data: priceData.data,
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h1>{stock.name}</h1>
      <p>Symbol: {stock.symbol}</p>
      <p>Price: {stock.price}</p>
      <Line data={data} />
    </div>
  );
};

export default StockDetails;
