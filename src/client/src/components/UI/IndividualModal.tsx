import { useAppDispatch, useAppSelector } from "hooks/redux"
import React, { useState, useEffect } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import { actions } from "store/reducers/modalSlice"
import * as ordersApi from "api/ordersApi"

const IndividualModal: React.FC = () => {
  const dispatch = useAppDispatch()
  const { mode } = useAppSelector((state) => state.modal)
  const [show, setShow] = useState<boolean>(mode === "individual")
  const [form, setForm] = useState<{
    email: string
    phone: string
    comment: string
  }>({
    email: "",
    comment: "",
    phone: "",
  })
  useEffect(() => {
    setShow(mode === "individual")
  }, [mode])

  const handleClose = () => {
    dispatch(actions.resetMode())
  }

  const handleSubmit = async () => {
    await ordersApi.create(form)
    dispatch(actions.resetMode())
    setForm({
      email: "",
      comment: "",
      phone: "",
    })
  }
  const handleForm = (e: { target: { name: string; value: string } }) => {
    const newState = { ...form, [e.target.name]: e.target.value }
    setForm(newState)
  }
  return (
    <Modal show={show} animation={true} centered onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Заявка на индивидуальный пошив</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Электронная почта</Form.Label>
            <Form.Control
              type='email'
              name='email'
              placeholder='name@mail.ru'
              onChange={handleForm}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Номер телефона</Form.Label>
            <Form.Control
              onChange={handleForm}
              type='phone'
              name='phone'
              placeholder='8931...'
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Комментарий к заявке</Form.Label>
            <Form.Control
              onChange={handleForm}
              name='comment'
              as='textarea'
              rows={3}
            />
          </Form.Group>
          <div className='modal__text'>
            <span>Оставить заявку по телефону:</span>{" "}
            <a className='phone' href='tel:+79213995539'>
              +7 (921) 399 55 39
            </a>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          disabled={!form.email || !form.comment || !form.phone}
          variant='primary'
          onClick={handleSubmit}>
          Отправить
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default IndividualModal
