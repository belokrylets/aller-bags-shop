import { createAsyncThunk } from "@reduxjs/toolkit"
import { $host } from "api"

export const fetchAllImages = createAsyncThunk(
  "images/fetchAllImages",
  async (_, thunkApi) => {
    try {
      const response = await $host.get(`api/images`)
      const images = response.data
      return images
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)
