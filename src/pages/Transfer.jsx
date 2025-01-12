import React, { useState } from "react";

const Transfer = () => {
  const [transferData, setTransferData] = useState({
    fromAccount: "",
    toAccount: "",
    amount: "",
    date: "",
    note: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransferData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Basic form validation
  const validateForm = () => {
    const errors = {};
    if (!transferData.fromAccount) errors.fromAccount = "Sender account is required.";
    if (!transferData.toAccount) errors.toAccount = "Recipient account is required.";
    if (!transferData.amount || transferData.amount <= 0)
      errors.amount = "Amount must be greater than 0.";
    if (!transferData.date) errors.date = "Transfer date is required.";
    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage("");
    } else {
      setErrors({});
      setSuccessMessage("Transfer initiated successfully!");
      console.log("Transfer Details:", transferData);

      // Reset form after successful submission
      setTransferData({
        fromAccount: "",
        toAccount: "",
        amount: "",
        date: "",
        note: "",
      });
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Transfer Funds</h1>

      {/* Success Message */}
      {successMessage && (
        <div className="mb-4 p-3 bg-green-100 text-green-800 rounded">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* From Account */}
        <div>
          <label className="block text-gray-700 mb-2">From Account</label>
          <input
            type="text"
            name="fromAccount"
            value={transferData.fromAccount}
            onChange={handleChange}
            placeholder="Enter sender's account number"
            className="p-2 border border-gray-300 rounded w-full"
          />
          {errors.fromAccount && (
            <span className="text-red-500 text-sm">{errors.fromAccount}</span>
          )}
        </div>

        {/* To Account */}
        <div>
          <label className="block text-gray-700 mb-2">To Account</label>
          <input
            type="text"
            name="toAccount"
            value={transferData.toAccount}
            onChange={handleChange}
            placeholder="Enter recipient's account number"
            className="p-2 border border-gray-300 rounded w-full"
          />
          {errors.toAccount && (
            <span className="text-red-500 text-sm">{errors.toAccount}</span>
          )}
        </div>

        {/* Amount */}
        <div>
          <label className="block text-gray-700 mb-2">Amount</label>
          <input
            type="number"
            name="amount"
            value={transferData.amount}
            onChange={handleChange}
            placeholder="Enter amount to transfer"
            className="p-2 border border-gray-300 rounded w-full"
          />
          {errors.amount && (
            <span className="text-red-500 text-sm">{errors.amount}</span>
          )}
        </div>

        {/* Transfer Date */}
        <div>
          <label className="block text-gray-700 mb-2">Transfer Date</label>
          <input
            type="date"
            name="date"
            value={transferData.date}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded w-full"
          />
          {errors.date && (
            <span className="text-red-500 text-sm">{errors.date}</span>
          )}
        </div>

        {/* Note */}
        <div>
          <label className="block text-gray-700 mb-2">Note (Optional)</label>
          <textarea
            name="note"
            value={transferData.note}
            onChange={handleChange}
            placeholder="Add a note about this transfer"
            className="p-2 border border-gray-300 rounded w-full"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Initiate Transfer
        </button>
      </form>
    </div>
  );
};

export default Transfer;
