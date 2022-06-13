import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { products } from "../data/products";
import { useShopingCart } from "../hooks/useShopingCart";
import { Product } from "../interfaces/interfaces";
import "../styles/custom-styles.css";



export const ShoppingPage = () => {

  const {onProductCartChange, shoppingCart} = useShopingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product: Product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark"
            value={shoppingCart[product.id]?.count || 0}
            onChange={onProductCartChange}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="white-text" />
            <ProductButtons className="custom-button" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.keys(shoppingCart).map((key: string) => (
          <ProductCard
            key={key}
            product={shoppingCart[key]}
            className="bg-dark"
            style={{ width: "100px" }}
            value={shoppingCart[key].count}
            onChange={onProductCartChange}
          >
            <ProductImage className="custom-image" />
            <ProductButtons className="custom-button" />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
