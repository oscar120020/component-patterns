import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { products } from "../data/products"; 
import styles from "../styles/styles.module.css";
import "../styles/custom-styles.css";

const product = products[0]

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark"
        initialValues={{
          count: 5,
          maxCount: 10,
        }}

      >
        {
          ({reset, count, increaseBy, isMaxCounterReached, maxCount}) => (
            <>
              <ProductImage className="custom-image" />
              <ProductTitle className="white-text" />
              <ProductButtons className="custom-button" />
              <button onClick={reset} >Reset</button>

              <button onClick={() => increaseBy(-2)} >-2</button>
              <button className={`${isMaxCounterReached && styles.disabled}`} onClick={() => increaseBy(+2)} >+2</button>
              <p>{count} - {maxCount}</p>
            </>
          )
        }
      </ProductCard>
    </div>
  );
};
