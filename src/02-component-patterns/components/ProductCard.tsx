import { useProduct } from "../hooks/useProduct";
import styles from "../styles/styles.module.css";
import { createContext } from "react";
import { ProductContextProps, ProductProps } from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export const ProductCard = ({ product, children }: ProductProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }} >
      <div className={styles.productCard}>
        {children}
      </div>
    </Provider>
  );
};

