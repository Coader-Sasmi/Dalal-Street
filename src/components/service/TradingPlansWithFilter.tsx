"use client";
import React, { useState } from "react";

interface Plan {
  title: string;
  description: string;
  risk: string;
  return: string;
  type: string;
  period: string;
  registered: string;
  investment: string;
  credits: string;
}

const plansData: Plan[] = [
  {
    title: "Cash Intraday (B)",
    description: "Intraday Cash Segment Stocks for Small Traders (1–2 Trade Calls Per Day)",
    risk: "Moderate Risk",
    return: "Avg Return",
    type: "MIS",
    period: "Short-Term",
    registered: "79466",
    investment: "₹50,000",
    credits: "30 Credits: ₹12,500",
  },
  {
    title: "Index Options (B)",
    description: "Options Trading Calls for F&O Traders (1–2 Trade Calls Per Day)",
    risk: "Moderate Risk",
    return: "Avg Return",
    type: "NRML",
    period: "Short-Term",
    registered: "53150",
    investment: "₹50,000",
    credits: "30 Credits: ₹16,500",
  },
  {
    title: "Stock Options (B)",
    description: "Options Trading Calls for F&O Traders (1–2 Trade Calls Per Day)",
    risk: "High Risk",
    return: "Avg Return",
    type: "NRML",
    period: "Long Term",
    registered: "49686",
    investment: "₹1,00,000",
    credits: "30 Credits: ₹21,000",
  },
  {
    title: "Index Options",
    description: "Options Trading Calls for F&O Traders (1–5 Trade Calls Per Day)",
    risk: "High Risk",
    return: "Avg Return",
    type: "NRML",
    period: "Long Term",
    registered: "46177",
    investment: "₹2,00,000",
    credits: "300 Credits: ₹1,15,500",
  },
  {
    title: "Cash Intraday",
    description: "Momentum Cash Segment Calls For HNI Traders (1–5 Trade Calls Per Day)",
    risk: "Moderate Risk",
    return: "Avg Return",
    type: "MIS/NRML",
    period: "Short Term",
    registered: "38427",
    investment: "₹1,00,000",
    credits: "300 Credits: ₹56,700",
  },
];

const TradingPlansWithFilter = () => {
  const [selectedRisk, setSelectedRisk] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [selectedPeriod, setSelectedPeriod] = useState<string[]>([]);

  const handleCheckbox = (value: string, selectedList: string[], setList: any) => {
    if (selectedList.includes(value)) {
      setList(selectedList.filter((v) => v !== value));
    } else {
      setList([...selectedList, value]);
    }
  };

  const filteredPlans = plansData.filter((plan) => {
    const matchRisk =
      selectedRisk.length === 0 || selectedRisk.includes(plan.risk);
    const matchType =
      selectedType.length === 0 || selectedType.includes(plan.type);
    const matchPeriod =
      selectedPeriod.length === 0 || selectedPeriod.includes(plan.period);
    return matchRisk && matchType && matchPeriod;
  });

  return (
    <div className="flex flex-col md:flex-row gap-6 bg-gray-50 min-h-screen p-6">
      {/* Sidebar Filter */}
      <div className="w-full md:w-1/4 bg-white rounded-2xl p-5 shadow-sm border">
        <div className="flex justify-between mb-4">
          <button className="px-3 py-1 rounded-md border text-sm font-medium bg-gray-100">
            Free
          </button>
          <button className="px-3 py-1 rounded-md border text-sm font-medium bg-gray-100">
            Paid
          </button>
        </div>

        <div className="space-y-5">
          {/* Risk Reward */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Risk Reward</h3>
            {["Moderate Risk", "High Risk", "Low Risk"].map((item) => (
              <label
                key={item}
                className="flex items-center space-x-2 text-sm text-gray-600"
              >
                <input
                  type="checkbox"
                  checked={selectedRisk.includes(item)}
                  onChange={() =>
                    handleCheckbox(item, selectedRisk, setSelectedRisk)
                  }
                  className="rounded border-gray-300"
                />
                <span>{item}</span>
              </label>
            ))}
          </div>

          {/* Trade Type */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Trade Type</h3>
            {["MIS", "MIS/NRML", "NRML"].map((item) => (
              <label
                key={item}
                className="flex items-center space-x-2 text-sm text-gray-600"
              >
                <input
                  type="checkbox"
                  checked={selectedType.includes(item)}
                  onChange={() =>
                    handleCheckbox(item, selectedType, setSelectedType)
                  }
                  className="rounded border-gray-300"
                />
                <span>{item}</span>
              </label>
            ))}
          </div>

          {/* Investment Period */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Investment Period</h3>
            {["Short-Term", "Short Term", "Long Term"].map((item) => (
              <label
                key={item}
                className="flex items-center space-x-2 text-sm text-gray-600"
              >
                <input
                  type="checkbox"
                  checked={selectedPeriod.includes(item)}
                  onChange={() =>
                    handleCheckbox(item, selectedPeriod, setSelectedPeriod)
                  }
                  className="rounded border-gray-300"
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side Cards */}
      <div className="flex-1 space-y-5">
        {filteredPlans.length > 0 ? (
          filteredPlans.map((plan, i) => (
            <div
              key={i}
              className="bg-white border rounded-2xl shadow-sm p-6 flex flex-col md:flex-row justify-between items-start md:items-center"
            >
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-800">
                  {plan.title}
                </h2>
                <p className="text-sm text-gray-500 mb-3">{plan.description}</p>

                <div className="flex flex-wrap gap-2 mb-3">
                  <span
                    className={`px-2 py-1 rounded-md text-xs font-medium ${
                      plan.risk.includes("High")
                        ? "bg-red-100 text-red-700"
                        : plan.risk.includes("Moderate")
                        ? "bg-orange-100 text-orange-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {plan.risk}
                  </span>
                  <span className="px-2 py-1 rounded-md text-xs font-medium bg-green-100 text-green-700">
                    {plan.return}
                  </span>
                  <span className="px-2 py-1 rounded-md text-xs font-medium bg-yellow-100 text-yellow-700">
                    {plan.type}
                  </span>
                  <span className="px-2 py-1 rounded-md text-xs font-medium bg-cyan-100 text-cyan-700">
                    {plan.registered} People Registered
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-end mt-3 md:mt-0">
                <span className="text-sm bg-blue-50 text-blue-700 font-medium px-3 py-1 rounded-md mb-2">
                  {plan.credits}
                </span>
                <span className="text-sm text-gray-500 mb-2">
                  Min. Investment:{" "}
                  <span className="font-semibold">{plan.investment}</span>
                </span>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">
                  View
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-10">No plans match your filters.</p>
        )}
      </div>
    </div>
  );
};

export default TradingPlansWithFilter;
