import React from "react"
import { Button, Image } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { IProducts } from "store/reducers/productsSlice/products.modal"
import { useAppSelector } from "hooks/redux"
import { imagesSelector } from "store/reducers/imagesSlice/imagesSlice"
import { getPriceWithSpace } from "shared/utils/getPriceWithSpace"

interface ProductCardProps {
  product: IProducts
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate()
  const handleCardClick = () => {
    navigate(product.slug)
  }
  const images = useAppSelector(imagesSelector.selectEntities)

  return (
    <div className="product__card">
      <div className="product__image">
        <Image
          width={150}
          height={150}
          src={`http://localhost:5000/${images[product.imageId]?.name}`}
        />
      </div>
      <div className="product__title">{product.name}</div>
      <div className="product__price">
        цена: {getPriceWithSpace(product.price)} руб.
      </div>
      <Button onClick={handleCardClick}>Подробнее</Button>
    </div>
  )
}

export default ProductCard
