import React, { useState } from "react"
import { Modal, Form, Button } from "react-bootstrap"
import * as imagesApi from "api/imagesApi"
import { IImages } from "store/reducers/imagesSlice/images.modal"
import { actions } from "store/reducers/imagesSlice/imagesSlice"
import { useAppDispatch } from "hooks/redux"

interface EditProductProps {
  mode: string
  show: boolean
  handleClose: () => void
}
const EditImages: React.FC<EditProductProps> = ({
  mode,
  handleClose,
  show,
}) => {
  const [images, setImages] = useState<File | null>(null)
  const dispatch = useAppDispatch()
  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const image = e.currentTarget.files![0]
    setImages(image)
  }

  const submitHandle = async () => {
    if (mode === "add") {
      const formData = new FormData()
      formData.append("img", images!)

      const newImage: IImages = await imagesApi.create(formData)
      dispatch(actions.addImage(newImage))
    }
  }

  return (
    <Modal show={show} centered onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{mode === "add" ? "Добавление" : "Изменение"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Выберите изображения</Form.Label>
          <Form.Control
            onChange={handleForm}
            type="file"
            accept="image/png, image/jpeg"
            multiple
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

export default EditImages
