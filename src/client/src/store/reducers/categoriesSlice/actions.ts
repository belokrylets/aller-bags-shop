import { createAsyncThunk } from "@reduxjs/toolkit"
import { $host } from "api"

export const fetchAllCategories = createAsyncThunk(
  "categories/fetchAllCategories",
  async (_, thunkApi) => {
    try {
      const response = await $host.get(`api/categories`)
      const categories = response.data
      return categories
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)
