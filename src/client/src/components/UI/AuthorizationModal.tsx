import { check, login, registration } from "api/userApi"
import { useAppDispatch, useAppSelector } from "hooks/redux"
import React, { useState, useEffect } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { actions as modalActions } from "store/reducers/modalSlice"
import { actions as userActions } from "store/reducers/userSlice/userSlice"
import { links } from "shared/helpers/navbarLinks"

const AuthorizationModal: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [formState, setFormState] = useState<{
    email: string
    password: string
  }>({ email: "", password: "" })
  const { mode } = useAppSelector((state) => state.modal)
  const [show, setShow] = useState<boolean>(
    mode === "login" || mode === "registration"
  )

  useEffect(() => {
    setShow(mode === "login" || mode === "registration")
  }, [mode])

  const handleClose = () => {
    dispatch(modalActions.resetMode())
  }

  const modalTextHandle = () => {
    if (mode === "login") {
      dispatch(modalActions.changeMode("registration"))
    } else {
      dispatch(modalActions.changeMode("login"))
    }
  }

  const handleForm = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target
    setFormState({ ...formState, [name]: value })
  }

  const handleSubmit = async (mode: string) => {
    try {
      let user
      if (mode === "login") {
        user = await login(formState.email, formState.password)
      } else {
        user = await registration(formState.email, formState.password)
      }

      check().then((data: any) => {
        const isAdmin = data.roles === "ADMIN" ? true : false
        dispatch(userActions.isAdminChange(isAdmin))
        dispatch(userActions.isAuthChange(true))
        dispatch(userActions.userChange(data.email))
        handleClose()
        if (isAdmin) {
          navigate(links.admin.path)
        } else {
          navigate(links.catalog.path)
        }
      })
    } catch (error) {
      // @ts-ignore
      alert(`${error.response.data.message}`)
    }
  }
  const title = mode === "login" ? "Войти" : "Зарегистрироваться"
  const modalText = mode === "registration" ? "Войти" : "Зарегистрироваться"
  return (
    <Modal show={show} animation={true} centered onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Электронная почта</Form.Label>
            <Form.Control
              onChange={handleForm}
              name={"email"}
              value={formState.email}
              type="email"
              placeholder="name@mail.ru"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              onChange={handleForm}
              name={"password"}
              value={formState.password}
              type="password"
              placeholder="Пароль"
            />
          </Form.Group>
          <div onClick={modalTextHandle} className="modal__text">
            {modalText}
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => handleSubmit(mode)}>
          {title}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default AuthorizationModal
