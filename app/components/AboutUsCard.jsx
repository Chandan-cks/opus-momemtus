import React from 'react';

const AboutUsCard = () => {
  return (
    <div style={{ textAlign: 'center', padding: '100px', color: '#fff' }}>
      <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>What We Do</h2>
      <p style={{ marginTop: '20px', marginBottom: '20px' }}>
        We specialize in innovative, market-neutral investment solutions designed for consistency and reduced risk.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gridGap: '20px',
        marginTop: '20px'
      }}>
        <div style={{
          backgroundColor: '#000000',
          borderRadius: '5px',
          padding: '20px',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          color: '#fff'
        }}>
          <img src="./1.png" alt="Proven" style={{ margin: 'auto' }} />
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'yellow' }}>Proven Strategies</h3>
          <p>
            With decades of expertise, we combine advanced quantitative models and diverse asset class strategies to ensure consistent and reliable returns in all market conditions.
          </p>
        </div>

        <div style={{
          backgroundColor: '#000000',
          borderRadius: '5px',
          padding: '20px',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          color: '#fff'
        }}>
          <img src="./2.png" alt="Cutting" style={{ margin: 'auto' }} />
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'yellow' }}>Cutting-edge Technology</h3>
          <p>
            Our trading and technology experts utilize advanced tools including blockchain, market sentiment analysis, and AI-driven operations management.
          </p>
        </div>

        <div style={{
          backgroundColor: '#000000',
          borderRadius: '5px',
          padding: '20px',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          color: '#fff'
        }}>
          <img src="./3.png" alt="Accessible" style={{ margin: 'auto' }} />
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'yellow' }}>Accessible to All Investors</h3>
          <p>
            Our unique technology solutions simplify investing by making institutional-grade investment opportunities seamlessly accessible to anyone, anywhere in the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsCard;
