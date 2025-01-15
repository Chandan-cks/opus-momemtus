import React from "react";

const Mission = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#000",
          color: "#fff",
          textAlign: "center",
          padding: "20px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "20px" }}>
          Opus Momentus' mission
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.6",
            padding: "0 20px",
            margin: "10px auto",
            maxWidth: "800px",
          }}
        >
          Our mission is to democratize access to a range of advanced investment options, break traditional barriers to entry with our innovative solutions, and contribute to a more equitable global investment landscape.
        </p>
      </div>

      <div
        style={{
          background: "linear-gradient(to right, #261F19, #442F18)",
          color: "#fff",
          padding: "40px",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Arial, sans-serif",
          width: "100%",
          height: "500px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginRight: "50px",
            }}
          >
            <img
              src="/bill-gates.jpg"
              alt="Daniel Mo"
              style={{
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                border: "2px solid #fff",
              }}
            />
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Daniel Mo</h3>
              <p style={{ fontSize: "1.2rem", color: "#bbb" }}>Founder & MD</p>
            </div>
          </div>

          <div style={{ flex: 1 }}>
            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.6",
                textAlign: "justify",
              }}
            >
              Opus Momentus is an emerging innovator in fintech and investments,
              leveraging years of proprietary trading expertise and cutting-edge
              technology. Our global partnerships with industry specialists and
              fintech leaders position us at the forefront of delivering curated,
              risk-adjusted solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
