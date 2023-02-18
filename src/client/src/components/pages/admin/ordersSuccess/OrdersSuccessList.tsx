import { useAppDispatch, useAppSelector } from "hooks/redux"
import React from "react"
import { Button, Table } from "react-bootstrap"
import {
  actions,
  ordersSelector,
} from "store/reducers/ordersSuccessSlice/ordersSuccessSlice"
import * as ordersSuccessApi from "api/ordersSuccessApi"
import { useNavigate } from "react-router-dom"

const OrdersSuccessList = () => {
  const navigate = useNavigate()
  const ordersSuccessList = useAppSelector(ordersSelector.selectAll)

  const dispatch = useAppDispatch()

  const handleRowClick = (link: string) => {
    navigate(`${link}`)
  }

  const handleDelete = async (id: string) => {
    if (window.confirm("Удалить заказ?")) {
      await ordersSuccessApi.deleting(id)
      dispatch(actions.removeOrder(id))
    }
  }
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th className="col-lg-5">ФИО</th>
          <th className="col-lg-2">Почта</th>
          <th className="col-lg-2">Телефон</th>
          <th className="col-lg-1">Удалить</th>
        </tr>
      </thead>
      <tbody>
        {ordersSuccessList.map((order) => (
          <tr
            key={order.id}
            onClick={() => {
              handleRowClick(order.id)
            }}
          >
            <td>{order.fullName}</td>
            <td>{order.email}</td>
            <td>{order.phone}</td>
            <td
              className="d-flex align-items-center justify-content-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Button onClick={() => handleDelete(order.id)}>Х</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default OrdersSuccessList
