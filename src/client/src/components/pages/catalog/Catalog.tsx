import PageHeader from "components/UI/PageHeader"
import React, { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import Categories from "./Categories"
import Products from "./Products"

const Catalog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("")

  return (
    <main className="catalog">
      <Container fluid="xxl">
        <PageHeader title="Каталог" />
        <div className="catalog__content">
          <Row>
            <Col sm={3}>
              <Categories
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            </Col>
            <Col sm={9}>
              <Products activeCategory={activeCategory} />
            </Col>
          </Row>
        </div>
      </Container>
    </main>
  )
}

export default Catalog
