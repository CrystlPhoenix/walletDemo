import React from "react";

const BalanceCard = () => {
  return (
    <div className="bg-gray-700 w-72 m-3 h-24 text-white rounded-lg p-6 shadow-md">
      <h3 className="text-lg font-semibold">Account Balance</h3>
      <p className="text-2xl mt-2">$12,345.67</p>
    </div>
  );
};

export default BalanceCard;
