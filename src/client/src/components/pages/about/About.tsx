import PageHeader from "components/UI/PageHeader"
import React from "react"
import { Container } from "react-bootstrap"
import AboutPageBlock from "./AboutPageBlock"

const About = () => {
  return (
    <main className="about">
      <Container fluid="xxl">
        <PageHeader title="О нас" />
        <div className="about__content">
          <AboutPageBlock title="ALLER Bag's">
            ALLER Bag's - это производство полного цикла кожаных изделий в Санкт-Петербурге.<br />
            Сумки, рюкзаки, портмоне и другие аксессуары – изготавливаем в ручную и только из натуральной кожи!<br />
            Моя задача, как дизайнера и руководителя производить Удобные вещи. Я использую индивидуальный подход к каждому клиенту.<br />
            Философия проста: "Усовершенствовать!"<br />
            Для этого мы развиваем технологию производства.<br />
            Пишите и звоните нам! Мы сделаем эксклюзив!<br />
          </AboutPageBlock>
          <AboutPageBlock title="Индивидуальный пошив">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            recusandae accusamus neque consequuntur ipsa corrupti, asperiores,
            quas numquam provident pariatur molestias? Molestiae molestias est
            iste? Officiis aliquam laborum quod rerum minima voluptates
            provident non dolores dolor a, tenetur unde. Voluptatibus, tempore
            voluptatem mollitia fugiat praesentium impedit ratione dignissimos
            consequuntur corrupti consectetur pariatur exercitationem? Aliquam
          </AboutPageBlock>
          <AboutPageBlock title="Оплата и доставка">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            recusandae accusamus neque consequuntur ipsa corrupti, asperiores,
            quas numquam provident pariatur molestias? Molestiae molestias est
            iste? Officiis aliquam laborum quod rerum minima voluptates
            provident non dolores dolor a, tenetur unde. Voluptatibus, tempore
            voluptatem mollitia fugiat praesentium impedit ratione dignissimos
            consequuntur corrupti consectetur pariatur exercitationem? Aliquam
          </AboutPageBlock>
          <AboutPageBlock title="Возврат товара и денег">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            recusandae accusamus neque consequuntur ipsa corrupti, asperiores,
            quas numquam provident pariatur molestias? Molestiae molestias est
            iste? Officiis aliquam laborum quod rerum minima voluptates
            provident non dolores dolor a, tenetur unde. Voluptatibus, tempore
            voluptatem mollitia fugiat praesentium impedit ratione dignissimos
            consequuntur corrupti consectetur pariatur exercitationem? Aliquam
          </AboutPageBlock>
        </div>
      </Container>
    </main>
  )
}

export default About
