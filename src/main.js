import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import ProductStore from './stores/ProductStore';
import App from './components/App/App';

const productStore = ProductStore.fromJS([]);

render(
  <AppContainer>
    <App 
      productStore={productStore}
    />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./components/App/App', () => {
    const NextApp = require('./components/App/App').default;

    render(
      <AppContainer>
        <NextApp 
          productStore={productStore}
        />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
