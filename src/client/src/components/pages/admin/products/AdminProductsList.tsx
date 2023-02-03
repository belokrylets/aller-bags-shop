import React, { useState } from "react"
import { Table, Button, Image } from "react-bootstrap"
import EditProduct from "./EditProduct"
import AddingBlock from "components/UI/AddingBlock"
import { useAppDispatch, useAppSelector } from "hooks/redux"
import {
  actions,
  productsSelector,
} from "store/reducers/productsSlice/productsSlice"
import { imagesSelector } from "store/reducers/imagesSlice/imagesSlice"
import * as productsApi from "api/productsApi"
import { ProductState } from "../edit.modal"
import { IProducts } from "store/reducers/productsSlice/products.modal"

const AdminProductsList = () => {
  const initialState: ProductState = {
    id: "",
    price: 0,
    size: "",
    description: "",
    colorId: "",
    genderId: "",
    categoryId: "",
    imageId: "",
    name: "",
    slug: "",
  }
  const [show, setShow] = useState<boolean>(false)
  const [mode, setMode] = useState<string>("")
  const [state, setState] = useState(initialState)

  const handleClose = () => {
    setShow(false)
    setMode("")
    setState(initialState)
  }
  const dispatch = useAppDispatch()
  const products = useAppSelector(productsSelector.selectAll)
  const images = useAppSelector(imagesSelector.selectEntities)
  const handleTableCLick = (product: IProducts) => {
    setMode("edit")
    setState(product)
    setShow(true)
  }
  const handleAddingCLick = () => {
    setMode("add")
    setShow(true)
  }
  const handleDelete = async (id: string) => {
    if (window.confirm("Удалить товар?")) {
      const deletedId = await productsApi.deleting(id)
      dispatch(actions.removeProduct(id))
    }
  }
  return (
    <>
      <EditProduct
        handleClose={handleClose}
        mode={mode}
        show={show}
        selectedValue={state}
        setState={setState}
      />
      <AddingBlock
        title="Добавить новый товар"
        handleButton={handleAddingCLick}
      />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="col-lg-2">Изображение</th>
            <th className="col-lg-5">Название</th>
            <th className="col-lg-2">Slug</th>
            <th className="col-lg-1">Удалить</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr onClick={() => handleTableCLick(product)} key={product.id}>
              <td key={product.id}>
                <Image
                  width={100}
                  height={100}
                  src={`http://188.68.223.243/${images[product.imageId]?.name}`}
                />
              </td>

              <td>{product.name}</td>
              <td>{product.slug}</td>
              <td
                style={{ height: "115px" }}
                className="d-flex align-items-center justify-content-center"
                onClick={(e) => {
                  e.stopPropagation()
                }}
              >
                <Button
                  onClick={() => {
                    handleDelete(product.id)
                  }}
                >
                  Х
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default AdminProductsList
