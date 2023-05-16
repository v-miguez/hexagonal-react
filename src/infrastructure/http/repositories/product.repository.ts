import { Product } from "../../../domain/models/Product";
import { ProductDTO } from "../dto/ProductDTO";
import { http } from "../http";

export const productRepository = {
  getProducts: async () => {
    const products = await http.get<ProductDTO[]>(
      "https://testshop.free.beeceptor.com/"
    );
    return products.map(
      (productDto): Product => ({
        id: productDto.product_id,
        title: productDto.title,
        price: Number(productDto.price),
      })
    );
  },
};
