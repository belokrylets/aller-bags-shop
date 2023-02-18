import * as categoryApi from "api/categoriesApi"
import { useAppDispatch } from "hooks/redux"
import React from "react"
import { Modal, Form, Button } from "react-bootstrap"
import { ICategories } from "store/reducers/categoriesSlice/categories.modal"
import { actions } from "store/reducers/categoriesSlice/categoriesSlice"
import { EditProps } from "../edit.modal"

const EditCategories: React.FC<EditProps> = ({
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
      const newCategory: ICategories = await categoryApi.create({
        name: selectedValue.name,
        translate: selectedValue.translate,
      })
      dispatch(actions.addCategory(newCategory))
    } else {
      const updatedCategory = await categoryApi.update({
        id: selectedValue.id,
        name: selectedValue.name,
        translate: selectedValue.translate,
      })
      dispatch(
        actions.updateCategory({
          id: selectedValue.id,
          changes: updatedCategory,
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
          <Form.Label>Категория</Form.Label>
          <Form.Control
            onChange={handleForm}
            value={selectedValue.name}
            type="text"
            name="name"
            placeholder="Кошельки"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Перевод</Form.Label>
          <Form.Control
            onChange={handleForm}
            value={selectedValue.translate}
            type="text"
            name="translate"
            placeholder="koshel"
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

export default EditCategories
