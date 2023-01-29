import { links } from "helpers/navbarLinks"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer__content">
        <Container fluid="xxl">
          <Row>
            <Col sm={4}>
              <div className="information">
                <p>ИНФОРМАЦИЯ:</p>
                <Link to={links.about.path}>О нас</Link>
                <Link to={links.about.path}>Оплата и доставка</Link>
                <Link to={links.about.path}>Возврат товара и денег</Link>
              </div>
            </Col>
            <Col sm={4}>
              <div className="contacts">
                <p>КОНТАКТЫ:</p>
                <a className="phone" href="tel:+79213995539">
                  +7 (921) 399 55 39
                </a>
                <a href="mailto:s.belokrylets@gmail.com">aller.bag@yandex.ru</a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="created__by">
        <Container fluid="xxl">
          Created by{" "}
          <a
            rel="noopener noreferrer"
            href="https://belokrylets.github.io/"
            target="_blank"
          >
            Sergei Belokrylets
          </a>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
