import React, { useState, useEffect } from "react";
import { Transactions } from "../data/Transactions";

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    setTransactions(Transactions);
  }, []);

  return (
    <div className="overflow-x-auto w-2/3  bg-white shadow rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Transaction List</h2>
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="bg-gray-700 text-white">
            <th className="p-3">ID</th>
            <th className="p-3">Amount</th>
            <th className="p-3">Date</th>
            <th className="p-3">Time</th>
            <th className="p-3">Type</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="border-t">
              <td className="p-3">{transaction.id}</td>
              <td className="p-3">${transaction.amount.toFixed(2)}</td>
              <td className="p-3">{transaction.date}</td>
              <td className="p-3">{transaction.time}</td>
              <td className="p-3">{transaction.type}</td>
              <td
                className={`p-3 ${
                  transaction.status === "Successful"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {transaction.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
