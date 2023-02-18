import { useAppDispatch, useAppSelector } from "hooks/redux"
import React, { useState, useLayoutEffect } from "react"
import { Modal, Form, Button, Image } from "react-bootstrap"
import { categoriesSelector } from "store/reducers/categoriesSlice/categoriesSlice"
import { colorsSelector } from "store/reducers/colorsSlice/colorsSlice"
import { gendersSelector } from "store/reducers/gendersSlice/gendersSlice"
import { ISelectOptions, ProductState } from "../edit.modal"
import * as imagesApi from "api/imagesApi"
import * as productsApi from "api/productsApi"
import { actions as productsActions } from "store/reducers/productsSlice/productsSlice"
import {
  actions as imagesActions,
  imagesSelector,
} from "store/reducers/imagesSlice/imagesSlice"
import { IImages } from "store/reducers/imagesSlice/images.modal"
import { IProducts } from "store/reducers/productsSlice/products.modal"
import { fetchAllImages } from "store/reducers/imagesSlice/actions"
import { url } from "api"

interface EditProductProps {
  mode: string
  show: boolean
  handleClose: () => void
  selectedValue: ProductState
  setState: React.Dispatch<React.SetStateAction<ProductState>>
}
const EditProduct: React.FC<EditProductProps> = ({
  mode,
  handleClose,
  show,
  selectedValue,
  setState,
}) => {
  const dispatch = useAppDispatch()
  const allImages = useAppSelector(imagesSelector.selectEntities)
  const imagesName: string[] = selectedValue.imagesIds.map(
    (id) => `${url}${allImages[id]?.thumbnails.e_150x150.path}`
  )
  const [images, setImages] = useState<File[]>([])
  const genders = useAppSelector(gendersSelector.selectAll)
  const colors = useAppSelector(colorsSelector.selectAll)
  const categories = useAppSelector(categoriesSelector.selectAll)
  // const images = useAppSelector(imagesSelector.selectAll)
  const handleForm = (e: { target: { name: string; value: string } }) => {
    const newState = { ...selectedValue, [e.target.name]: e.target.value }
    setState(newState)
  }
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentImages = Object.values(e.currentTarget.files!)
    setImages(currentImages)
  }
  const handleSubmit = async () => {
    const formData = new FormData()
    formData.append("id", selectedValue.id)
    formData.append("slug", selectedValue.slug)
    formData.append("description", selectedValue.description)
    formData.append("name", selectedValue.name)
    formData.append("size", selectedValue.size)
    formData.append("price", `${selectedValue.price}`)
    formData.append("categoryId", selectedValue.categoryId)
    formData.append("genderId", selectedValue.genderId)
    formData.append("colorId", selectedValue.colorId)
    if (images.length) {
      images.forEach((image) => {
        formData.append("img", image)
      })
    }
    if (mode === "edit") {
      const updateProduct: IProducts = await productsApi.update(formData)
      dispatch(fetchAllImages())
      dispatch(
        productsActions.updateProduct({
          id: selectedValue.id,
          changes: selectedValue,
        })
      )
    } else {
      const newProduct = await productsApi.create(formData)
      dispatch(fetchAllImages())
      dispatch(productsActions.addProduct(newProduct))
    }
  }
  return (
    <Modal
      show={show}
      centered
      onHide={() => {
        handleClose()
        setImages([])
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>{mode === "add" ? "Добавление" : "Изменение"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Название</Form.Label>
          <Form.Control
            value={selectedValue.name}
            name="name"
            type="text"
            placeholder="Название"
            onChange={handleForm}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Slug</Form.Label>
          <Form.Control
            value={selectedValue.slug}
            name="slug"
            type="text"
            placeholder="slug"
            onChange={handleForm}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Цена</Form.Label>
          <Form.Control
            value={selectedValue.price}
            name="price"
            type="number"
            placeholder="Цена"
            onChange={handleForm}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Размеры (см)</Form.Label>
          <Form.Control
            value={selectedValue.size}
            name="size"
            type="text"
            placeholder="Размеры"
            onChange={handleForm}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Описание</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={selectedValue.description}
            name="description"
            placeholder="Описание"
            onChange={handleForm}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Выбор категории</Form.Label>
          <Form.Select
            name="categoryId"
            value={selectedValue.categoryId}
            onChange={handleForm}
          >
            <option value={""}>Выбор категории</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Выбор цвета</Form.Label>
          <Form.Select
            name="colorId"
            value={selectedValue.colorId}
            onChange={handleForm}
          >
            <option value={""}>Выбор цвета</option>
            {colors.map((color) => (
              <option key={color.id} value={color.id}>
                {color.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Выбор пола</Form.Label>
          <Form.Select
            name="genderId"
            onChange={handleForm}
            value={selectedValue.genderId}
          >
            <option value={""}>Выбор пола</option>
            {genders.map((gender) => (
              <option key={gender.id} value={gender.id}>
                {gender.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Выберите изображения</Form.Label>
          <Form.Control
            onChange={handleFile}
            type="file"
            accept="image/png, image/jpeg"
            multiple
          />
        </Form.Group>
        {mode === "edit" ? (
          <div className="upload__images">
            {imagesName.map((image) => (
              <div className="upload__images__item" key={image}>
                <Image className="admin__image" src={image} />
              </div>
            ))}
          </div>
        ) : null}
      </Modal.Body>
      <Modal.Footer>
        <Button
          disabled={
            !selectedValue.name ||
            !selectedValue.categoryId ||
            !selectedValue.colorId ||
            !selectedValue.description ||
            !selectedValue.genderId ||
            !selectedValue.price ||
            !selectedValue.size ||
            !selectedValue.slug ||
            (!images.length && mode === "add")
          }
          onClick={() => {
            handleSubmit()
            handleClose()
            setImages([])
          }}
          variant="primary"
        >
          {mode === "add" ? "Добавить" : "Сохранить"}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default EditProduct
