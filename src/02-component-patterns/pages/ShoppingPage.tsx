import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import '../styles/custom-styles.css'

const product = {
  id: "1",
  title: "Coffe Mug - Card",
  image: "coffee-mug.png"
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />
        <div style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }} >
          <ProductCard product={product} className="bg-dark">
            <ProductCard.Image className="custom-image" />
            <ProductCard.Title className="white-text" />
            <ProductCard.Buttons className="custom-button" />
          </ProductCard>

          <ProductCard 
            product={product}
            className="bg-dark"
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="white-text" />
            <ProductButtons className="custom-button" />
          </ProductCard>

          <ProductCard 
            product={product}
            style={{
              backgroundColor: "#70D1F8"
            }}
          >
            <ProductImage style={{
              boxShadow: "0px 10px 10px gray"
            }} />
            <ProductTitle style={{
              color: "green"
            }} />
            <ProductButtons />
          </ProductCard>
        </div>
    </div>
  )
}
