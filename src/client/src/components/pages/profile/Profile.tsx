import PageHeader from "components/UI/PageHeader"
import React from "react"
import { Button, Container, Form } from "react-bootstrap"
import { links } from "shared/helpers/navbarLinks"

const Profile = () => {
  return (
    <main className="profile">
      <Container fluid="xxl">
        <PageHeader title={links.profile.title} />
        <div className="profile__content">
          <div className="profile__personal__data personal__data">
            <h2 className="personal__data__title">Ваши личные данные</h2>
            <div className="personal__data__input__groups">
              <div className="personal__data__input__group">
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Имя</Form.Label>
                    <Form.Control
                      className="personal__data__input"
                      name={"email"}
                      type="text"
                      placeholder="Имя..."
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Фамилия</Form.Label>
                    <Form.Control
                      className="personal__data__input"
                      name={"email"}
                      type="text"
                      placeholder="Фамилия..."
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Отчество</Form.Label>
                    <Form.Control
                      className="personal__data__input"
                      name={"email"}
                      type="text"
                      placeholder="Отчество..."
                    />
                  </Form.Group>
                </Form>
              </div>
              <div className="personal__data__input__group">
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Телефон</Form.Label>
                    <Form.Control
                      className="personal__data__input"
                      name={"email"}
                      type="text"
                      placeholder="+7..."
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      className="personal__data__input"
                      name={"email"}
                      type="email"
                      placeholder="name@..."
                    />
                  </Form.Group>
                </Form>
              </div>
            </div>

            <div className="personal__data__button">
              <Button>Сохранить изменения</Button>
            </div>
          </div>
          <div className="profile__change__password change__password">
            <h2 className="change__password__title">Изменить пароль</h2>
            <div className="change__password__input__group">
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Введите текущий пароль</Form.Label>
                  <Form.Control
                    className="change__password__input"
                    name={"email"}
                    type="password"
                    placeholder="Пароль..."
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Новый пароль</Form.Label>
                  <Form.Control
                    className="change__password__input"
                    name={"email"}
                    type="password"
                    placeholder="Пароль..."
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Повторите новый пароль</Form.Label>
                  <Form.Control
                    className="change__password__input"
                    name={"email"}
                    type="password"
                    placeholder="Пароль..."
                  />
                </Form.Group>
              </Form>
            </div>
            <div className="change__password__button">
              <Button>Изменить пароль</Button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}

export default Profile
