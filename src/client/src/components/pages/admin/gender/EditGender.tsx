import * as genderApi from "api/gendersApi"
import { useAppDispatch } from "hooks/redux"
import React from "react"
import { Modal, Form, Button } from "react-bootstrap"
import { IGenders } from "store/reducers/gendersSlice/genders.modal"
import { actions } from "store/reducers/gendersSlice/gendersSlice"
import { EditProps } from "../edit.modal"

const EditGender: React.FC<EditProps> = ({
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
    if (mode === "add") {
      const newGender: IGenders = await genderApi.create({
        name: selectedValue.name,
        translate: selectedValue.translate,
      })
      dispatch(actions.addGender(newGender))
    } else {
      const updatedGender: IGenders = await genderApi.update({
        id: selectedValue.id,
        name: selectedValue.name,
        translate: selectedValue.translate,
      })
      dispatch(
        actions.updateGender({
          id: selectedValue.id,
          changes: updatedGender,
        })
      )
    }
  }
  return (
    <Modal show={show} centered onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {mode === "add"
            ? "Добавить категорию"
            : `Изменение ${selectedValue.name}`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Пол</Form.Label>
          <Form.Control
            onChange={handleForm}
            value={selectedValue.name}
            type="text"
            name="name"
            placeholder="Мужской"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Перевод</Form.Label>
          <Form.Control
            onChange={handleForm}
            value={selectedValue.translate}
            type="text"
            name="translate"
            placeholder="men"
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            submitHandle()
            handleClose()
          }}
          variant="primary"
        >
          {mode === "add" ? "Добавить" : "Сохранить"}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default EditGender
