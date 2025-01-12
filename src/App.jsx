import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./UI/Sidebar";
import Home from "./pages/Home";
import Cards from "./pages/Cards";
import Transactions from "./pages/Transactions";
import Transfer from "./pages/Transfer";
import Settings from "./pages/Settings";
import Products from "./pages/Products";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 bg-gray-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/transfer" element={<Transfer />} />
            <Route path="/products" element={<Products />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
