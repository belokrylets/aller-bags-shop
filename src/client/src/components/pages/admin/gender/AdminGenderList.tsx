import AddingBlock from "components/UI/AddingBlock"
import { useAppDispatch, useAppSelector } from "hooks/redux"
import React, { useState } from "react"
import { Table, Button } from "react-bootstrap"
import { IGenders } from "store/reducers/gendersSlice/genders.modal"
import {
  actions,
  gendersSelector,
} from "store/reducers/gendersSlice/gendersSlice"
import { ColorGenderCategoryState } from "../edit.modal"
import EditGender from "./EditGender"
import * as genderApi from "api/gendersApi"

const AdminGenderList = () => {
  const dispatch = useAppDispatch()

  const initialState: ColorGenderCategoryState = {
    id: "",
    name: "",
    translate: "",
  }
  const gender = useAppSelector(gendersSelector.selectAll)
  const [show, setShow] = useState<boolean>(false)
  const [mode, setMode] = useState<string>("")
  const [state, setState] = useState(initialState)

  const handleClose = () => {
    setShow(false)
    setState(initialState)
    setMode("")
  }
  const handleTableCLick = (gender: IGenders) => {
    setMode("edit")
    setState(gender)
    setShow(true)
  }
  const handleAddingCLick = () => {
    setMode("add")
    setShow(true)
  }

  const handleDelete = async (id: string) => {
    if (window.confirm("Удалить значение атрибута?")) {
      const deletedId = await genderApi.deleting(id)
      dispatch(actions.removeGender(deletedId))
    }
  }
  return (
    <>
      <EditGender
        handleClose={handleClose}
        mode={mode}
        show={show}
        selectedValue={state}
        setState={setState}
      />
      <AddingBlock
        title="Добавить новый пол"
        handleButton={handleAddingCLick}
      />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Пол</th>
            <th>Translate</th>
            <th>Удалить</th>
          </tr>
        </thead>
        <tbody>
          {gender.map((gen) => (
            <tr key={gen.id} onClick={() => handleTableCLick(gen)}>
              <td>{gen.name}</td>
              <td>{gen.translate}</td>
              <td onClick={(e) => e.stopPropagation()}>
                <Button onClick={() => handleDelete(gen.id)}>Х</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default AdminGenderList
