import { useState } from "react";
import { onChageArgs, ShoppingCart } from "../interfaces/interfaces";

export const useShopingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ShoppingCart;
  }>({});

  const onProductCartChange = ({ product, count }: onChageArgs) => {
    setShoppingCart((previus) => {
      const productInCart: ShoppingCart = previus[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...previus,
          [product.id]: productInCart,
        };
      }

      const { [product.id]: toDelete, ...rest } = previus;
      return rest;
    });
  };

  return {
      shoppingCart,
      onProductCartChange
  }
};
