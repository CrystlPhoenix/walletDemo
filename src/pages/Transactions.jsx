import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import Transactions from "../data/Transactions"; // Imimport Transactions from "../data/Transactions";port the Transactions file

const Transaction = () => {
  const [search, setSearch] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState(Transactions);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Reference for printing
  const printRef = useRef();

  // Handle search functionality
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);

    const filtered = Transactions.filter(
      (transaction) =>
        transaction.name.toLowerCase().includes(query) ||
        transaction.status.toLowerCase().includes(query)
    );

    setFilteredTransactions(filtered);
  };

  // Handle filter by date
  const handleFilter = () => {
    const filtered = Transactions.filter((transaction) => {
      const transactionDate = new Date(transaction.date);
      const start = startDate ? new Date(startDate) : new Date(-8640000000000000);
      const end = endDate ? new Date(endDate) : new Date(8640000000000000);

      return transactionDate >= start && transactionDate <= end;
    });

    setFilteredTransactions(filtered);
  };

  // Print functionality
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: "Transactions Report",
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Transactions</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search Transactions"
        value={search}
        onChange={handleSearch}
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />

      {/* Filter Section */}
      <div className="flex gap-4 mb-4">
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleFilter}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Filter
        </button>
        <button
          onClick={handlePrint}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Print
        </button>
      </div>

      {/* Transactions Table */}
      <div className="overflow-x-auto" ref={printRef}>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 border">ID</th>
              <th className="p-4 border">Name</th>
              <th className="p-4 border">From</th>
              <th className="p-4 border">To</th>
              <th className="p-4 border">Amount</th>
              <th className="p-4 border">Date</th>
              <th className="p-4 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="p-4 border">{transaction.id}</td>
                <td className="p-4 border">{transaction.name}</td>
                <td className="p-4 border">{transaction.from}</td>
                <td className="p-4 border">{transaction.to}</td>
                <td className="p-4 border">{transaction.amount}</td>
                <td className="p-4 border">{transaction.date}</td>
                <td
                  className={`p-4 border ${
                    transaction.status === "Successful"
                      ? "text-green-600"
                      : transaction.status === "Failed"
                      ? "text-red-600"
                      : "text-gray-600"
                  }`}
                >
                  {transaction.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transaction;