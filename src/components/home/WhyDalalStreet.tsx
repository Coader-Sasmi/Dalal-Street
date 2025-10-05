"use client";

import {
    Chat,
    Handshake,
    HeadsetMic,
    Psychology,
    SupportAgent,
    TrendingUp,
} from "@mui/icons-material";

const features = [
  {
    id: 1,
    icon: <TrendingUp className="text-3xl text-black" />,
    bg: "bg-amber-100",
    title: "Daily Market Views",
    desc: "Stay updated with the latest market trends and insights every day.",
  },
  {
    id: 2,
    icon: <Chat className="text-3xl text-black" />,
    bg: "bg-blue-100",
    title: "Well Researched Ideas",
    desc: "Benefit from expert opinion, backed by in-depth research and analysis.",
  },
  {
    id: 3,
    icon: <Psychology className="text-3xl text-black" />,
    bg: "bg-green-100",
    title: "Credits Based Subscription Model",
    desc: "Pay only for successful research calls with our flexible credit-based subscription system.",
  },
  {
    id: 4,
    icon: <SupportAgent className="text-3xl text-black" />,
    bg: "bg-purple-100",
    title: "Timely Customer Support",
    desc: "Get prompt assistance and answers to your trading queries whenever needed.",
  },
  {
    id: 5,
    icon: <Handshake className="text-3xl text-black" />,
    bg: "bg-sky-100",
    title: "Initial Hand Holding For Beginners",
    desc: "Receive guided support to help you start trading with confidence.",
  },
  {
    id: 6,
    icon: <HeadsetMic className="text-3xl text-black" />,
    bg: "bg-lime-100",
    title: "Insights Aligned with Your Goals",
    desc: "Research designed to provide you with actionable and goal-oriented recommendations you can trust.",
  },
];

export default function WhyDalalStreet() {
  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto border border-gray-200 rounded-2xl p-10 shadow-sm">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Why DalalStreet?
        </h2>
        <p className="mt-2 text-gray-600">
          Trading and Investment Insights Based on Market Conditions Suitable For Everyone.
        </p>

        {/* Features Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {features.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-4 p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition"
            >
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-lg ${item.bg}`}
              >
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{item.id}. {item.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-10 flex justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
}
