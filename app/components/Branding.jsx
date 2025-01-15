import React from 'react';

const Branding = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px', color: '#fff' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Our Partners</h1>
      <p style={{ marginTop: '10px', marginBottom: '30px' }}>
        We work with a range of financial and technology partners from across the world.
      </p>

      <div style={{
        display: 'flex',
        overflowX: 'auto',
        gap: '20px',
        paddingBottom: '20px',
        justifyContent: 'center'
      }}>
        <img src="/11.png" alt="Ethereum" style={{ maxWidth: '150px', objectFit: 'contain' }} />
        <img src="/22.png" alt="Trading Technologies" style={{ maxWidth: '150px', objectFit: 'contain' }} />
        <img src="/33.png" alt="Binance Smart Chain" style={{ maxWidth: '150px', objectFit: 'contain' }} />
        <img src="/44.png" alt="Coq-yx" style={{ maxWidth: '150px', objectFit: 'contain' }} />
        <img src="/55.png" alt="Chainlink" style={{ maxWidth: '150px', objectFit: 'contain' }} />
        <img src="/66.png" alt="Data Stream" style={{ maxWidth: '150px', objectFit: 'contain' }} />
      </div>
    </div>
  );
};

export default Branding;
