import { createAsyncThunk } from "@reduxjs/toolkit"
import { $authHost } from "api"

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
