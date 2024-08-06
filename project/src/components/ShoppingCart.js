import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementItem, decrementItem, removeFromCart } from '../redux/actions';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  const cart = useSelector(state => state.cart.items);
  const totalCost = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    dispatch(incrementItem(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementItem(id));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const containerStyle = {
    position: 'relative',
    backgroundImage: 'url(/plantshop.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    padding: '20px',
    color: 'white',
    overflow: 'hidden',
  };

  const overlayStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', 
    zIndex: '1',
  };

  const contentStyle = {
    position: 'relative',
    zIndex: '2',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const itemStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    padding: '10px',
    width: '100%',
    maxWidth: '600px',
    marginBottom: '20px',
    textAlign: 'center',
  };

  const imageStyle = {
    borderRadius: '8px',
    width: '100px',
    height: 'auto',
    marginRight: '20px',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    border: 'none',
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    borderRadius: '4px',
    cursor: 'pointer',
    margin: '5px',
    transition: 'background-color 0.3s ease',
  };

  const checkoutButtonStyle = {
    backgroundColor: '#28a745',
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h2 style={{ marginBottom: '20px' }}>Shopping Cart</h2>
        <p style={{ marginBottom: '20px' }}>Total Items: {cart.reduce((total, item) => total + item.quantity, 0)}</p>
        <p style={{ marginBottom: '20px' }}>Total Cost: ${totalCost.toFixed(2)}</p>
        {cart.map(item => (
          <div key={item.id} style={itemStyle}>
            <img src={item.img} alt={item.name} style={imageStyle} />
            <div style={{ flex: '1', textAlign: 'left' }}>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
            <div>
              <button style={buttonStyle} onClick={() => handleIncrement(item.id)}>+</button>
              <button style={buttonStyle} onClick={() => handleDecrement(item.id)}>-</button>
              <button style={buttonStyle} onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
        <button style={{ ...buttonStyle, ...checkoutButtonStyle }}>Checkout (Coming Soon)</button>
        <Link to="/products">
          <button style={buttonStyle}>Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCart;
