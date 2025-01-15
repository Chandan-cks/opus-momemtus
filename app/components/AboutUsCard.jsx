import React from "react";

const AboutUsCard = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px 20px",
        color: "#fff",
        backgroundColor: "#121212",
      }}
    >
      <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}>
        What We Do
      </h2>
      <p style={{ marginTop: "10px", marginBottom: "30px", fontSize: "1rem" }}>
        We specialize in innovative, market-neutral investment solutions designed for consistency and reduced risk.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Card 1 */}
        <div
          style={{
            backgroundColor: "#1c1c1c",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <img
            src="./1.png"
            alt="Proven"
            style={{
              width: "80px",
              height: "80px",
              margin: "0 auto 15px",
            }}
          />
          <h3 style={{ fontSize: "1.2rem", fontWeight: "bold", color: "yellow" }}>
            Proven Strategies
          </h3>
          <p style={{ fontSize: "0.9rem", marginTop: "10px" }}>
            With decades of expertise, we combine advanced quantitative models and diverse asset class strategies to
            ensure consistent and reliable returns in all market conditions.
          </p>
        </div>

        {/* Card 2 */}
        <div
          style={{
            backgroundColor: "#1c1c1c",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <img
            src="./2.png"
            alt="Cutting-edge Technology"
            style={{
              width: "80px",
              height: "80px",
              margin: "0 auto 15px",
            }}
          />
          <h3 style={{ fontSize: "1.2rem", fontWeight: "bold", color: "yellow" }}>
            Cutting-edge Technology
          </h3>
          <p style={{ fontSize: "0.9rem", marginTop: "10px" }}>
            Our trading and technology experts utilize advanced tools including blockchain, market sentiment analysis,
            and AI-driven operations management.
          </p>
        </div>

        {/* Card 3 */}
        <div
          style={{
            backgroundColor: "#1c1c1c",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <img
            src="./3.png"
            alt="Accessible"
            style={{
              width: "80px",
              height: "80px",
              margin: "0 auto 15px",
            }}
          />
          <h3 style={{ fontSize: "1.2rem", fontWeight: "bold", color: "yellow" }}>
            Accessible to All Investors
          </h3>
          <p style={{ fontSize: "0.9rem", marginTop: "10px" }}>
            Our unique technology solutions simplify investing by making institutional-grade investment opportunities
            seamlessly accessible to anyone, anywhere in the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsCard;
