import React, { useState, useEffect } from "react";
import { Transactions } from "../data/Transactions";
// Mock transactions data (replace with your actual data source)

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch or set transactions
    setTransactions(Transactions);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Transactions</h2>
      <div className="bg-white rounded-lg shadow-md p-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between py-2 border-b last:border-b-0"
          >
            <div className="flex items-center space-x-4">
              {/* Add icons for better visuals */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  transaction.amount > 0
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {transaction.status === "Successful" ? (
                  <i className="fas fa-check-circle"></i>
                ) : transaction.status === "Failed" ? (
                  <i className="fas fa-times-circle"></i>
                ) : (
                  <i className="fas fa-info-circle"></i>
                )}
              </div>
              <div>
                <p className="text-sm font-bold text-gray-700">{transaction.name}</p>
                <p className="text-xs text-gray-500">{transaction.date}</p>
              </div>
            </div>
            <div className="text-right">
              <p
                className={`font-bold ${
                  transaction.amount > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {transaction.amount > 0 ? "+" : ""}
                {transaction.amount.toLocaleString()} USD
              </p>
              <p
                className={`text-xs ${
                  transaction.status === "Successful"
                    ? "text-green-500"
                    : transaction.status === "Failed"
                    ? "text-red-500"
                    : "text-gray-500"
                }`}
              >
                {transaction.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
