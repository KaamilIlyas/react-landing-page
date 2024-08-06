import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div
      style={{
        position: 'relative',
        backgroundImage: 'url(/plantshop.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        padding: '20px',
        textAlign: 'center',
        color: 'white',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)', 
          zIndex: '1',
        }}
      ></div>
      <div
        style={{
          position: 'relative',
          zIndex: '2',
        }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Welcome to Plant Shop</h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '30px' }}>We offer a wide variety of houseplants to brighten up your home.</p>
        <Link to="/products">
          <button style={{
            backgroundColor: '#28a745',
            border: 'none',
            color: 'white',
            padding: '15px 30px',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '1rem',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            margin: '10px',
            zIndex: '2'
          }}>
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
