import React, { useState } from "react";
import GetInTouchPopup from "./GetInTouchPopup";

function MainPage() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div>
      <main style={{ paddingTop: "4rem" /* Space for the fixed navbar */ }}>
        {/* Hero Section */}
        <section
          style={{
            backgroundColor: "#000",
            color: "#fff",
            padding: "2rem 1rem",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              lineHeight: 1.4,
            }}
          >
            Expanding investment access with innovation and expertise
          </h1>
          <p
            style={{
              marginTop: "1rem",
              marginBottom: "1.5rem",
              fontSize: "1rem",
              lineHeight: 1.6,
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Opus Momentus simplifies investing by offering innovative products
            that bridge traditional and emerging markets. We blend specialised
            talent with proven technology to deliver empowering solutions
            worldwide.
          </p>
          <button
            style={{
              background: "#fff",
              color: "#000",
              border: "none",
              padding: "0.75rem 1.5rem",
              fontSize: "1rem",
              borderRadius: "25px",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.background = "#f3f3f3")}
            onMouseOut={(e) => (e.target.style.background = "#fff")}
            onClick={togglePopup}
          >
            Get in touch
          </button>
        </section>

        {/* Image Section */}
        <section
          style={{
            backgroundColor: "#000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem 1rem",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "1280px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="/yellow.jpg"
              alt="Abstract visualization"
              style={{
                width: "100%",
                maxWidth: "800px",
                height: "auto",
                borderRadius: "10px",
              }}
            />
          </div>
        </section>
      </main>

      {/* Popup */}
            <GetInTouchPopup
              isVisible={isPopupVisible}
              togglePopup={togglePopup}
            />
    </div>
  );
}

export default MainPage;
