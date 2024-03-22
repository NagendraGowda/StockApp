import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StockList from "./StockList";
import StockDetails from "./StockDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<StockList />} />
          <Route path="/stock/:symbol" element={<StockDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
