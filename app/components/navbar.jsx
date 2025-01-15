"use client";

import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import GetInTouchPopup from "./GetInTouchPopup"; // Import the popup component

export default function Navbar({ onScrollToAboutUs, onScrollToProductPage, onScrollToApprochPage, onScrollToHomePage}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 shadow-md backdrop-blur-md text-white"
            : "bg-black text-white"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-8">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 w-8 h-8 rounded-full flex items-center justify-center">
              <span className="text-black font-bold">M</span>
            </div>
            <span className="text-lg font-semibold" onClick={onScrollToHomePage}>OPUS MOMENTUS</span>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMobileMenu} aria-label="Toggle menu">
              {isMobileMenuOpen ? (
                <FaTimes className="text-white text-2xl" />
              ) : (
                <FaBars className="text-white text-2xl" />
              )}
            </button>
          </div>

          <ul className="hidden md:flex space-x-8 text-sm">
            <li
              onClick={onScrollToAboutUs}
              className="hover:text-yellow-500 cursor-pointer"
            >
              What we do
            </li>
            <li
              onClick={onScrollToProductPage}
              className="hover:text-yellow-500 cursor-pointer"
            >
              Our products and services
            </li>
            <li
            onClick={onScrollToApprochPage}
            className="hover:text-yellow-500 cursor-pointer">
              Our approach
            </li>
          </ul>

          <button
            onClick={togglePopup}
            className="hidden md:block bg-white text-black px-6 py-2 rounded-full shadow-md hover:bg-gray-200"
          >
            Get in touch
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/90 text-white absolute top-full left-0 w-full shadow-lg">
            <ul className="flex flex-col items-center space-y-4 py-6">
              <li
                onClick={() => {
                  onScrollToAboutUs();
                  toggleMobileMenu();
                }}
                className="hover:text-yellow-500 cursor-pointer"
              >
                What we do
              </li>
              <li
                onClick={() => {
                  onScrollToProductPage();
                  toggleMobileMenu();
                }}
                className="hover:text-yellow-500 cursor-pointer"
              >
                Our products and services
              </li>
              <li
                onClick={() => {
                  onScrollToApprochPage();
                  toggleMobileMenu();
                }}
                className="hover:text-yellow-500 cursor-pointer"
              >
                Our approach
              </li>
              <li>
                <button
                  onClick={() => {
                    togglePopup();
                    toggleMobileMenu();
                  }}
                  className="bg-white text-black px-6 py-2 rounded-full shadow-md hover:bg-gray-200"
                >
                  Get in touch
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <GetInTouchPopup
        isVisible={isPopupVisible}
        togglePopup={togglePopup}
      />
    </>
  );
}
