import styles from './Product.scss'
import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import AddToCart from './AddToCard';

@observer
class ProductItem extends Component {

  handleAddToCart = (e) => {
    e.preventDefault();
    this.props.product.inventory--;
  }

  render() {
    const { product } = this.props;

    return (
      <div className={`${styles.item} card`}>
        <img
          className="card-img-top"
          width="100%"
          height={180}
          alt={product.name}
          src={product.image}
        />

        <div className="card-block">
          <h6 className={`${styles.item__title} card-title`}>
            {product.name}
          </h6>
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: ${product.price}</li>
          <li className="list-group-item">Inventory: {product.inventory}</li>
        </ul>

        <div className="card-block">
          <AddToCart
            isSoldOut={!product.inventory}
            onAddToCart={this.handleAddToCart}
          />
        </div>
      </div>
    );
  }
}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItem;

