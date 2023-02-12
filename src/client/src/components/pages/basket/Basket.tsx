import PageHeader from "components/UI/PageHeader"
import React from "react"
import { Container } from "react-bootstrap"
import { links } from "shared/helpers/navbarLinks"
import BasketProducts from "./BasketProducts"
import BasketTotal from "./BasketTotal"

const Basket = () => {
  return (
    <main className="basket">
      <Container fluid="xxl">
        <PageHeader title={links.basket.title} />
        <div className="basket__content">
          <BasketProducts />
          <BasketTotal />
        </div>
      </Container>
    </main>
  )
}

export default Basket
