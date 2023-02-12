import { links } from "shared/helpers/navbarLinks"
import { useAppSelector } from "hooks/redux"
import React, { useEffect, useLayoutEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import { IProducts } from "store/reducers/productsSlice/products.modal"
import { productsSelector } from "store/reducers/productsSlice/productsSlice"
import CarouselImg from "./CarouselImg"
import ProductDescription from "./ProductDescription"
import { imagesSelector } from "store/reducers/imagesSlice/imagesSlice"

const SelectedProduct: React.FC = () => {
  const allProducts = useAppSelector(productsSelector.selectAll)

  useLayoutEffect(() => {
    if (allProducts.length) {
      const selectedProduct = allProducts.find(
        (product) => product.slug === params.slug
      )
      setSelectedProduct(selectedProduct!)
    }
  }, [allProducts.length])
  const params = useParams()

  const [selectedProduct, setSelectedProduct] = useState<IProducts>({
    id: "",
    price: 0,
    size: "",
    description: "",
    colorId: "",
    genderId: "",
    categoryId: "",
    imagesIds: [],
    name: "",
    slug: "",
  })

  return (
    <main className="selected__book">
      <Container fluid="xxl">
        <div className="selected__book__breadсrumbs">
          <Link className="breadсrumbs__link" to={links.home.path}>
            Главная
          </Link>
          {" / "}
          <Link className="breadсrumbs__link" to={links.catalog.path}>
            Каталог
          </Link>
          {" / "}
          <span className="breadсrumbs__link">Сумка</span>
        </div>
        <Row>
          <Col sm={6}>
            <CarouselImg imagesId={selectedProduct.imagesIds} />
          </Col>
          <Col sm={6}>
            <ProductDescription selectedProduct={selectedProduct} />
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default SelectedProduct
