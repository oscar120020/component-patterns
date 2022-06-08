import { ReactElement } from "react";

export interface ProductProps {
  product: Product;
  children: ReactElement | ReactElement[];
}

export interface Product {
  id: string;
  title: string;
  image?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}


export interface ProductHOCProps {
    ({ product, children }: ProductProps): JSX.Element;
    Title: ({ title }: {title?: string}) => JSX.Element;
    Image: ({ image }: {image?: string}) => JSX.Element;
    Buttons: () => JSX.Element;
}