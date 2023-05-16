import { generateUid } from "../../infrastructure/uuid/uuid";
import { Basket } from "../models/Basket";
import { Product } from "../models/Product";

const hasProduct = (basket: Basket, product: Product) =>
  basket.items.find((item) => item.id === product.id);

const createBasket = (product: Product) => ({
  id: generateUid(),
  items: [product],
});

const increaseBasket = (basket: Basket, product: Product): Basket => ({
  ...basket,
  items: [...basket.items, product],
});

const addProductToBasket = (basket: Basket | null, product: Product) =>
  basket
    ? hasProduct(basket, product)
      ? basket
      : increaseBasket(basket, product)
    : createBasket(product);

export const basketService = {
  addProductToBasket,
};
