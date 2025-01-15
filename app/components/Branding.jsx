import React from 'react';

const Branding = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px', color: '#fff' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Our Partners</h1>
      <p style={{ marginTop: '10px', marginBottom: '30px' }}>
        We work with a range of financial and technology partners from across the world.
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap', // Allows images to wrap to the next line
          gap: '20px',
          justifyContent: 'center', // Centers the images
        }}
      >
        <img
          src="/11.png"
          alt="Ethereum"
          style={{
            maxWidth: '150px',
            width: '100%', // Ensures image scales responsively
            objectFit: 'contain',
          }}
        />
        <img
          src="/22.png"
          alt="Trading Technologies"
          style={{
            maxWidth: '150px',
            width: '100%', // Ensures image scales responsively
            objectFit: 'contain',
          }}
        />
        <img
          src="/33.png"
          alt="Binance Smart Chain"
          style={{
            maxWidth: '150px',
            width: '100%', // Ensures image scales responsively
            objectFit: 'contain',
          }}
        />
        <img
          src="/44.png"
          alt="Coq-yx"
          style={{
            maxWidth: '150px',
            width: '100%', // Ensures image scales responsively
            objectFit: 'contain',
          }}
        />
        <img
          src="/55.png"
          alt="Chainlink"
          style={{
            maxWidth: '150px',
            width: '100%', // Ensures image scales responsively
            objectFit: 'contain',
          }}
        />
        <img
          src="/66.png"
          alt="Data Stream"
          style={{
            maxWidth: '150px',
            width: '100%', // Ensures image scales responsively
            objectFit: 'contain',
          }}
        />
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            h1 {
              font-size: 2rem; /* Adjust title size for smaller screens */
            }

            p {
              font-size: 0.9rem; /* Adjust paragraph size */
              margin: 10px 20px; /* Add horizontal padding */
            }

            img {
              max-width: 120px; /* Reduce image size */
            }
          }

          @media (max-width: 480px) {
            h1 {
              font-size: 1.8rem; /* Smaller font size for very small screens */
            }

            p {
              font-size: 0.8rem; /* Further reduce paragraph size */
            }

            img {
              max-width: 100px; /* Smaller images for very small screens */
            }
          }
        `}
      </style>
    </div>
  );
};

export default Branding;
