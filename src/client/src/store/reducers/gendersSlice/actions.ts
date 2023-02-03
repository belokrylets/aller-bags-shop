import { createAsyncThunk } from "@reduxjs/toolkit"
import { $host } from "api"

export const fetchAllGenders = createAsyncThunk(
  "genders/fetchAllGenders",
  async (_, thunkApi) => {
    try {
      const response = await $host.get(`api/gender`)
      const genders = response.data
      return genders
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)
