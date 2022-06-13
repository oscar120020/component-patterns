import { useProduct } from "../hooks/useProduct";
import styles from "../styles/styles.module.css";
import React, { createContext } from "react";
import { onChageArgs, Product, ProductContextProps } from "../interfaces/interfaces";

export interface Props {
  product: Product;
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChageArgs) => void;
  value?: number;
}

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export const ProductCard = ({ product, children, className, style, onChange, value }: Props) => {
  const { counter, increaseBy } = useProduct({onChange, product, value});

  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }} >
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children}
      </div>
    </Provider>
  );
};

