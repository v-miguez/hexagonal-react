import React from "react";
import { Basket } from "./domain/models/Basket";
import { Product } from "./domain/models/Product";
import { basketService } from "./domain/services/Basket.service";
import { ProductList } from "./infrastructure/components/ProductList";

type AppProps = {
  msg: string;
};

const App: React.FC<AppProps> = ({ msg }) => {
  const [basket, setBasket] = React.useState<Basket | null>(null);

  const handleAddToCart = (product: Product) => {
    setBasket(basketService.addProductToBasket(basket, product));
  };

  return (
    <div className="App">
      <h1>{msg}</h1>
      <ProductList onSelectProduct={handleAddToCart} />
      {basket && <p>Items on basket: {basket.items.length}</p>}
    </div>
  );
};

export default App;
