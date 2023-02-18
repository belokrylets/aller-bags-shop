import React from "react"
import { Button, Image } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { IProducts } from "store/reducers/productsSlice/products.modal"
import { useAppDispatch, useAppSelector } from "hooks/redux"
import { getPriceWithSpace } from "shared/utils/getPriceWithSpace"
import { url } from "api"
import { productsImagesSelector } from "store/reducers/productsSlice/productsSlice"
import * as basketApi from "api/basketApi"
import { actions, basketSelector } from "store/reducers/basketSlice/basketSlice"
import { actions as modalActions } from "store/reducers/modalSlice"

interface ProductCardProps {
  product: IProducts
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch()
  const basketId = useAppSelector((state) => state.basket.baskedId)
  const navigate = useNavigate()
  const handleCardClick = () => {
    navigate(product.slug)
  }
  const allBasket = useAppSelector(basketSelector.selectAll)

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
  const images = useAppSelector(productsImagesSelector.selectEntities)

  return (
    <div className='product__card'>
      <div onClick={handleCardClick} className='product__image'>
        <Image
          src={`${url}${
            images[product.imagesIds[0]]!.thumbnails.e_150x150.path
          }`}
        />
      </div>
      <div onClick={handleCardClick} className='product__title'>
        {product.name}
      </div>
      <div className='product__price'>
        цена: {getPriceWithSpace(product.price)} руб.
      </div>
      <Button
        onClick={() => {
          if (!allBasket.length) {
            dispatch(modalActions.changeMode("ordering"))
          }
          handleBuyClick(basketId, product.id)
        }}>
        Купить
      </Button>
    </div>
  )
}

export default ProductCard
