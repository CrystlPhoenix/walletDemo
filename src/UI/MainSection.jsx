import React from "react";
import BalanceCard from "./BalanceCard";
import TransactionList from "./TransactionList";

const MainSection = () => {
  return (
    <div className="flex-1 p-4 ">
      <TransactionList />
    </div>
  );
};

export default MainSection;
