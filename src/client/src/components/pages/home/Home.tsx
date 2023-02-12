import { links } from "shared/helpers/navbarLinks"
import React, { useLayoutEffect, useState } from "react"
import { Button, Container, Row, Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { productsSelector } from "store/reducers/productsSlice/productsSlice"
import { useAppSelector } from "hooks/redux"
import { IProducts } from "store/reducers/productsSlice/products.modal"
import Embla from "components/UI/embla"

const Home = () => {
  const navigate = useNavigate()
  const handleButton = () => {
    navigate(links.catalog.path)
  }
  const allProducts = useAppSelector(productsSelector.selectAll)

  return (
    <>
      <main className='home'>
        <div className='home__banner'>
          <Container fluid='xxl'>
            <Row>
              <Col sm={5}>
                <div className='home__banner__block'>
                  <span>Дизайнерские</span>
                  <span>Аксессуары</span>
                  <span>Aller Bags</span>
                  <Button onClick={handleButton}>Смотреть все</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {allProducts.length ? (
          <Container fluid='xxl'>
            <div className='home__content'>
              <h2 className='home__content__header'>Популярные товары</h2>
              <Embla slides={allProducts} />
            </div>
          </Container>
        ) : null}
      </main>
    </>
  )
}

export default Home
