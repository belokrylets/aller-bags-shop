import PageHeader from "components/UI/PageHeader"
import { useAppDispatch, useAppSelector } from "hooks/redux"
import React, { useLayoutEffect, useState } from "react"
import { Button, Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { links } from "shared/helpers/navbarLinks"
import { IBasketProducts } from "store/reducers/basketSlice/basket.modal"
import { basketSelector } from "store/reducers/basketSlice/basketSlice"
import { ordersSelector } from "store/reducers/ordersSuccessSlice/ordersSuccessSlice"
import { IProducts } from "store/reducers/productsSlice/products.modal"
import { productsSelector } from "store/reducers/productsSlice/productsSlice"
import OrderSuccessCard from "./OrderSuccessCard"

const SelectedOrder = () => {
  const params = useParams()
  const orderId = params.id
  const [productsList, setProductsList] = useState<IProducts[]>([])
  const allOrders = useAppSelector(ordersSelector.selectEntities)
  const selectedOrder = allOrders[orderId!]
  console.log("productsList", productsList)
  const allProducts = useAppSelector(productsSelector.selectEntities)

  const reduceCallBack = (acc: number, product: IProducts) => {
    acc += product.price!
    return acc
  }

  useLayoutEffect(() => {
    const selectedProducts: IProducts[] = selectedOrder!.productsIds.map(
      (productId) => allProducts[productId]!
    )
    setProductsList(selectedProducts)
  }, [])

  const totalPrice = productsList.reduce(reduceCallBack, 0)

  return (
    <main className="selected__order">
      <Container fluid="xxl">
        <PageHeader title={links.selectedOrder.title} />
        <div className="selected__order__content">
          <div className="selected__order__content__products">
            <div className="selected__order__content__products__title">
              <h2>Товары</h2>
            </div>
            <div className="selected__order__content__products__list">
              {productsList.map((product) => (
                <OrderSuccessCard
                  key={product.id}
                  basketProductId={product.id}
                  product={product}
                />
              ))}
            </div>
          </div>
          <div className="selected__order__content__info">
            <div className="selected__order__content__buyer">
              <div className="selected__order__content__buyer__title">
                <h2>Покупатель</h2>
              </div>
              <div className="selected__order__content__buyer__block buyer__block">
                <div className="buyer__block__item">
                  <div className="buyer__block__title">ФИО:</div>
                  <div className="buyer__block__value">
                    {selectedOrder!.fullName}
                  </div>
                </div>
                <div className="buyer__block__item">
                  <div className="buyer__block__title">Почта</div>
                  <div className="buyer__block__value">
                    {selectedOrder!.email}
                  </div>
                </div>
                <div className="buyer__block__item">
                  <div className="buyer__block__title">Телефон</div>
                  <div className="buyer__block__value">
                    {selectedOrder!.phone}
                  </div>
                </div>
              </div>
            </div>
            <div className="selected__order__content__total">
              <div className="selected__order__content__total__title">
                <h2>Итого</h2>
              </div>
              <div className="selected__order__content__total__block total__block">
                <div className="total__block__products">
                  <div className="total__block__title">Количество товаров</div>
                  <div className="total__block__value">
                    {productsList.length} шт.
                  </div>
                </div>
                <div className="total__block__price">
                  <div className="total__block__title">Товаров на сумму</div>
                  <div className="total__block__value">{totalPrice} руб.</div>
                </div>
                <div className="total__block__general">
                  <div className="total__block__title">Итого</div>
                  <div className="total__block__value">{totalPrice} руб.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}

export default SelectedOrder
