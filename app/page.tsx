"use client"; // Add this at the top
import { useRef, useEffect } from "react";
import Navbar from "./components/navbar";
import MainPage from "./components/mainpage";
import AboutUsCard from "./components/AboutUsCard";
import Branding from "./components/Branding";
import ProductPage from "./components/ProductPage";
import Mission from "./components/Mission";
import APPROCH from "./components/APPROCH";
import Invite from "./components/Invite";
import CONNECT from "./components/CONNECT";

import "./globals.css";

export default function Home() {
  const aboutUsRef = useRef<HTMLDivElement>(null); // Ref for AboutUsCard
  const productPageRef = useRef<HTMLDivElement>(null); // Ref for ProductPage
  const approchPageRef = useRef<HTMLDivElement>(null); // Ref for APPROCH section
  const homePageRef = useRef<HTMLDivElement>(null); // Ref for APPROCH section

  useEffect(() => {
    // Scroll to MainPage on initial render
    if (homePageRef.current) {
      homePageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  
  const handleScrollToAboutUs = () => {
    if (aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToProductPage = () => {
    if (productPageRef.current) {
      productPageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToApprochPage = () => {
    if (approchPageRef.current) {
      approchPageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToHomePage = () => {
    if (homePageRef.current) {
      homePageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="scroll-smooth">
      <Navbar
        onScrollToAboutUs={handleScrollToAboutUs}
        onScrollToProductPage={handleScrollToProductPage}
        onScrollToApprochPage={handleScrollToApprochPage}
        onScrollToHomePage={handleScrollToHomePage}
      />

      <div ref={homePageRef}>
        <MainPage />
      </div>
      <div ref={aboutUsRef}>
        <AboutUsCard />
      </div>
      <Branding />
      <div ref={productPageRef}>
        <ProductPage />
      </div>
      <Mission />
      <div ref={approchPageRef}>
        <APPROCH />
      </div>
      <Invite />
      <CONNECT />
    </div>
  );
}
