import { EntityState, Update } from "@reduxjs/toolkit"
import { IUser } from "store/reducers/userSlice/user.modal"
import usersReducer, { actions } from "store/reducers/userSlice/userSlice"

describe("testing usersReducer", () => {
  test("testing editing user", () => {
    const initialState: EntityState<IUser> & {
      user: string
      isAuth: boolean
      isAdmin: boolean
    } = {
      ids: ["uuid1"],
      entities: {
        uuid1: { email: "email", id: "uuid1", roles: "USER" },
      },
      isAdmin: false,
      isAuth: false,
      user: "",
    }
    const receivedState = {
      ids: ["uuid1"],
      entities: {
        uuid1: { email: "emailNew", id: "uuid1", roles: "ADMIN" },
      },
      isAdmin: false,
      isAuth: false,
      user: "",
    }

    const editedUser: Update<IUser> = {
      id: "uuid1",
      changes: { email: "emailNew", id: "uuid1", roles: "ADMIN" },
    }

    expect(usersReducer(initialState, actions.updateUser(editedUser))).toEqual(
      receivedState
    )
  })
  test("testing remove user", () => {
    const initialState: EntityState<IUser> & {
      user: string
      isAuth: boolean
      isAdmin: boolean
    } = {
      ids: ["uuid1", "uuid2"],
      entities: {
        uuid1: { email: "email", id: "uuid1", roles: "USER" },
        uuid2: { email: "email2", id: "uuid2", roles: "USER" },
      },
      isAdmin: false,
      isAuth: false,
      user: "",
    }
    const receivedState = {
      ids: ["uuid1"],
      entities: {
        uuid1: { email: "email", id: "uuid1", roles: "USER" },
      },
      isAdmin: false,
      isAuth: false,
      user: "",
    }
    expect(usersReducer(initialState, actions.removeUser("uuid2"))).toEqual(
      receivedState
    )
  })
  test("testing isAdmin Change", () => {
    const initialState: EntityState<IUser> & {
      user: string
      isAuth: boolean
      isAdmin: boolean
    } = {
      ids: ["uuid1"],
      entities: {
        uuid1: { email: "email", id: "uuid1", roles: "USER" },
      },
      isAdmin: false,
      isAuth: false,
      user: "",
    }
    const receivedState = {
      ids: ["uuid1"],
      entities: {
        uuid1: { email: "email", id: "uuid1", roles: "USER" },
      },
      isAdmin: true,
      isAuth: false,
      user: "",
    }

    expect(usersReducer(initialState, actions.isAdminChange(true))).toEqual(
      receivedState
    )
  })
  test("testing isAuth Change", () => {
    const initialState: EntityState<IUser> & {
      user: string
      isAuth: boolean
      isAdmin: boolean
    } = {
      ids: ["uuid1"],
      entities: {
        uuid1: { email: "email", id: "uuid1", roles: "USER" },
      },
      isAdmin: false,
      isAuth: false,
      user: "",
    }
    const receivedState = {
      ids: ["uuid1"],
      entities: {
        uuid1: { email: "email", id: "uuid1", roles: "USER" },
      },
      isAdmin: false,
      isAuth: true,
      user: "",
    }

    expect(usersReducer(initialState, actions.isAuthChange(true))).toEqual(
      receivedState
    )
  })
  test("testing user Change", () => {
    const initialState: EntityState<IUser> & {
      user: string
      isAuth: boolean
      isAdmin: boolean
    } = {
      ids: ["uuid1"],
      entities: {
        uuid1: { email: "email", id: "uuid1", roles: "USER" },
      },
      isAdmin: false,
      isAuth: false,
      user: "",
    }
    const receivedState = {
      ids: ["uuid1"],
      entities: {
        uuid1: { email: "email", id: "uuid1", roles: "USER" },
      },
      isAdmin: false,
      isAuth: false,
      user: "user@mail.ru",
    }

    expect(
      usersReducer(initialState, actions.userChange("user@mail.ru"))
    ).toEqual(receivedState)
  })
  test("testing logout", () => {
    const initialState: EntityState<IUser> & {
      user: string
      isAuth: boolean
      isAdmin: boolean
    } = {
      ids: ["uuid1"],
      entities: {
        uuid1: { email: "emailNew", id: "uuid1", roles: "ADMIN" },
      },
      isAdmin: true,
      isAuth: true,
      user: "user@mail.ru",
    }
    const receivedState = {
      ids: ["uuid1"],
      entities: {
        uuid1: { email: "emailNew", id: "uuid1", roles: "ADMIN" },
      },
      isAdmin: false,
      isAuth: false,
      user: "",
    }

    expect(usersReducer(initialState, actions.logout())).toEqual(receivedState)
  })
})
