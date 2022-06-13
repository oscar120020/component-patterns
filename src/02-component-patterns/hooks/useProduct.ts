import { useEffect, useState } from "react";
import { onChageArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
  onChange?: (args: onChageArgs) => void;
  value?: number;
  product: Product;
}

export const useProduct = ({ onChange, product, value = 0 }: useProductArgs) => {
  const [counter, setCounter] = useState(value);


  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0)
    setCounter(newValue);
    onChange && onChange({count: newValue, product})
  };

  useEffect(() => {
    setCounter(value)
  }, [value])

  return {
      counter,
      increaseBy
  }
};
