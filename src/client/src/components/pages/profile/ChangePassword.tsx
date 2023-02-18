import React from "react"
import { Button, Form } from "react-bootstrap"
import { IChangePassword } from "./Profile"

interface ChangePasswordProps {
  changePassword: IChangePassword
  setChangePassword: React.Dispatch<React.SetStateAction<IChangePassword>>
}

const ChangePassword: React.FC<ChangePasswordProps> = ({
  changePassword,
  setChangePassword,
}) => {
  const handleChangePassword = (e: {
    target: { name: string; value: string }
  }) => {
    const newState = { ...changePassword, [e.target.name]: e.target.value }
    setChangePassword(newState)
  }
  return (
    <div className="profile__change__password change__password">
      <h2 className="change__password__title">Изменить пароль</h2>
      <div className="change__password__input__group">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Введите текущий пароль</Form.Label>
            <Form.Control
              onChange={handleChangePassword}
              value={changePassword.password}
              className="change__password__input"
              name={"password"}
              type="password"
              placeholder="Пароль..."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Новый пароль</Form.Label>
            <Form.Control
              onChange={handleChangePassword}
              value={changePassword.newPassword}
              className="change__password__input"
              name={"newPassword"}
              type="password"
              placeholder="Пароль..."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Повторите новый пароль</Form.Label>
            <Form.Control
              onChange={handleChangePassword}
              value={changePassword.replaceNewPassword}
              className="change__password__input"
              name={"replaceNewPassword"}
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
  )
}

export default ChangePassword
