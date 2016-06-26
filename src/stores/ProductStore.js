import {observable, computed} from 'mobx';
import ProductModel from '../models/ProductModel';

export default class ProductStore {
  @observable products = [];

  addProduct(product) {
    this.products.unshift(new ProductModel(this, product));
  }

  toJS() {
    return this.products.map(product => product.toJS());
  }

  static fromJS(array) {
    const productStore = new ProductStore();
    productStore.products = array.map(item => ProductModel.fromJS(productStore, item));
    return productStore;
  }
}
