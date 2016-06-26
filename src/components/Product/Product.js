import faker from 'faker';
import styles from './Product.scss';
import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';

import ProductHeader from './ProductHeader';
import ProductItem from './ProductItem';

function generateFakeProduct () {
  return {
    id: faker.random.uuid(),
    name: faker.commerce.productName(),
    image: faker.random.image(),
    price: faker.commerce.price(),
    inventory: faker.random.number(10)
  };
}

@observer
class Product extends Component {

  handleNewProduct = () => {
    const product = generateFakeProduct();
    this.props.addProduct(product);

  };

  renderEmptyProduct() {
    return (
      <div className="col-xs-12 text-xs-center text-muted">
        No item.
      </div>
    );
  }

  renderProductList() {
    return (
      this.props.products.map(product => (
        <div
          key={product.id}
          className="col-xs-12 col-sm-6 col-md-4"
        >
          <ProductItem
            product={product}
          />
        </div>
      ))
    )
  }

  render() {
    const { products, addProduct } = this.props;
    const productsCount = products.length;

    return (
      <div className={styles.root}>
        <ProductHeader
          productsCount={productsCount}
          onNewProduct={this.handleNewProduct}
        />

        <hr />

        <div className="row">
          {productsCount === 0
            ? this.renderEmptyProduct()
            : this.renderProductList()
          }
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  products: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired,
};

export default Product;
