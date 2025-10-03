// Footer.tsx
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTelegram,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1f2023] text-gray-300 text-sm">
      {/* Top Section */}
      <div className="main-container py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Logo & Newsletter */}
        <div className="col-span-2">
          <h2 className="text-white text-lg font-semibold mb-3">
            Subscribe to our newsletters
          </h2>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-md focus:outline-none text-gray-900"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md">
              Subscribe
            </button>
          </div>
          <p className="mt-6 font-medium text-white">
            Download the app to get started and stay informed on the go.
          </p>
          <div className="flex gap-3 mt-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-10"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-10"
            />
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-white mb-3">Company</h3>
          <ul className="space-y-2">
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Investor Charter</a></li>
            <li><a href="#">Premium Service</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold text-white mb-3">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#">Insights</a></li>
            <li><a href="#">Credit Research</a></li>
            <li><a href="#">Stocks</a></li>
            <li><a href="#">Calculators</a></li>
            <li><a href="#">Tools</a></li>
          </ul>
        </div>

        {/* Register */}
        <div>
          <h3 className="font-semibold text-white mb-3">Register</h3>
          <ul className="space-y-2">
            <li><a href="#">Free Trial</a></li>
            <li><a href="#">Log In</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Fine Print */}
        <div>
          <h3 className="font-semibold text-white mb-3">Fine Print</h3>
          <ul className="space-y-2">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Disclaimer</a></li>
            <li><a href="#">Grievance Redressal</a></li>
            <li><a href="#">Refund Policy</a></li>
            <li><a href="#">Client Acceptance</a></li>
            <li><a href="#">User Agreement</a></li>
          </ul>
        </div>
      </div>

      {/* Social Media */}
      <div className="main-container pb-8 flex gap-4 justify-end text-xl text-gray-400">
        <FaFacebook className="hover:text-white cursor-pointer" />
        <FaTwitter className="hover:text-white cursor-pointer" />
        <FaLinkedin className="hover:text-white cursor-pointer" />
        <FaInstagram className="hover:text-white cursor-pointer" />
        <FaYoutube className="hover:text-white cursor-pointer" />
        <FaTelegram className="hover:text-white cursor-pointer" />
      </div>

      {/* Divider */}
      <hr className="border-gray-700" />

      {/* Bottom Section */}
      <div className="main-container py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold text-white mb-2">
            SEBI Registration Details:
          </h3>
          <p>Name: Demo Pvt Ltd</p>
          <p>Type: Non-Individual</p>
          <p>Reg. No: INH0000000</p>
          <p>Validity: Perpetual</p>
          <p>BSE Enlistment No: 1234</p>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-2">
            Company Registration Details:
          </h3>
          <p>Name: Demo Pvt Ltd</p>
          <p>Address: 123 Street, City, 560000</p>
          <p>Tel: +91-9999999999</p>
          <p>Email: info@demo.com</p>
          <p>CIN: U12345KA2025PTC123456</p>
          <p>GST: 29ABCDE1234F1Z0</p>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-2">
            Bank Account Details:
          </h3>
          <p>Name: Demo Pvt Ltd</p>
          <p>Bank: ICICI BANK</p>
          <p>AC No: 0123456789</p>
          <p>IFSC: ICIC0000123</p>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-2">SEBI Local Office:</h3>
          <p>Address: Demo Building, City</p>
          <p>Tel: +91-080-22222222</p>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-2">Compliance Officer:</h3>
          <p>Name: John Doe</p>
          <p>Email: compliance@demo.com</p>
          <p>Tel: +91-9999999999</p>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-700" />

      {/* Copyright */}
      <div className="main-container py-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs">
        <p>All Rights Reserved | © Copyright 2025</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Use</a>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="main-container pb-8 text-gray-400 text-xs">
        <p>
          Disclaimer: Investments in the securities market are subject to market
          risks. Read all related documents carefully before investing.
          Registration granted by SEBI, certification from NISM, and membership
          from BASL does not guarantee the intermediary’s performance or provide
          any assurance of returns to investors.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
