import { useAppDispatch, useAppSelector } from "hooks/redux"
import React, { useEffect, useState } from "react"
import { actions } from "store/reducers/modalSlice"
import { Button, Form, Modal } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { links } from "shared/helpers/navbarLinks"

const OrderSuccessModal = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { mode } = useAppSelector((state) => state.modal)
  const [show, setShow] = useState<boolean>(mode === "orderSuccess")

  useEffect(() => {
    setShow(mode === "orderSuccess")
  }, [mode])

  const handleClose = () => {
    dispatch(actions.resetMode())
  }

  return (
    <Modal show={show} animation={true} centered onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Заказ оформлен!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Мы приняли Ваш заказ, наш менеджер свяжется с Вами в течении 24 часов!
      </Modal.Body>
      <Modal.Footer className='ordering__buttons'>
        <Button onClick={handleClose} variant='primary'>
          Закрыть
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default OrderSuccessModal
