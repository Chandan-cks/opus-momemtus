import React from "react";

export default function GetInTouchPopup({ isVisible, togglePopup }) {
  if (!isVisible) return null;

  return (
    <>
      {/* Background Blur */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
        onClick={togglePopup}
      ></div>

      {/* Popup Content */}
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-gray-900 text-white w-[90%] max-w-md rounded-lg shadow-lg p-6 relative">
          {/* Close Button */}
          <button
            onClick={togglePopup}
            className="absolute top-3 right-3 text-white hover:text-gray-400"
            aria-label="Close popup"
          >
            ✕
          </button>
          <h2 className="text-2xl font-semibold mb-4">Get in touch</h2>
          <form>
            {/* Name Field */}
            <label className="block mb-2 text-sm font-medium">
              Your name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full mb-4 p-2 border border-yellow-500 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your name"
            />

            {/* Email Field */}
            <label className="block mb-2 text-sm font-medium">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full mb-4 p-2 border border-yellow-500 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your email"
            />

            {/* Reason for Contact */}
            <label className="block mb-2 text-sm font-medium">
              Reason for contact<span className="text-red-500">*</span>
            </label>
            <select className="w-full mb-4 p-2 border border-yellow-500 rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-yellow-500">
              <option value="Investor Enquiry">Investor Enquiry</option>
              <option value="General Query">General Query</option>
              <option value="Support">Support</option>
            </select>

            {/* Message Field */}
            <label className="block mb-2 text-sm font-medium">
              Type your message
            </label>
            <textarea
              className="w-full mb-4 p-2 border border-yellow-500 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Type your message"
              rows="4"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-yellow-500 text-black py-2 rounded-lg hover:bg-yellow-600 focus:outline-none"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
