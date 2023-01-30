import * as categoryApi from "api/categoriesApi"
import AddingBlock from "components/UI/AddingBlock"
import { useAppDispatch, useAppSelector } from "hooks/redux"
import React, { useState } from "react"
import { Table, Button } from "react-bootstrap"
import { ICategories } from "store/reducers/categoriesSlice/categories.modal"
import {
  actions,
  categoriesSelector,
} from "store/reducers/categoriesSlice/categoriesSlice"
import { ColorGenderCategoryState } from "../edit.modal"
import EditCategories from "./EditCategories"

const AdminCategoriesList = () => {
  const dispatch = useAppDispatch()

  const initialState: ColorGenderCategoryState = {
    id: "",
    name: "",
    translate: "",
  }
  const categories = useAppSelector(categoriesSelector.selectAll)
  const [show, setShow] = useState<boolean>(false)
  const [mode, setMode] = useState<string>("")
  const [state, setState] = useState(initialState)

  const handleClose = () => {
    setShow(false)
    setState(initialState)
    setMode("")
  }
  const handleTableCLick = (category: ICategories) => {
    setMode("edit")
    setState(category)
    setShow(true)
  }
  const handleAddingCLick = () => {
    setMode("add")
    setShow(true)
  }

  const handleDelete = async (id: string) => {
    if (window.confirm("Удалить категорию?")) {
      const deletedId = await categoryApi.deleting(id)
      dispatch(actions.removeCategory(deletedId))
    }
  }
  return (
    <>
      <EditCategories
        handleClose={handleClose}
        mode={mode}
        show={show}
        selectedValue={state}
        setState={setState}
      />
      <AddingBlock
        title="Добавить новую категорию"
        handleButton={handleAddingCLick}
      />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="col-lg-6">Категория</th>
            <th className="col-lg-5">Translate</th>
            <th className="col-lg-1">Удалить</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id} onClick={() => handleTableCLick(category)}>
              <td>{category.name}</td>
              <td>{category.translate}</td>
              <td
                className="d-flex align-items-center justify-content-center"
                onClick={(e) => e.stopPropagation()}
              >
                <Button onClick={() => handleDelete(category.id)}>Х</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default AdminCategoriesList
