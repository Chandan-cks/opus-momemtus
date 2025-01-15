import React from 'react';
import './ProductPage.css'; // Import your CSS file
// import productImage1 from '/product1.jpg'; // Replace with actual image paths
// import productImage2 from '/product2.jpg';
// import productImage3 from '/product3.jpg';
import { HiArrowCircleRight } from "react-icons/hi";

const ProductPage = () => {
  return (
    <div className="product-page">
      <h1 className="text-4xl font-bold text-white" style={{marginTop:'50px'}}>Our products and services</h1>
        <img src="/Background.png" alt="Background" className='background-img my-10' style={{width: '93%', height:'600px'}} />
      <div className="hero-section">
        <div className="hero-text">
          <h2 className="text-4xl font-bold text-white" style={{ marginBottom:'5%' }}>The future of smart investing</h2>
          <p className="text-white">The OROX app simplifies access to advanced, low-risk strategies. With proven market-neutral solutions, secure management, and blockchain integration, it empowers investors to navigate global markets confidently.</p>
          <HiArrowCircleRight size={50} className="text-white mx-10" style={{ marginLeft: '40%', marginTop: '3%'}} />
        </div>
        <img src="/product2.jpg" alt="Product 2" className="hero-image" />
      </div>

      <div className="product-cards my-5" style={{width: '93%', height:'500px',marginLeft: '5%'}}>
        <div className="product-card">
          <h3 className="text-4xl font-bold text-black my-5">Stable returns with global reach</h3>
          <p>ODN delivers low-risk returns using proven strategies and advanced financial models that excel in volatility. Accessible through the OROX app as a robust, high-yield investment solution.</p>
          <img src="/product1.jpg" alt="Product 1" className='timg1' />
        </div>

        <div className="product-card" style={{backgroundColor:'#19191B', width: '93%', height:'500px'}}>
          <img src="/image.png" alt="logo" className='logo-m' />
          <img src="/product3.jpg" alt="Product 3" className='timg2' />
          <h3 className="text-4xl font-bold text-white my-4">High performance digital token</h3>
          <p className="text-white my-4">The DVOX Token is an asset-backed token that democratizes Web3 investments, offering investors an institutional-grade, risk-adjusted growth product through the OROX app.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;