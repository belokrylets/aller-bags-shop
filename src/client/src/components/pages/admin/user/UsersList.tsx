import { useAppDispatch, useAppSelector } from "hooks/redux"
import React, { useState } from "react"
import { Button, Table } from "react-bootstrap"
import { IUser } from "store/reducers/userSlice/user.modal"
import { userSelector } from "store/reducers/userSlice/userSlice"
import EditUser from "./EditUser"
import * as userApi from "api/userApi"
import { actions } from "store/reducers/userSlice/userSlice"

const UsersList = () => {
  const allUsers = useAppSelector(userSelector.selectAll)
  const dispatch = useAppDispatch()

  const initialState: IUser = {
    id: "",
    email: "",
    roles: "",
  }
  const [show, setShow] = useState<boolean>(false)
  const [mode, setMode] = useState<string>("")
  const [state, setState] = useState(initialState)
  const handleClose = () => {
    setShow(false)
    setState(initialState)
    setMode("")
  }
  const handleTableCLick = (user: IUser) => {
    setMode("edit")
    setState(user)
    setShow(true)
  }

  const handleDelete = async (id: string) => {
    if (window.confirm("Удалить значение атрибута?")) {
      const deletedId = await userApi.deleting(id)
      dispatch(actions.removeUser(deletedId))
    }
  }
  return (
    <>
      <EditUser
        handleClose={handleClose}
        mode={mode}
        show={show}
        selectedValue={state}
        setState={setState}
      />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="col-lg-6">Почта</th>
            <th className="col-lg-5">Роль</th>
            <th className="col-lg-1">Удалить</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user) => (
            <tr onClick={() => handleTableCLick(user)}>
              <td>{user.email}</td>
              <td>{user.roles}</td>
              <td
                className="d-flex align-items-center justify-content-center"
                onClick={(e) => e.stopPropagation()}
              >
                <Button onClick={() => handleDelete(user.id)}>Х</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default UsersList
