import { useAppSelector } from "hooks/redux"
import React from "react"
import { Col, Row } from "react-bootstrap"
import { colorsSelector } from "store/reducers/colorsSlice/colorsSlice"
import { gendersSelector } from "store/reducers/gendersSlice/gendersSlice"
import { IProducts } from "store/reducers/productsSlice/products.modal"

interface ProductDescriptionProps {
  selectedProduct: IProducts
}
const ProductDescription: React.FC<ProductDescriptionProps> = ({
  selectedProduct,
}) => {
  const allGender = useAppSelector(gendersSelector.selectEntities)
  const allColors = useAppSelector(colorsSelector.selectEntities)

  return (
    <div className="product__description">
      <h2>{selectedProduct.name}</h2>
      <div className="product__info">
        <Row>
          <Col sm={2}>
            <p className="name">Пол</p>
            <p className="name">Размеры</p>
            <p className="name">Цвет</p>
          </Col>
          <Col sm={4}>
            <p className="value">{allGender[selectedProduct.genderId]?.name}</p>
            <p className="value">{selectedProduct.size}</p>
            <p className="value">{allColors[selectedProduct.colorId]?.name}</p>
          </Col>
        </Row>
      </div>
      <div className="product__price">
        Цена: <span>{selectedProduct.price}</span> руб.
      </div>
      <div className="product__description__text">
        {selectedProduct.description}
      </div>
    </div>
  )
}

export default ProductDescription
