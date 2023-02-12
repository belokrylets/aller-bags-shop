import { url } from "api"
import { useAppDispatch, useAppSelector } from "hooks/redux"
import React from "react"
import { Image } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { links } from "shared/helpers/navbarLinks"
import { IProducts } from "store/reducers/productsSlice/products.modal"
import { productsImagesSelector } from "store/reducers/productsSlice/productsSlice"
import * as basketApi from "api/basketApi"
import { actions } from "store/reducers/basketSlice/basketSlice"

interface BasketProductCardProps {
  product: IProducts
  basketProductId: string
}
const BasketProductCard: React.FC<BasketProductCardProps> = ({
  product,
  basketProductId,
}) => {
  const allImages = useAppSelector(productsImagesSelector.selectEntities)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const cardDeleteHandle = async (id: string) => {
    const idDeleted = await basketApi.deleting(id)
    dispatch(actions.removeBasketProduct(idDeleted))
  }

  const navigateHandle = (path: string) =>
    navigate(`${links.catalog.path}/${path}`)
  return (
    <div className="basket__content__products__list__product list__product">
      <div className="list__product__image">
        <Image
          src={`${url}${
            allImages[product.imagesIds[0]]!.thumbnails.e_150x150.path
          }`}
        />
      </div>
      <div className="list__product__name">
        <span onClick={() => navigateHandle(product.slug)}>{product.name}</span>
      </div>
      <div className="list__product__price">{product.price}</div>
      <div className="list__product__delete">
        <span onClick={() => cardDeleteHandle(basketProductId)}>удалить</span>
      </div>
    </div>
  )
}

export default BasketProductCard
