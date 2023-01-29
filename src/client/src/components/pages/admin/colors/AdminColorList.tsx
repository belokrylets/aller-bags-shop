import AddingBlock from "components/UI/AddingBlock"
import { useAppDispatch, useAppSelector } from "hooks/redux"
import React, { useState } from "react"
import { Button, Table } from "react-bootstrap"
import { IColors } from "store/reducers/colorsSlice/colors.modal"
import { actions, colorsSelector } from "store/reducers/colorsSlice/colorsSlice"
import { ColorGenderCategoryState } from "../edit.modal"
import EditColor from "./EditColor"
import * as colorApi from "api/colorsApi"

const AdminColorList = () => {
  const dispatch = useAppDispatch()

  const initialState: ColorGenderCategoryState = {
    id: "",
    name: "",
    translate: "",
  }
  const color = useAppSelector(colorsSelector.selectAll)
  const [show, setShow] = useState<boolean>(false)
  const [mode, setMode] = useState<string>("")
  const [state, setState] = useState(initialState)

  const handleClose = () => {
    setShow(false)
    setState(initialState)
    setMode("")
  }
  const handleTableCLick = (color: IColors) => {
    setMode("edit")
    setState(color)
    setShow(true)
  }
  const handleAddingCLick = () => {
    setMode("add")
    setShow(true)
  }

  const handleDelete = async (id: string) => {
    if (window.confirm("Удалить цвет?")) {
      const deletedId = await colorApi.deleting(id)
      dispatch(actions.removeColor(deletedId))
    }
  }
  return (
    <>
      <EditColor
        handleClose={handleClose}
        mode={mode}
        show={show}
        selectedValue={state}
        setState={setState}
      />
      <AddingBlock
        title="Добавить новый цвет"
        handleButton={handleAddingCLick}
      />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Цвет</th>
            <th>Translate</th>
            <th>Удалить</th>
          </tr>
        </thead>
        <tbody>
          {color.map((col) => (
            <tr key={col.id} onClick={() => handleTableCLick(col)}>
              <td>{col.name}</td>
              <td>{col.translate}</td>
              <td onClick={(e) => e.stopPropagation()}>
                <Button onClick={() => handleDelete(col.id)}>Х</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default AdminColorList
