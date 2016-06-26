import React, { Component, PropTypes } from 'react';

class NewProduct extends Component {

  handleOnClick = (e) => {
    e.preventDefault();
    this.props.onNewProduct();
  };

  render() {
    return (
      <button
        type="button"
        className="btn btn-primary"
        onClick={this.handleOnClick}
      >
        <i className="fa fa-plus" />
        <span className="hidden-xs-down"> New product</span>
      </button>
    );
  }
}

NewProduct.propTypes = {
  onNewProduct: PropTypes.func.isRequired,
};

export default NewProduct;
