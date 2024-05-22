import React from 'react';
import PropTypes from 'prop-types';

const CartPage = ({ cartItems, totalPrice }) => {
  console.log(cartItems)
  if (!cartItems) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <div>
        <h1>Cart</h1>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
        <h2>Total: ${totalPrice}</h2>
      </div>
    </React.Fragment>
  );
};

CartPage.propTypes = {
  cartItems: PropTypes.array.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

CartPage.defaultProps = {
  cartItems: [],
  totalPrice: 0,
};

export default CartPage;