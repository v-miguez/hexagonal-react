import { productRepository } from "../../infrastructure/http/repositories/product.repository";

export const productService = {
    getProducts: () => {
    return productRepository.getProducts();
  },
};
