import {observable} from 'mobx';

export default class ProductModel {
  store;
  id;
  name;
  image;
  price;
  @observable inventory;

  constructor(store, {id, name, image, price, inventory}) {
    this.store  = store;
    this.id     = id;
    this.name   = name;
    this.image  = image;
    this.price  = price;
    this.inventory = inventory;
  }

  destroy() {
    this.store.products.remove(this);
  }

  toJS() {
    return {
      id: this.id,
      name: this.name,
      image: this.image,
      price: this.price,
      inventory: this.inventory,
    };
  }

  static fromJS(store, object) {
    return new ProductModel(
      store,
      object.id,
      object.name,
      object.image,
      object.price,
      object.inventory
    );
  }
}
