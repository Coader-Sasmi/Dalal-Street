"use client";

import Image from "next/image";

export default function CreditsModel() {
  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side */}
        <div>
          <h2 className="text-4xl font-extrabold text-gray-900 leading-snug">
            What is Credits-Based <br /> Subscription Model?
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Our Credits-Based Subscription Model ensures that you just have to
            pay for successful calls. Credits are deducted only when the trade
            is successful –{" "}
            <span className="font-semibold text-gray-800">
              Losses Equals Zero Credits Used.
            </span>
          </p>

          <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
            Learn More
          </button>

          <p className="mt-4 text-sm text-gray-500 italic">
            *Successful calls are not assurance of profits, but accountability of
            research calls
          </p>
        </div>

        {/* Right Side - Phone Mockup with Floating Labels */}
        <div className="relative flex justify-center">
          <Image
            src="/home2.webp"
            alt="Credits Subscription Model"
            width={300}
            height={500}
            className="rounded-xl"
          />

          {/* Floating Label - Research Calls */}
          <div className="absolute left-0 top-1/3 bg-white shadow px-3 py-2 rounded-lg text-sm font-medium text-gray-700">
            Research Trade Calls
          </div>

          {/* Floating Label - Icon */}
          <div className="absolute right-5 top-10 bg-blue-600 p-3 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11c0 1.657-1.343 3-3 3S6 12.657 6 11s1.343-3 3-3 3 1.343 3 3zM19 11c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"
              />
            </svg>
          </div>

          {/* Floating Label - Target/Stoploss */}
          <div className="absolute right-0 bottom-20 bg-white shadow px-3 py-2 rounded-lg text-sm font-medium text-gray-700">
            Target/Stoploss
          </div>
        </div>
      </div>
    </section>
  );
}
