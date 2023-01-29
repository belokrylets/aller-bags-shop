import { useAppDispatch, useAppSelector } from "hooks/redux"
import React, { useState } from "react"
import { Form, Modal, Button } from "react-bootstrap"
import { IUser } from "store/reducers/userSlice/user.modal"
import * as userApi from "api/userApi"
import { actions } from "store/reducers/userSlice/userSlice"

export interface EditEditUser {
  mode: string
  show: boolean
  handleClose: () => void
  selectedValue: IUser
  setState: React.Dispatch<React.SetStateAction<IUser>>
}
const EditUser: React.FC<EditEditUser> = ({
  mode,
  handleClose,
  show,
  selectedValue,
  setState,
}) => {
  const dispatch = useAppDispatch()

  const handleForm = (e: { target: { name: string; value: string } }) => {
    const newState = { ...selectedValue, [e.target.name]: e.target.value }
    setState(newState)
  }
  const submitHandle = async () => {
    const updatedUser: IUser = await userApi.update({
      id: selectedValue.id,
      email: selectedValue.email,
      roles: selectedValue.roles,
    })
    dispatch(
      actions.updateUser({
        id: selectedValue.id,
        changes: updatedUser,
      })
    )
    handleClose()
  }
  return (
    <Modal show={show} centered onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Изменение {selectedValue.email}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Электронная почта</Form.Label>
          <Form.Control
            onChange={handleForm}
            value={selectedValue.email}
            type="email"
            name="email"
            placeholder="name@mail.ru"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Роль</Form.Label>
          <Form.Select
            name="roles"
            onChange={handleForm}
            value={selectedValue.roles}
          >
            <option value={"USER"}>Пользователь</option>
            <option value={"ADMIN"}>Администратор</option>
          </Form.Select>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={submitHandle} variant="primary">
          Сохранить
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default EditUser
