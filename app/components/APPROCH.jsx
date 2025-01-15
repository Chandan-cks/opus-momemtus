import React from 'react';

const Approach = () => {
  const steps = [
    {
      title: 'Capital Preservation',
      description: 'We minimize risk on invested capital while maximizing on performance and growth stability.',
    },
    {
      title: 'Data-driven Decisions',
      description: 'Experts with proven “Alpha” use quantitative analysis and advanced algorithms to deliver precision in trading.',
    },
    {
      title: 'Balanced Exposure',
      description: 'Strategically allocate funds based on market analysis to enhance diversification and deliver superior risk-adjusted returns.',
    },
    {
      title: 'Leverage Volatility',
      description: 'Harness high-frequency, market-neutral strategies to minimize risk and maximize opportunity.',
    },
    {
      title: 'OROX App',
      description: 'Secure, low-cost app offering easy returns, no management fees, and global access via blockchain integration.',
    },
  ];

  return (
    <div className="approach-container">
      <h2 className="text-5xl font-bold" style={{marginTop:'50px', color:'white', textAlign:'center'}}>Our Approach</h2>
      <p style={{marginTop:'10px', color:'white', textAlign:'center'}}>At Opus Momentus, we focus on market-neutral, short-term strategies designed to leverage volatility while minimizing risk.</p>

      <div className="steps" style={{margin:'3% 0 0 30%'}}>
        {steps.map((step, index) => (
          <div key={index} style={{
            display: 'flex',
            alignItems: 'flex-start',
            marginBottom: '20px'
          }}>
            <span 
              style={{
                display: 'inline-block',
                backgroundColor: '#FFD700',
                color: '#000000',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                lineHeight: '30px',
                textAlign: 'center',
                marginRight: '10px'
              }}
            >
              {index + 1}
            </span>
            <div>
              <h3 style={{ color: '#FFD700', fontSize: '24px', fontWeight: 'bold' }}>{step.title}</h3>
              <p style={{ color: '#ffffff' }}>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Approach;