import PageHeader from "components/UI/PageHeader"
import { useAppSelector } from "hooks/redux"
import React, { useEffect, useState } from "react"
import { Button, Container, Form } from "react-bootstrap"
import { links } from "shared/helpers/navbarLinks"
import ChangePassword from "./ChangePassword"
import PersonalData from "./PersonalData"

export interface IFormPersonalData {
  name: string
  surname: string
  patronymic: string
  phone: string
  email: string
  userId: string
  id: string
}

export interface IChangePassword {
  userId: string
  password: string
  newPassword: string
  replaceNewPassword: string
}

const Profile = () => {
  const [profileForm, setProfileForm] = useState<IFormPersonalData>({
    name: "",
    surname: "",
    patronymic: "",
    email: "",
    id: "",
    phone: "",
    userId: "",
  })

  const [changePassword, setChangePassword] = useState<IChangePassword>({
    password: "",
    newPassword: "",
    replaceNewPassword: "",
    userId: "",
  })

  const user = useAppSelector((state) => state.user)

  useEffect(() => {
    const initialStateForm: IFormPersonalData = {
      id: user.userInfoId,
      email: user.user,
      name: user.name,
      surname: user.surname,
      patronymic: user.patronymic,
      phone: user.phone,
      userId: user.userId,
    }
    setProfileForm(initialStateForm)
  }, [profileForm])

  return (
    <main className="profile">
      <Container fluid="xxl">
        <PageHeader title={links.profile.title} />
        <div className="profile__content">
          <PersonalData
            profileForm={profileForm}
            setProfileForm={setProfileForm}
          />
          <ChangePassword
            changePassword={changePassword}
            setChangePassword={setChangePassword}
          />
        </div>
      </Container>
    </main>
  )
}

export default Profile
