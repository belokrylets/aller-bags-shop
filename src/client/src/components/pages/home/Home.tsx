import { links } from "shared/helpers/navbarLinks"
import React from "react"
import { Button, Container, Row, Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  const handleButton = () => {
    navigate(links.catalog.path)
  }
  return (
    <main className="home__page">
      <Container fluid="xxl">
        <Row className="justify-content-md-end">
          <Col sm={5}>
            <div className="home__content">
              <span>Дизайнерские</span>
              <span>Аксессуары</span>
              <span>Aller Bags</span>
              <Button onClick={handleButton}>Смотреть все</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default Home
