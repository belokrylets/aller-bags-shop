import { useAppSelector } from "hooks/redux"
import React from "react"
import { basketSelector } from "store/reducers/basketSlice/basketSlice"
import { productsSelector } from "store/reducers/productsSlice/productsSlice"
import BasketProductCard from "./BasketProductCard"

const BasketProducts = () => {
  const allProducts = useAppSelector(productsSelector.selectEntities)
  const basketProducts = useAppSelector(basketSelector.selectAll)

  return (
    <div className="basket__content__products">
      <div className="basket__content__products__title">
        <h2>Товары</h2>
      </div>
      {basketProducts.length ? (
        <div className="basket__content__products__list">
          {basketProducts.map((product) => (
            <BasketProductCard
              basketProductId={product.id}
              product={allProducts[product.productId]!}
            />
          ))}
        </div>
      ) : (
        <div className="basket__content__products__empty__basket">
          Ваша корзина пуста
        </div>
      )}
    </div>
  )
}

export default BasketProducts
