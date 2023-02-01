import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit"
import { RootState } from "store/store"
import { getUsersNormalized } from "shared/utils/getNormalized"
import { fetchAllUsers } from "./actions"
import { IUser } from "./user.modal"
const usersAdapter = createEntityAdapter<IUser>()
const initialState = usersAdapter.getInitialState({
  user: "",
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
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchAllUsers.fulfilled,
      (state, action: PayloadAction<IUser>) => {
        const normalizedCategories = getUsersNormalized(action.payload)
        usersAdapter.addMany(state, normalizedCategories!)
      }
    )
  },
})

export const userSelector = usersAdapter.getSelectors(
  (state: RootState) => state.user
)

export const { actions } = userSlice
export default userSlice.reducer
