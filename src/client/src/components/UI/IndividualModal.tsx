import { useAppDispatch, useAppSelector } from "hooks/redux"
import React, { useState, useEffect } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import { actions } from "store/reducers/modalSlice"

const IndividualModal: React.FC = () => {
  const dispatch = useAppDispatch()
  const { mode } = useAppSelector((state) => state.modal)
  const [show, setShow] = useState<boolean>(mode === "individual")

  useEffect(() => {
    setShow(mode === "individual")
  }, [mode])

  const handleClose = () => {
    dispatch(actions.resetMode())
  }

  return (
    <Modal show={show} animation={true} centered onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Заявка на индивидуальный пошив</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Электронная почта</Form.Label>
            <Form.Control type="email" placeholder="name@mail.ru" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Номер телефона</Form.Label>
            <Form.Control type="phone" placeholder="8931..." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Комментарий к заявке</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <div className="modal__text">
            <span>Оставить заявку по телефону:</span>{" "}
            <a className="phone" href="tel:+79213995539">
              +7 (921) 399 55 39
            </a>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Отправить
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default IndividualModal
