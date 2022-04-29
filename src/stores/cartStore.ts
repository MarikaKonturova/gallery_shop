import { makeAutoObservable } from "mobx";
import { TPainting } from "../types";
class CartStore {
  public cartPaintings: TPainting[] = []
  constructor() {
    makeAutoObservable(this);
  }
  get getCount() {
    return this.cartPaintings.length;
  }
  addToCart = (painting: TPainting) => {
    this.cartPaintings.push(painting);
  };
}

export default CartStore;
