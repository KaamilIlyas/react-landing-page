import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const totalItems = useSelector(state => state.cart.total);

  const headerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#4CAF50', // Green background for a natural feel
    color: '#fff', // White text for contrast
    borderBottom: '2px solid #388E3C', // Darker green border for separation
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Slight shadow for depth
  };

  const h1Style = {
    marginBottom: '20px',
    fontSize: '2.5rem', // Larger font size for prominence
    textAlign: 'center',
  };

  const navStyle = {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#FFC107', // Light yellow color for links
    fontSize: '16px',
    fontWeight: '500',
    transition: 'color 0.3s, border-bottom 0.3s',
    paddingBottom: '5px',
  };

  const linkHoverStyle = {
    color: '#FFEB3B', // Bright yellow for hover effect
    borderBottom: '2px solid #FFEB3B', // Underline effect on hover
  };

  return (
    <header style={headerStyle}>
      <h1 style={h1Style}>Plant Shop</h1>
      <nav style={navStyle}>
        <Link
          to="/"
          style={linkStyle}
          onMouseOver={e => e.currentTarget.style = { ...linkStyle, ...linkHoverStyle }}
          onMouseOut={e => e.currentTarget.style = linkStyle}
        >
          Home
        </Link>
        <Link
          to="/products"
          style={linkStyle}
          onMouseOver={e => e.currentTarget.style = { ...linkStyle, ...linkHoverStyle }}
          onMouseOut={e => e.currentTarget.style = linkStyle}
        >
          Products
        </Link>
        <Link
          to="/cart"
          style={linkStyle}
          onMouseOver={e => e.currentTarget.style = { ...linkStyle, ...linkHoverStyle }}
          onMouseOut={e => e.currentTarget.style = linkStyle}
        >
          Cart ({totalItems})
        </Link>
      </nav>
    </header>
  );
};

export default Header;
