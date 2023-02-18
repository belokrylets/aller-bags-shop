import { useAppDispatch, useAppSelector } from "hooks/redux"
import React, { useEffect, useState } from "react"
import { actions } from "store/reducers/modalSlice"
import { Button, Form, Modal } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { links } from "shared/helpers/navbarLinks"

const OrderingModal = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { mode } = useAppSelector((state) => state.modal)
  const [show, setShow] = useState<boolean>(mode === "ordering")

  useEffect(() => {
    setShow(mode === "ordering")
  }, [mode])

  const handleClose = () => {
    dispatch(actions.resetMode())
  }
  const navigateHandle = () => {
    navigate(links.basket.path)
    dispatch(actions.resetMode())
  }

  return (
    <Modal show={show} animation={true} centered onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Товар добавлен в корзину!</Modal.Title>
      </Modal.Header>
      <Modal.Footer className='ordering__buttons'>
        <Button onClick={handleClose} variant='primary'>
          Продолжить покупки
        </Button>
        <Button onClick={navigateHandle} variant='primary'>
          Оформить заказ
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default OrderingModal
