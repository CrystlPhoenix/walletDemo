import React from "react";

const Transactions = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Transactions</h1>
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search Transactions"
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />
      {/* Transactions Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 border">ID</th>
              <th className="p-4 border">Account From</th>
              <th className="p-4 border">Account To</th>
              <th className="p-4 border">Amount</th>
              <th className="p-4 border">Date</th>
              <th className="p-4 border">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 border">1</td>
              <td className="p-4 border">123456</td>
              <td className="p-4 border">654321</td>
              <td className="p-4 border">$200</td>
              <td className="p-4 border">2024-12-25</td>
              <td className="p-4 border text-green-600">Successful</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
