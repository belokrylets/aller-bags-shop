import { useAppDispatch, useAppSelector } from "hooks/redux"
import React from "react"
import { Button, Col, Row } from "react-bootstrap"
import { colorsSelector } from "store/reducers/colorsSlice/colorsSlice"
import { gendersSelector } from "store/reducers/gendersSlice/gendersSlice"
import { IProducts } from "store/reducers/productsSlice/products.modal"
import { getPriceWithSpace } from "shared/utils/getPriceWithSpace"
import * as basketApi from "api/basketApi"
import { actions, basketSelector } from "store/reducers/basketSlice/basketSlice"
import { actions as modalActions } from "store/reducers/modalSlice"

interface ProductDescriptionProps {
  selectedProduct: IProducts
}
const ProductDescription: React.FC<ProductDescriptionProps> = ({
  selectedProduct,
}) => {
  const dispatch = useAppDispatch()
  const allBasket = useAppSelector(basketSelector.selectAll)

  const allGender = useAppSelector(gendersSelector.selectEntities)
  const allColors = useAppSelector(colorsSelector.selectEntities)
  const basketId = useAppSelector((state) => state.basket.baskedId)

  const handleBuyClick = async (basketId: string, productId: string) => {
    if (basketId) {
      const basketProduct = await basketApi.create({ basketId, productId })
      dispatch(actions.addBasketProduct(basketProduct))
    } else {
      dispatch(
        actions.addBasketProduct({
          id: productId,
          basketId: "",
          productId: productId,
        })
      )
    }
  }
  return (
    <div className='product__description'>
      <h2>{selectedProduct.name}</h2>
      <div className='product__info'>
        <Row>
          <Col sm={2}>
            <p className='name'>Пол</p>
            <p className='name'>Размеры</p>
            <p className='name'>Цвет</p>
          </Col>
          <Col sm={4}>
            <p className='value'>{allGender[selectedProduct.genderId]?.name}</p>
            <p className='value'>{selectedProduct.size}</p>
            <p className='value'>{allColors[selectedProduct.colorId]?.name}</p>
          </Col>
        </Row>
      </div>
      <div className='product__price'>
        Цена: <span>{getPriceWithSpace(selectedProduct.price)}</span> руб.
      </div>
      <div className='product__description__text'>
        {selectedProduct.description}
      </div>
      <Button
        onClick={() => {
          if (!allBasket.length) {
            dispatch(modalActions.changeMode("ordering"))
          }
          handleBuyClick(basketId, selectedProduct.id)
        }}>
        Добавить в корзину
      </Button>
    </div>
  )
}

export default ProductDescription
