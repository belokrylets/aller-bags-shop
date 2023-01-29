import React from "react"
import { IProducts } from "store/reducers/productsSlice/products.modal"
import ProductCard from "./ProductCard"

interface ProductListProps {
  productsList: IProducts[]
}

const ProductList: React.FC<ProductListProps> = ({ productsList }) => {
  return (
    <div className="product__list">
      {productsList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList
