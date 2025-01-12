import React from "react";
import MainSection from "../UI/MainSection";
import BalanceCard from "../UI/BalanceCard";

const Home = () => {
  const userName = "Victory"; // Replace with dynamic user name if available

  return (
    <div className="p-6">
      {/* Greeting Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome back, {userName}!
        </h1>
        <p className="text-gray-600">Here's your account overview today:</p>
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <BalanceCard />
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-bold text-gray-700">Recent Transactions</h2>
          <p className="text-gray-600">5 new transactions</p>
          {/* View All Button */}
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
            View All
          </button>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-bold text-gray-700">Pending Actions</h2>
          <p className="text-gray-600">3 tasks to complete</p>
          {/* Add Action Button */}
          <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700">
            Add Task
          </button>
        </div>
      </div>

      {/* Main Section */}
      <MainSection />
    </div>
  );
};

export default Home;
