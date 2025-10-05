"use client";

import Image from "next/image";

const steps = [
  "Register to access our services.",
  "Receive a call back from our team.",
  "Understand the risks associated with investments.",
  "Choose services based on the information provided.",
  "Evaluate research recommendations.",
  "Subscribe to research calls.",
  "Get notified about Buy, Sell, and Hold options.",
  "Stay connected with our research analysts.",
  "Make well-informed investment decisions.",
];

export default function OurProcess() {
  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        
        {/* Left Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/home4.webp" // 👉 replace with your image path
            alt="Our Process"
            width={400}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Right Stepper */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center lg:text-left">
            Our Process
          </h2>
          <p className="mt-2 text-gray-600 text-center lg:text-left">
            Get premium access to well-researched trade calls!
          </p>

          <div className="mt-8 space-y-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-3 p-3 rounded-lg border ${
                  idx === 1 ? "bg-blue-50 border-blue-400 shadow-sm" : "border-gray-200"
                }`}
              >
                <span
                  className={`flex items-center justify-center w-7 h-7 rounded-full text-sm font-bold ${
                    idx === 1
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {idx + 1}
                </span>
                <p
                  className={`text-sm ${
                    idx === 1 ? "text-blue-700 font-medium" : "text-gray-700"
                  }`}
                >
                  {step}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-10 flex justify-center lg:justify-start">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow">
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
