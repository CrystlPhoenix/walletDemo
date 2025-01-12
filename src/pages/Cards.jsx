import React, { useState } from "react";

const Cards = () => {
  const [cards, setCards] = useState([
    { id: 1, name: "Visa Card", number: "**** **** **** 1234", expiry: "12/24" },
    { id: 2, name: "MasterCard", number: "**** **** **** 5678", expiry: "06/25" },
  ]);

  const [selectedCard, setSelectedCard] = useState(null); // For Manage functionality
  const [isAdding, setIsAdding] = useState(false); // For Add New Card form

  // Open Manage Modal
  const handleManage = (card) => {
    setSelectedCard(card);
  };

  // Add New Card
  const handleAddCard = (newCard) => {
    setCards([...cards, newCard]);
    setIsAdding(false); // Close the form
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Cards</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div key={card.id} className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-lg font-bold text-gray-700">{card.name}</h2>
            <p className="text-gray-600">{card.number}</p>
            <p className="text-gray-600">Expires: {card.expiry}</p>
            <button
              onClick={() => handleManage(card)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Manage
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={() => setIsAdding(true)}
        className="mt-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Add New Card
      </button>

      {/* Manage Modal */}
      {selectedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-lg font-bold mb-4">Manage {selectedCard.name}</h2>
            <p>Card Number: {selectedCard.number}</p>
            <p>Expiry: {selectedCard.expiry}</p>
            <button
              onClick={() => setSelectedCard(null)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Add New Card Form */}
      {isAdding && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-lg font-bold mb-4">Add New Card</h2>
            <AddCardForm onAdd={handleAddCard} onCancel={() => setIsAdding(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

// Add New Card Form Component
const AddCardForm = ({ onAdd, onCancel }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [expiry, setExpiry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ id: Date.now(), name, number: `**** **** **** ${number.slice(-4)}`, expiry });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700">Card Name</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., Visa Card"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Card Number</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="e.g., 1234567812345678"
          maxLength="16"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Expiry</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          placeholder="MM/YY"
          required
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Add Card
        </button>
      </div>
    </form>
  );
};

export default Cards;
