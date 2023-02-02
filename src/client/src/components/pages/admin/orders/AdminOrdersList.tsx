import { useAppDispatch, useAppSelector } from "hooks/redux"
import React from "react"
import { Table, Button } from "react-bootstrap"
import * as ordersApi from "api/ordersApi"
import { ordersSelector, actions } from "store/reducers/ordersSlice/ordersSlice"

const AdminOrdersList = () => {
  const dispatch = useAppDispatch()

  const orders = useAppSelector(ordersSelector.selectAll)

  const handleDelete = async (id: string) => {
    if (window.confirm("Удалить заявку?")) {
      const deletedId = await ordersApi.deleting(id)
      dispatch(actions.removeOrder(deletedId))
    }
  }
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="col-lg-2">Почта</th>
            <th className="col-lg-2">Телефон</th>
            <th className="col-lg-6">Комментарий к заказу</th>
            <th className="col-lg-1">Удалить</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.email}</td>
              <td>{order.phone}</td>
              <td>{order.comment}</td>
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
    </>
  )
}

export default AdminOrdersList
