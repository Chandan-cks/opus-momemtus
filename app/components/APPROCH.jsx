import React from "react";

const Approach = () => {
  const steps = [
    {
      title: "Capital Preservation",
      description: "We minimize risk on invested capital while maximizing on performance and growth stability.",
    },
    {
      title: "Data-driven Decisions",
      description: "Experts with proven “Alpha” use quantitative analysis and advanced algorithms to deliver precision in trading.",
    },
    {
      title: "Balanced Exposure",
      description: "Strategically allocate funds based on market analysis to enhance diversification and deliver superior risk-adjusted returns.",
    },
    {
      title: "Leverage Volatility",
      description: "Harness high-frequency, market-neutral strategies to minimize risk and maximize opportunity.",
    },
    {
      title: "OROX App",
      description: "Secure, low-cost app offering easy returns, no management fees, and global access via blockchain integration.",
    },
  ];

  return (
    <div className="approach-container">
      <h2
        className="text-5xl font-bold"
        style={{ marginTop: "50px", color: "white", textAlign: "center" }}
      >
        Our Approach
      </h2>
      <p
        style={{
          marginTop: "10px",
          color: "white",
          textAlign: "center",
        }}
      >
        At Opus Momentus, we focus on market-neutral, short-term strategies
        designed to leverage volatility while minimizing risk.
      </p>

      <div
        className="steps"
        style={{
          margin: "3% auto 0 20%",
          maxWidth: "90%",
        }}
      >
        {steps.map((step, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "20px",
              flexWrap: "wrap", // Ensures responsiveness
            }}
          >
            <span
              style={{
                display: "inline-block",
                backgroundColor: "#FFD700",
                color: "#000000",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                lineHeight: "30px",
                textAlign: "center",
                marginRight: "10px",
                flexShrink: 0, // Prevent shrinking on smaller screens
              }}
            >
              {index + 1}
            </span>
            <div
              style={{
                flex: "1 1 auto", // Ensure flexibility of content
              }}
            >
              <h3
                style={{
                  color: "#FFD700",
                  fontSize: "24px",
                  fontWeight: "bold",
                  wordBreak: "break-word", // Handles long words gracefully
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  color: "#ffffff",
                  wordBreak: "break-word", // Prevent text overflow
                }}
              >
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            .steps {
              margin: 3% auto 0 auto;
              padding: 0 20px; /* Add padding for smaller screens */
            }

            h2 {
              font-size: 2rem; /* Adjust title size for smaller screens */
            }

            p {
              font-size: 0.9rem; /* Adjust text size for smaller screens */
            }

            span {
              width: 25px; /* Smaller size for numbers */
              height: 25px;
              line-height: 25px;
            }

            h3 {
              font-size: 20px; /* Adjust heading size */
            }

            p {
              font-size: 0.85rem; /* Adjust paragraph size */
            }
          }

          @media (max-width: 480px) {
            span {
              width: 20px; /* Smaller size for numbers */
              height: 20px;
              line-height: 20px;
              font-size: 12px; /* Adjust font size inside the circle */
            }

            h3 {
              font-size: 18px; /* Smaller headings for very small screens */
            }

            p {
              font-size: 0.8rem; /* Further reduce paragraph size */
            }
          }
        `}
      </style>
    </div>
  );
};

export default Approach;
