import { url } from "api"
import { useAppSelector } from "hooks/redux"
import React from "react"
import { Button, Image } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { getPriceWithSpace } from "shared/utils/getPriceWithSpace"
import { IProducts } from "store/reducers/productsSlice/products.modal"
import { productsImagesSelector } from "store/reducers/productsSlice/productsSlice"
interface ProductCardProps {
  product: IProducts
}
const CarouselCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate()
  const handleCardClick = () => {
    navigate(`catalog/${product.slug}`)
  }
  const images = useAppSelector(productsImagesSelector.selectEntities)
  return (
    <div className="embla__slide__element">
      <div className="image">
        <Image
          src={`${url}${images[product.imagesIds[0]]!.thumbnails.h_500.path}`}
        />
      </div>
      <div className="title">{product.name}</div>
      <div className="price">цена: {getPriceWithSpace(product.price)} руб.</div>
      <Button onClick={handleCardClick}>Подробнее</Button>
    </div>
  )
}

export default CarouselCard
