import React, { Component, PropTypes } from 'react';
import NewProduct from './NewProduct';

class ProductHeader extends Component {
  render() {
    const { productsCount, onNewProduct } = this.props;

    return (
      <div className="row">
        <div className="col-xs-9 col-sm-6">
          <h3>
            Products
            <small> ({productsCount} { productsCount > 1 ? 'items' : 'item'})</small>
          </h3>
        </div>
        <div className="col-xs-3 col-sm-6 text-xs-right">
          <NewProduct
            onNewProduct={onNewProduct}
          />
        </div>
      </div>
    );
  }
}

ProductHeader.propTypes = {
  productsCount: PropTypes.number.isRequired,
  onNewProduct: PropTypes.func.isRequired,
};

export default ProductHeader;
