import * as colorApi from "api/colorsApi"
import { useAppDispatch } from "hooks/redux"
import React from "react"
import { Modal, Form, Button } from "react-bootstrap"
import { IColors } from "store/reducers/colorsSlice/colors.modal"
import { actions } from "store/reducers/colorsSlice/colorsSlice"
import { EditProps } from "../edit.modal"

const EditColor: React.FC<EditProps> = ({
  mode,
  handleClose,
  show,
  selectedValue,
  setState,
}) => {
  const dispatch = useAppDispatch()

  const handleForm = (e: { target: { name: string; value: string } }) => {
    const newState = { ...selectedValue, [e.target.name]: e.target.value }
    setState!(newState)
  }
  const submitHandle = async () => {
    if (mode === "add") {
      const newColor: IColors = await colorApi.create({
        name: selectedValue.name,
        translate: selectedValue.translate,
      })
      dispatch(actions.addColor(newColor))
    } else {
      const updatedColor: IColors = await colorApi.update({
        id: selectedValue.id,
        name: selectedValue.name,
        translate: selectedValue.translate,
      })
      dispatch(
        actions.updateColor({
          id: selectedValue.id,
          changes: updatedColor,
        })
      )
    }
  }
  return (
    <Modal show={show} centered onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {mode === "add" ? "Добавить цвет" : `Изменение ${selectedValue.name}`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Цвет</Form.Label>
          <Form.Control
            onChange={handleForm}
            value={selectedValue.name}
            type="text"
            name="name"
            placeholder="Черный"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Перевод</Form.Label>
          <Form.Control
            onChange={handleForm}
            value={selectedValue.translate}
            type="text"
            name="translate"
            placeholder="black"
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button
          disabled={!selectedValue.name || !selectedValue.translate}
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

export default EditColor
