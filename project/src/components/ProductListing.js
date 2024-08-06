import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';

const products = [
  { id: 1, name: 'Fiddle Leaf Fig', price: 50, category: 'Indoor', img: 'fiddle-leaf.jpg' },
  { id: 2, name: 'Snake Plant', price: 30, category: 'Indoor', img: 'snake-plant.jpg' },
  { id: 3, name: 'Aloe Vera', price: 15, category: 'Succulents', img: 'aloe-vera.webp' },
  { id: 4, name: 'Cactus', price: 20, category: 'Succulents', img: 'cactus.webp' },
  { id: 5, name: 'Spider Plant', price: 25, category: 'Air Purifying', img: 'spider-plant.jpg' },
  { id: 6, name: 'Peace Lily', price: 40, category: 'Air Purifying', img: 'peace-lily.jpg' }
];

const ProductListing = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
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

  const headingStyle = {
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const productListStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  };

  const productCardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    padding: '10px',
    textAlign: 'center',
    width: '200px',
    backgroundColor: '#fff',
    color: '#333',
  };

  const imageStyle = {
    borderRadius: '8px',
    width: '100%',
    height: 'auto',
    marginBottom: '10px',
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

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h2 style={headingStyle}>Our Products</h2>
        <div style={productListStyle}>
          {products.map(product => (
            <div key={product.id} style={productCardStyle}>
              <img src={product.img} alt={product.name} style={imageStyle} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button style={buttonStyle} onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
