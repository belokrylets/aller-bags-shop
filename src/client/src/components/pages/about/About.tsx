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
          <AboutPageBlock title="Aller Bags">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            recusandae accusamus neque consequuntur ipsa corrupti, asperiores,
            quas numquam provident pariatur molestias? Molestiae molestias est
            iste? Officiis aliquam laborum quod rerum minima voluptates
            provident non dolores dolor a, tenetur unde. Voluptatibus, tempore
            voluptatem mollitia fugiat praesentium impedit ratione dignissimos
            consequuntur corrupti consectetur pariatur exercitationem? Aliquam
            esse laborum nisi ex ea accusantium ut obcaecati distinctio nesciunt
            ipsam dolorem porro, sint quasi neque consequatur quae. Deserunt
            nostrum exercitationem quidem saepe laudantium quas fuga non
            aperiam? Adipisci veniam veritatis saepe. Ipsa perspiciatis deleniti
            nihil voluptas quaerat debitis iste magnam quod dolorum officiis ea,
            eaque voluptatem itaque voluptate. Quidem consequatur repudiandae
          </AboutPageBlock>
          <AboutPageBlock title="Индивидуальный пошив">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            recusandae accusamus neque consequuntur ipsa corrupti, asperiores,
            quas numquam provident pariatur molestias? Molestiae molestias est
            iste? Officiis aliquam laborum quod rerum minima voluptates
            provident non dolores dolor a, tenetur unde. Voluptatibus, tempore
            voluptatem mollitia fugiat praesentium impedit ratione dignissimos
            consequuntur corrupti consectetur pariatur exercitationem? Aliquam
          </AboutPageBlock>
          <AboutPageBlock title="Оплата и доставка">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            recusandae accusamus neque consequuntur ipsa corrupti, asperiores,
            quas numquam provident pariatur molestias? Molestiae molestias est
            iste? Officiis aliquam laborum quod rerum minima voluptates
            provident non dolores dolor a, tenetur unde. Voluptatibus, tempore
            voluptatem mollitia fugiat praesentium impedit ratione dignissimos
            consequuntur corrupti consectetur pariatur exercitationem? Aliquam
          </AboutPageBlock>
          <AboutPageBlock title="Возврат товара и денег">
            {" "}
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
