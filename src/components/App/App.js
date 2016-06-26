import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import Header from './Header';
import Product from '../Product/Product';

@observer
class App extends Component {

  render() {
    const { productStore } = this.props;

    return (
      <div>
        <div>
          <Header />

          <div className="container-fluid">
            <Product
              addProduct={productStore.addProduct}
              products={productStore.products}
            />
          </div>

        </div>
        <DevTools />
      </div>
    );
  }

  onReset = () => {
    this.props.appStore.resetTimer();
  }
};

App.propTypes = {
  productStore: PropTypes.object.isRequired,
};

export default App;
