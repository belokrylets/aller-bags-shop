import { useAppSelector } from "hooks/redux"
import React from "react"
import { Button } from "react-bootstrap"
import { IBasketProducts } from "store/reducers/basketSlice/basket.modal"
import { basketSelector } from "store/reducers/basketSlice/basketSlice"
import { productsSelector } from "store/reducers/productsSlice/productsSlice"

const BasketTotal = () => {
  const allProducts = useAppSelector(productsSelector.selectEntities)
  const basketProducts = useAppSelector(basketSelector.selectAll)

  const reduceCallBack = (acc: number, product: IBasketProducts) => {
    acc += allProducts[product.productId]?.price!
    return acc
  }

  const totalPrice = basketProducts.reduce(reduceCallBack, 0)
  return (
    <div className="basket__content__total">
      <div className="basket__content__total__title">
        <h2>Итого</h2>
      </div>
      <div className="basket__content__total__block total__block">
        <div className="total__block__products">
          <div className="total__block__title">Количество товаров</div>
          <div className="total__block__value">{basketProducts.length} шт.</div>
        </div>
        <div className="total__block__price">
          <div className="total__block__title">Товаров на сумму</div>
          <div className="total__block__value">{totalPrice} руб.</div>
        </div>
        <div className="total__block__general">
          <div className="total__block__title">Итого</div>
          <div className="total__block__value">{totalPrice} руб.</div>
        </div>
        <div className="total__block__submit">
          <Button>Оформить заказ</Button>
        </div>
      </div>
    </div>
  )
}

export default BasketTotal
