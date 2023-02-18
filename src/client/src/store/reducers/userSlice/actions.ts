import { createAsyncThunk } from "@reduxjs/toolkit"
import { $authHost, $host } from "api"

export const fetchAllUsers = createAsyncThunk(
  "users/fetchAllUsers",
  async (_, thunkApi) => {
    try {
      const response = await $authHost.get("api/user")
      const users = response.data
      return users
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)

export const fetchUserInfo = createAsyncThunk(
  "users/fetchUserInfo",
  async (userId: string, thunkApi) => {
    try {
      const response = await $host.get(`api/userInfo/${userId}`)
      const userInfo = response.data
      return userInfo
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)
