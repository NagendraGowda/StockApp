import axios from "axios";

const getStockList = async () => {
  const response = await axios.get(
    "https://query1.finance.yahoo.com/v7/finance/chart/AAPL,GOOGL,AMZN,FB,TSLA,MSFT,NVDA,BRK-B,JPM,JNJ,V,PG,MA,UNH,HD,DIS,BAC,VZ,ADBE,CMCSA?period1=1640995200&period2=1672531200&interval=1d&events=history&includeAdjustedClose=true"
  );
  return response.data;
};

export { getStockList };
