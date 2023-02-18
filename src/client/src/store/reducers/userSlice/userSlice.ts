import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit"
import { IFormPersonalData } from "components/pages/profile/Profile"
import { RootState } from "store/store"
import { fetchAllUsers, fetchUserInfo } from "./actions"
import { IUser, IUserInfo } from "./user.modal"
const usersAdapter = createEntityAdapter<IUser>()
const initialState = usersAdapter.getInitialState({
  user: "",
  userId: "",
  name: "",
  surname: "",
  patronymic: "",
  phone: "",
  userInfoId: "",
  isAuth: false,
  isAdmin: false,
})

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: usersAdapter.updateOne,
    removeUser: usersAdapter.removeOne,
    isAdminChange: (state, action: PayloadAction<boolean>) => {
      state.isAdmin = action.payload
    },
    userChange: (state, action: PayloadAction<string>) => {
      state.user = action.payload
    },
    isAuthChange: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload
    },
    logout: (state) => {
      state.user = ""
      state.isAdmin = false
      state.isAuth = false
    },
    changePersonalData: (state, action: PayloadAction<IFormPersonalData>) => {
      state.user = action.payload.email
      state.name = action.payload.name
      state.surname = action.payload.surname
      state.patronymic = action.payload.patronymic
      state.phone = action.payload.phone
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchAllUsers.fulfilled,
      (state, action: PayloadAction<IUser[]>) => {
        usersAdapter.addMany(state, action.payload)
      }
    )
    builder.addCase(
      fetchUserInfo.fulfilled,
      (state, action: PayloadAction<IUserInfo>) => {
        state.userId = action.payload.userId
        state.userInfoId = action.payload.id
        state.name = action.payload.name
        state.surname = action.payload.surname
        state.patronymic = action.payload.patronymic
        state.phone = action.payload.phone
      }
    )
  },
})

export const userSelector = usersAdapter.getSelectors(
  (state: RootState) => state.user
)

export const { actions } = userSlice
export default userSlice.reducer
