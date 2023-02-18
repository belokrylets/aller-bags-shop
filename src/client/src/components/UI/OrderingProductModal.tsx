import { useAppDispatch, useAppSelector } from "hooks/redux"
import React, { useEffect, useState } from "react"
import { actions } from "store/reducers/modalSlice"
import { Form, Modal } from "react-bootstrap"
import {
  actions as basketActions,
  basketSelector,
} from "store/reducers/basketSlice/basketSlice"
import BasketProductCard from "components/pages/basket/BasketProductCard"
import { productsSelector } from "store/reducers/productsSlice/productsSlice"
import ButtonWithLoader from "./ButtonWithLoader"
import * as ordersSuccessApi from "api/ordersSuccessApi"
import * as basketApi from "api/basketApi"

interface IForm {
  fullName: string
  phone: string
  email: string
}

const OrderingProductModal = () => {
  const dispatch = useAppDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const { mode } = useAppSelector((state) => state.modal)
  const [show, setShow] = useState<boolean>(mode === "orderingProduct")
  const basketProducts = useAppSelector(basketSelector.selectAll)
  const allProducts = useAppSelector(productsSelector.selectEntities)
  const { name, surname, patronymic, phone, user } = useAppSelector(
    (state) => state.user
  )
  const [form, setForm] = useState<IForm>({
    fullName: "",
    email: "",
    phone: "",
  })
  const handleForm = (e: { target: { name: string; value: string } }) => {
    const newState = { ...form, [e.target.name]: e.target.value }
    setForm(newState)
  }
  useEffect(() => {
    setShow(mode === "orderingProduct")
  }, [mode])
  const basketId = useAppSelector((state) => state.basket.baskedId)

  const handleClose = () => {
    dispatch(actions.resetMode())
  }
  useEffect(() => {
    const initialStateForm = {
      fullName: `${name} ${surname} ${patronymic}`,
      email: user,
      phone: phone,
    }
    setForm(initialStateForm)
  }, [name])

  const submitHandle = async () => {
    setIsLoading(true)
    const productsIds = basketProducts
      .map((product) => product.productId)
      .join()
    await ordersSuccessApi.create({ ...form, productsIds: productsIds })
    dispatch(basketActions.removeAllProducts())
    dispatch(actions.changeMode("orderSuccess"))
    setIsLoading(false)
    await basketApi.clearBasket(basketId)
  }

  return (
    <Modal show={show} animation={true} centered onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Оформление заказа!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>ФИО</Form.Label>
            <Form.Control
              value={form.fullName}
              onChange={handleForm}
              name={"fullName"}
              type="text"
              placeholder="Имя..."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Почта</Form.Label>
            <Form.Control
              value={form.email}
              onChange={handleForm}
              name={"email"}
              type="text"
              placeholder="mail@..."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Телефон</Form.Label>
            <Form.Control
              value={form.phone}
              onChange={handleForm}
              name={"phone"}
              type="text"
              placeholder="+7..."
            />
          </Form.Group>
        </Form>
        <div className="ordering__products">
          {basketProducts.map((product) => (
            <BasketProductCard
              key={product.id}
              basketProductId={product.id}
              product={allProducts[product.productId]!}
            />
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <ButtonWithLoader
          onClick={submitHandle}
          isLoading={isLoading}
          isDisabled={!form.email || !form.fullName || !form.phone || isLoading}
        >
          Оформить заказ
        </ButtonWithLoader>
      </Modal.Footer>
    </Modal>
  )
}

export default OrderingProductModal
