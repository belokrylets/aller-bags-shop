import { useAppDispatch, useAppSelector } from "hooks/redux"
import React from "react"
import { actions, basketSelector } from "store/reducers/basketSlice/basketSlice"
import { productsSelector } from "store/reducers/productsSlice/productsSlice"
import BasketProductCard from "./BasketProductCard"
import * as basketApi from "api/basketApi"

const BasketProducts = () => {
  const dispatch = useAppDispatch()
  const allProducts = useAppSelector(productsSelector.selectEntities)
  const basketProducts = useAppSelector(basketSelector.selectAll)
  const basketId = useAppSelector((state) => state.basket.baskedId)
  const removeAllHandle = async () => {
    const clearBasket = await basketApi.clearBasket(basketId)
    alert(clearBasket)
    dispatch(actions.removeAllProducts())
  }
  return (
    <div className="basket__content__products">
      <div className="basket__content__products__title">
        <h2>Товары</h2>
        <span onClick={removeAllHandle}>удалить все</span>
      </div>
      {basketProducts.length ? (
        <div className="basket__content__products__list">
          {basketProducts.map((product) => (
            <BasketProductCard
              key={product.id}
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
