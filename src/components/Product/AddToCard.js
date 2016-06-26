import React, { Component, PropTypes } from 'react';

class AddToCart extends Component {

  render() {
    const { isSoldOut, onAddToCart } = this.props;
    const btnClass      = isSoldOut
      ? 'btn btn-default'
      : 'btn btn-primary';
    const label = isSoldOut
      ? <span>Sould Out!</span>
      : <span><i className="fa fa-cart-plus" /> Add To Cart</span>

    return (
      <button
        className={btnClass}
        onClick={onAddToCart}
        disabled={isSoldOut}
      >{label}</button>
    );
  }
}

AddToCart.propTypes = {
  isSoldOut: PropTypes.bool.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default AddToCart;

