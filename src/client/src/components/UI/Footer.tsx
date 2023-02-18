import { links } from "shared/helpers/navbarLinks"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { Icon } from "@iconify/react"
const Footer: React.FC = () => {
  const navigate = useNavigate()
  const navigateHandle = (link: string) => {
    navigate(link)
  }
  return (
    <footer>
      <div className="footer__desktop">
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
                  <a className="footer__phone" href="tel:+79213995539">
                    +7 (921) 399 55 39
                  </a>
                  <a href="mailto:aller.bag@yandex.ru">aller.bag@yandex.ru</a>
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
      </div>

      <div className="footer__mobile">
        <div className="footer__mobile__content">
          <div
            onClick={() => navigateHandle(links.home.path)}
            className="footer__mobile__item"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 10.9612C4.5 10.3537 4.77618 9.77906 5.25061 9.39951L10.7506 4.99951C11.481 4.41516 12.519 4.41516 13.2494 4.99951L18.7494 9.39951C19.2238 9.77906 19.5 10.3537 19.5 10.9612L19.5 17.9375C19.5 19.0421 18.6046 19.9375 17.5 19.9375H15.5C14.9477 19.9375 14.5 19.4898 14.5 18.9375V16.1875C14.5 15.6352 14.0523 15.1875 13.5 15.1875H10.5C9.94772 15.1875 9.5 15.6352 9.5 16.1875V18.9375C9.5 19.4898 9.05228 19.9375 8.5 19.9375H6.5C5.39543 19.9375 4.5 19.0421 4.5 17.9375L4.5 10.9612Z"
                stroke="#8E8E98"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Главная
          </div>
          <div
            onClick={() => navigateHandle(links.catalog.path)}
            className="footer__mobile__item"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6H20" stroke="#8E8E98" strokeWidth="1.3" />
              <path d="M4 11.334H16" stroke="#8E8E98" strokeWidth="1.3" />
              <path d="M4 16.666H16" stroke="#8E8E98" strokeWidth="1.3" />
              <path
                d="M18.667 16.666L21.5 19.4993"
                stroke="#8E8E98"
                strokeWidth="1.3"
              />
              <circle
                cx="15.3337"
                cy="13.3327"
                r="4.66667"
                fill="white"
                stroke="#8E8E98"
                strokeWidth="1.3"
              />
            </svg>
            Каталог
          </div>
          <div
            onClick={() => navigateHandle(links.basket.path)}
            className="footer__mobile__item"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 10.3333H20M4 10.3333L5.45622 17.6145C5.64319 18.5493 6.46402 19.2222 7.41738 19.2222H16.5826C17.536 19.2222 18.3568 18.5493 18.5438 17.6145L20 10.3333M4 10.3333L9.33333 5M20 10.3333L14.6667 5"
                stroke="#8E8E98"
                strokeWidth="1.3"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>
            Корзина
          </div>
          <div
            onClick={() => navigateHandle(links.profile.path)}
            className="footer__mobile__item"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 19.4992V19.4992C5 16.5753 7.37026 14.2051 10.2941 14.2051H13.8235C16.7474 14.2051 19.1176 16.5753 19.1176 19.4992V19.4992"
                stroke="#8E8E98"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="8.5293"
                y="4.5"
                width="7.05882"
                height="7.05882"
                rx="3.52941"
                stroke="#8E8E98"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Профиль
          </div>
          <div
            onClick={() => navigateHandle(links.about.path)}
            className="footer__mobile__item"
          >
            <Icon icon="teenyicons:info-small-outline" width="25" height="25" />
            Инфо
          </div>
        </div>
        {/* <div className='created__by'>
          <Container fluid='xxl'>
            Created by{" "}
            <a
              rel='noopener noreferrer'
              href='https://belokrylets.github.io/'
              target='_blank'>
              Sergei Belokrylets
            </a>
          </Container>
        </div> */}
      </div>
    </footer>
  )
}

export default Footer
