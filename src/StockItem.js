import React from "react";
import { useNavigate } from "react-router-dom";

const StockItem = ({ stock }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate.push(`/stock/${stock.symbol}`);
  };

  return (
    <div onClick={handleClick} style={{ cursor: "pointer" }}>
      <h3>{stock.name}</h3>
      <p>Symbol: {stock.symbol}</p>
      <p>Price: {stock.price}</p>
    </div>
  );
};

export default StockItem;
