import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { IFormPersonalData } from "./Profile"
import * as userInfoApi from "api/userInfoApi"
import LoaderSpinner from "components/UI/LoaderSpinner"
import { useAppDispatch } from "hooks/redux"
import { actions } from "store/reducers/userSlice/userSlice"
import { check } from "api/userApi"

interface PersonalDataProps {
  profileForm: IFormPersonalData
  setProfileForm: React.Dispatch<React.SetStateAction<IFormPersonalData>>
}

const PersonalData: React.FC<PersonalDataProps> = ({
  profileForm,
  setProfileForm,
}) => {
  const dispatch = useAppDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const handleForm = (e: { target: { name: string; value: string } }) => {
    const newState = { ...profileForm, [e.target.name]: e.target.value }
    setProfileForm(newState)
    dispatch(actions.changePersonalData(newState))
  }

  const submit = async (profileForm: IFormPersonalData) => {
    setIsLoading(true)
    await userInfoApi.update(profileForm)
    setIsLoading(false)
  }
  return (
    <div className="profile__personal__data personal__data">
      <h2 className="personal__data__title">Ваши личные данные</h2>
      <div className="personal__data__input__groups">
        <div className="personal__data__input__group">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Имя</Form.Label>
              <Form.Control
                disabled={isLoading}
                onChange={handleForm}
                value={profileForm.name}
                className="personal__data__input"
                name={"name"}
                type="text"
                placeholder="Имя..."
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Фамилия</Form.Label>
              <Form.Control
                disabled={isLoading}
                onChange={handleForm}
                value={profileForm.surname}
                className="personal__data__input"
                name={"surname"}
                type="text"
                placeholder="Фамилия..."
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Отчество</Form.Label>
              <Form.Control
                disabled={isLoading}
                onChange={handleForm}
                value={profileForm.patronymic}
                className="personal__data__input"
                name={"patronymic"}
                type="text"
                placeholder="Отчество..."
              />
            </Form.Group>
          </Form>
        </div>
        <div className="personal__data__input__group">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Телефон</Form.Label>
              <Form.Control
                disabled={isLoading}
                onChange={handleForm}
                value={profileForm.phone}
                className="personal__data__input"
                name={"phone"}
                type="text"
                placeholder="+7..."
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                disabled={isLoading}
                onChange={handleForm}
                value={profileForm.email}
                className="personal__data__input"
                name={"email"}
                type="email"
                placeholder="name@..."
              />
            </Form.Group>
          </Form>
        </div>
      </div>

      <div className="personal__data__button">
        <Button onClick={() => submit(profileForm)} disabled={isLoading}>
          Сохранить изменения
          {isLoading && <LoaderSpinner />}
        </Button>
      </div>
    </div>
  )
}

export default PersonalData
