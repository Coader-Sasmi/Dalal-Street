// components/Navbar.tsx
"use client";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full shadow-sm bg-white sticky top-0">
      <div className="main-container py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/main_logo3.png"
              alt="Dalal Street Logo"
              className="h-auto w-[25%]"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12 items-center">
            <Link href="#" className="text-gray-800 font-semibold hover:text-[#075637]">
              Services
            </Link>
            <Link href="#" className="text-gray-800 font-semibold hover:text-[#075637]">
              Streetfolios
            </Link>
            <Link href="#" className="text-gray-800 font-semibold hover:text-[#075637]">
              Streetview
            </Link>
            </div>
            <div className="hidden md:flex space-x-4 items-center">
            <Link href="#" className="text-[#bd3f41] hover:text-[#075637] font-semibold">
              Log In
            </Link>
            <button className="bg-[#bd3f41] text-white px-4 py-3 font-semibold text-xs uppercase rounded-lg hover:bg-[#bd3f41]/90 cursor-pointer transition">
              Start Free
            </button>
            <button className="phone-btn cursor-pointer">
            <Phone className="w-5 h-5 text-blue-700 phone-icon" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md absolute top-full left-0 w-full z-50">
          <div className="px-6 py-4 space-y-4">
            <Link href="#" className="block text-gray-800 font-semibold hover:text-[#075637]">
              Services
            </Link>
            <Link href="#" className="block text-gray-800 font-semibold hover:text-[#075637]">
              Streetfolios
            </Link>
            <Link href="#" className="block text-gray-800 font-semibold hover:text-[#075637]">
              Streetview
            </Link>
            <Link href="#" className="block text-[#bd3f41] font-semibold hover:text-[#075637]">
              Log In
            </Link>
            <button className=" bg-[#bd3f41] text-white px-4 py-3 font-semibold text-sm uppercase rounded-lg hover:bg-[#bd3f41]/90 transition">
              Start Free
            </button>
            <button className=" flex justify-center bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition">
              <Phone className="w-6 h-6 text-blue-700 phone-icon" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
